import { useEffect, useState } from 'react'

export function useLandingPageController() {
  const [isScrolled, setIsScrolled] = useState(
    typeof window !== 'undefined' ? window.scrollY > 8 : false,
  )

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

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
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08 },
      )

      revealElements.forEach((element) => observer.observe(element))

      return () => {
        window.removeEventListener('scroll', onScroll)
        observer.disconnect()
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return {
    isScrolled,
  }
}
