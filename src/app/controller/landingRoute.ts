import { findLegalPage } from '@/app/model/legal-pages'

export function resolveLegalPageFromLocation() {
  return findLegalPage(resolveCurrentSlug())
}

export function resolveCurrentSlug() {
  if (typeof window === 'undefined') {
    return ''
  }

  const hashSlug = window.location.hash.startsWith('#/')
    ? window.location.hash.slice(2).split(/[?#]/)[0].replace(/^\/+|\/+$/g, '')
    : ''
  const pathSlug = window.location.pathname.replace(/^\/+|\/+$/g, '')

  return hashSlug || pathSlug
}

export function resolveIsContactPage() {
  return resolveCurrentSlug() === 'contato'
}

export function resolveIsSubscriptionPage() {
  return resolveCurrentSlug() === 'assinatura'
}

export function scrollToCurrentHashTarget() {
  const hash = window.location.hash

  if (!hash || hash.startsWith('#/')) {
    window.scrollTo({ top: 0 })
    return
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))

      if (target) {
        target.scrollIntoView()
      }
    })
  })
}
