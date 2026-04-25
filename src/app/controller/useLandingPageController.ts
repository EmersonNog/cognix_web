import { useEffect, useState } from 'react'

import { findLegalPage } from '@/app/model/legal-pages'

function resolveLegalPageFromLocation() {
  const currentSlug = resolveCurrentSlug()

  return findLegalPage(currentSlug)
}

function resolveCurrentSlug() {
  if (typeof window === 'undefined') {
    return ''
  }

  const hashSlug = window.location.hash.startsWith('#/')
    ? window.location.hash.slice(2).split(/[?#]/)[0].replace(/^\/+|\/+$/g, '')
    : ''
  const pathSlug = window.location.pathname.replace(/^\/+|\/+$/g, '')

  return hashSlug || pathSlug
}

function resolveIsContactPage() {
  return resolveCurrentSlug() === 'contato'
}

function scrollToCurrentHashTarget() {
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

export function useLandingPageController() {
  const [isScrolled, setIsScrolled] = useState(
    typeof window !== 'undefined' ? window.scrollY > 8 : false,
  )
  const [legalPage, setLegalPage] = useState(resolveLegalPageFromLocation)
  const [isContactPage, setIsContactPage] = useState(resolveIsContactPage)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const onRouteChange = () => {
      setLegalPage(resolveLegalPageFromLocation())
      setIsContactPage(resolveIsContactPage())
      scrollToCurrentHashTarget()
    }

    window.addEventListener('hashchange', onRouteChange)
    window.addEventListener('popstate', onRouteChange)

    return () => {
      window.removeEventListener('hashchange', onRouteChange)
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const frame = window.requestAnimationFrame(() => {
      const revealElements = Array.from(
        document.querySelectorAll<HTMLElement>('[data-reveal]'),
      )

      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window)
      ) {
        revealElements.forEach((element) => {
          element.classList.add('on')
        })
        return
      }

      const nextObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on')
              nextObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08 },
      )

      observer = nextObserver
      revealElements.forEach((element) => nextObserver.observe(element))
    })

    return () => {
      window.cancelAnimationFrame(frame)

      if (observer) {
        observer.disconnect()
      }
    }
  }, [isContactPage, legalPage?.slug])

  return {
    isContactPage,
    isScrolled,
    legalPage,
  }
}
