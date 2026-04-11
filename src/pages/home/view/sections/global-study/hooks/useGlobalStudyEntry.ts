import { useEffect, useState, type RefObject } from 'react'

type UseGlobalStudyEntryResult = {
  hasEntered: boolean
  prefersReducedMotion: boolean
}

export function useGlobalStudyEntry(
  sectionRef: RefObject<HTMLElement | null>,
): UseGlobalStudyEntryResult {
  const [hasEntered, setHasEntered] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updatePreference()
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
      setHasEntered(true)
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
