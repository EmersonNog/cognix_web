import { useEffect, useRef, type RefObject } from 'react'

const SNAP_PROGRESS = 0.64
const RESET_PROGRESS = 0.18

type UseHomeSectionSnapOptions = {
  targetRef: RefObject<HTMLElement | null>
}

export function useHomeSectionSnap({ targetRef }: UseHomeSectionSnapOptions) {
  const hasSnappedRef = useRef(false)
  const isSnappingRef = useRef(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    let frameId = 0
    let releaseTimeoutId = 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const releaseSnapLock = () => {
      isSnappingRef.current = false
      releaseTimeoutId = 0
    }

    const updateSnap = () => {
      const target = targetRef.current

      if (!target) {
        frameId = 0
        return
      }

      const viewportHeight = window.innerHeight || 1
      const scrollY = window.scrollY
      const scrollProgress = scrollY / viewportHeight
      const isScrollingDown = scrollY > lastScrollYRef.current
      const targetTop = target.offsetTop
      const isBeforeTarget = scrollY < targetTop - 24

      if (scrollProgress < RESET_PROGRESS) {
        hasSnappedRef.current = false
        isSnappingRef.current = false
      }

      if (
        isScrollingDown &&
        isBeforeTarget &&
        !hasSnappedRef.current &&
        !isSnappingRef.current &&
        scrollProgress >= SNAP_PROGRESS
      ) {
        hasSnappedRef.current = true
        isSnappingRef.current = true

        window.scrollTo({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          top: targetTop,
        })

        releaseTimeoutId = window.setTimeout(releaseSnapLock, prefersReducedMotion ? 0 : 900)
      }

      lastScrollYRef.current = scrollY
      frameId = 0
    }

    const handleScroll = () => {
      if (frameId !== 0) {
        return
      }

      frameId = window.requestAnimationFrame(updateSnap)
    }

    lastScrollYRef.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }

      if (releaseTimeoutId !== 0) {
        window.clearTimeout(releaseTimeoutId)
      }

      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [targetRef])
}
