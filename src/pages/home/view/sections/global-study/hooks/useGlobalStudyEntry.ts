import { useEffect, useState, type RefObject } from 'react'

type UseGlobalStudyEntryResult = {
  hasEntered: boolean
  prefersReducedMotion: boolean
}

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

const getPrefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia(reducedMotionQuery).matches

export function useGlobalStudyEntry(
  sectionRef: RefObject<HTMLElement | null>,
): UseGlobalStudyEntryResult {
  const [hasEntered, setHasEntered] = useState(getPrefersReducedMotion)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getPrefersReducedMotion,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedMotionQuery)
    const updatePreference = () => {
      const nextPrefersReducedMotion = mediaQuery.matches

      setPrefersReducedMotion(nextPrefersReducedMotion)

      if (nextPrefersReducedMotion) {
        setHasEntered(true)
      }
    }

    mediaQuery.addEventListener('change', updatePreference)

    return () => {
      mediaQuery.removeEventListener('change', updatePreference)
    }
  }, [])

  useEffect(() => {
    const sectionElement = sectionRef.current

    if (!sectionElement) {
      return
    }

    if (prefersReducedMotion) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        const viewportHeight = window.innerHeight || 1
        const nextTop = entry?.boundingClientRect.top ?? viewportHeight
        const nextBottom = entry?.boundingClientRect.bottom ?? 0
        const reachedEntryZone =
          nextTop <= viewportHeight * 0.92 &&
          nextBottom >= viewportHeight * 0.18
        const leftViewportZone =
          nextTop >= viewportHeight * 0.98 ||
          nextBottom <= viewportHeight * 0.08

        if (leftViewportZone) {
          setHasEntered(false)
          return
        }

        if (reachedEntryZone) {
          setHasEntered(true)
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -6% 0px',
        threshold: [0, 0.01, 0.12],
      },
    )

    observer.observe(sectionElement)

    return () => {
      observer.disconnect()
    }
  }, [prefersReducedMotion, sectionRef])

  return {
    hasEntered,
    prefersReducedMotion,
  }
}
