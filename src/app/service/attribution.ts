import {
  canUseDom,
  safeParseJson,
} from '@/app/service/browserRuntime'

const ATTRIBUTION_STORAGE_KEY = 'cognix.checkoutAttribution'
const MAX_ATTRIBUTION_VALUE_LENGTH = 300

const TRACKING_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'src',
  'sck',
  'xcod',
  'fbclid',
  'gclid',
  'ttclid',
] as const

const META_COOKIE_KEYS = ['_fbp', '_fbc'] as const

export type CheckoutAttribution = Partial<
  Record<(typeof TRACKING_KEYS)[number] | (typeof META_COOKIE_KEYS)[number], string>
> & {
  capturedAt?: string
  landingPage?: string
  referrer?: string
}

function sanitizeAttributionValue(value: string | null) {
  if (!value) {
    return undefined
  }

  const sanitized = Array.from(value)
    .filter((character) => {
      const charCode = character.charCodeAt(0)

      return charCode >= 32 && charCode !== 127
    })
    .join('')
    .trim()

  return sanitized ? sanitized.slice(0, MAX_ATTRIBUTION_VALUE_LENGTH) : undefined
}

function readCookie(name: string) {
  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))

  if (!cookie) {
    return undefined
  }

  try {
    return sanitizeAttributionValue(decodeURIComponent(cookie.slice(name.length + 1)))
  } catch {
    return undefined
  }
}

function readStoredAttribution(): CheckoutAttribution {
  if (!canUseDom()) {
    return {}
  }

  try {
    const parsed = safeParseJson<CheckoutAttribution>(
      window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY),
      {},
    )

    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function writeStoredAttribution(attribution: CheckoutAttribution) {
  try {
    window.localStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(attribution),
    )
  } catch {
    // Os dados de rastreamento são úteis, mas o processo de finalização da compra precisa continuar funcionando sem armazenamento.
  }
}

export function captureAttributionFromCurrentUrl() {
  if (!canUseDom()) {
    return
  }

  const params = new URLSearchParams(window.location.search)
  const currentAttribution: CheckoutAttribution = {}

  TRACKING_KEYS.forEach((key) => {
    const value = sanitizeAttributionValue(params.get(key))

    if (value) {
      currentAttribution[key] = value
    }
  })

  META_COOKIE_KEYS.forEach((key) => {
    const value = readCookie(key)

    if (value) {
      currentAttribution[key] = value
    }
  })

  if (Object.keys(currentAttribution).length === 0) {
    return
  }

  writeStoredAttribution({
    ...readStoredAttribution(),
    ...currentAttribution,
    capturedAt: new Date().toISOString(),
    landingPage: `${window.location.pathname}${window.location.search}`,
    referrer: sanitizeAttributionValue(document.referrer),
  })
}

export function readCheckoutAttribution(): CheckoutAttribution | undefined {
  const stored = readStoredAttribution()
  const attribution: CheckoutAttribution = { ...stored }

  if (canUseDom()) {
    META_COOKIE_KEYS.forEach((key) => {
      const value = readCookie(key)

      if (value) {
        attribution[key] = value
      }
    })
  }

  return Object.keys(attribution).length > 0 ? attribution : undefined
}
