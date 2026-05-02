import { useEffect } from 'react'

type UseRevealElementsInput = {
  isContactPage: boolean
  isSubscriptionPage: boolean
  legalPageSlug?: string
}

export function useRevealElements({
  isContactPage,
  isSubscriptionPage,
  legalPageSlug,
}: UseRevealElementsInput) {
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
  }, [isContactPage, isSubscriptionPage, legalPageSlug])
}
