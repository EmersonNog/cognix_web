const META_PIXEL_ID = '1479374593823597'
const META_PIXEL_SCRIPT_ID = 'meta-pixel-script'
const META_PIXEL_SCRIPT_URL =
  'https://connect.facebook.net/en_US/fbevents.js'

type MetaPixelParameters = Record<string, string | number | boolean | null>

type MetaPixelFn = ((
  command: string,
  eventNameOrId: string,
  parameters?: MetaPixelParameters,
) => void) & {
  callMethod?: (...args: unknown[]) => void
  loaded?: boolean
  queue?: unknown[][]
  version?: string
}

declare global {
  interface Window {
    _fbq?: MetaPixelFn
    __metaPixelInitialized?: boolean
    __metaPixelLastPageView?: string
    fbq?: MetaPixelFn
  }
}

function canUseMetaPixel() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function ensureMetaPixelQueue() {
  if (window.fbq) {
    return
  }

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args)
      return
    }

    fbq.queue?.push(args)
  }) as MetaPixelFn

  fbq.loaded = true
  fbq.queue = []
  fbq.version = '2.0'

  window.fbq = fbq
  window._fbq = fbq
}

function ensureMetaPixelScript() {
  if (document.getElementById(META_PIXEL_SCRIPT_ID)) {
    return
  }

  const script = document.createElement('script')
  const firstScript = document.getElementsByTagName('script')[0]

  script.id = META_PIXEL_SCRIPT_ID
  script.async = true
  script.src = META_PIXEL_SCRIPT_URL

  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
    return
  }

  document.head.appendChild(script)
}

function resolvePageViewKey() {
  if (!canUseMetaPixel()) {
    return ''
  }

  const { hash, pathname, search } = window.location

  return `${pathname}${search}${hash.startsWith('#/') ? hash : ''}`
}

export function initMetaPixel() {
  if (!canUseMetaPixel() || window.__metaPixelInitialized) {
    return
  }

  ensureMetaPixelQueue()
  ensureMetaPixelScript()

  window.fbq?.('init', META_PIXEL_ID)
  window.__metaPixelInitialized = true
}

export function trackMetaEvent(
  eventName: string,
  parameters?: MetaPixelParameters,
) {
  if (!canUseMetaPixel()) {
    return
  }

  initMetaPixel()

  if (!window.fbq) {
    return
  }

  if (parameters) {
    window.fbq('track', eventName, parameters)
    return
  }

  window.fbq('track', eventName)
}

export function trackMetaLead() {
  trackMetaEvent('Lead')
}

export function trackMetaPageView(pageViewKey = resolvePageViewKey()) {
  if (!canUseMetaPixel() || !pageViewKey) {
    return
  }

  initMetaPixel()

  if (!window.fbq || window.__metaPixelLastPageView === pageViewKey) {
    return
  }

  window.fbq('track', 'PageView')
  window.__metaPixelLastPageView = pageViewKey
}
