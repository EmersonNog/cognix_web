import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useState, type CSSProperties, type RefObject } from 'react'

type HomePageMotion = {
  particlesReady: boolean
  premiumHeroBackgroundStyle: CSSProperties
  premiumHeroContentStyle: CSSProperties
  premiumHeroOverlayStyle: CSSProperties
  premiumHeroParticlesStyle: CSSProperties
  premiumHeroStageStyle: CSSProperties
  premiumHeroVisualStyle: CSSProperties
  productValueSectionAccentStyle: CSSProperties
  productValueSectionContentStyle: CSSProperties
  stickyAccentProgress: number
  stickyThemeProgress: number
}

type UseHomePageMotionOptions = {
  productValueSectionRef: RefObject<HTMLElement | null>
  sectionRef: RefObject<HTMLElement | null>
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1)

const getStickySectionProgress = (
  element: HTMLElement | null,
  viewportHeight: number,
  fallbackProgress: number,
) => {
  if (!element) {
    return fallbackProgress
  }

  const transitionDistance = clamp(viewportHeight * 0.28, 160, 300)
  const sectionTop = element.getBoundingClientRect().top

  return clamp01((transitionDistance - sectionTop) / transitionDistance)
}

export function useHomePageMotion({
  productValueSectionRef,
  sectionRef,
}: UseHomePageMotionOptions): HomePageMotion {
  const [particlesReady, setParticlesReady] = useState(false)
  const [pageProgress, setPageProgress] = useState(0)
  const [stickyAccentProgress, setStickyAccentProgress] = useState(0)
  const [stickyThemeProgress, setStickyThemeProgress] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    let cancelled = false

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      if (!cancelled) {
        setParticlesReady(true)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    let frameId = 0

    const updateViewport = () => {
      const viewportHeight = window.innerHeight || 1
      const nextViewportWidth = window.innerWidth || 0
      const sectionTop = sectionRef.current?.offsetTop ?? 0
      const nextProgress = (window.scrollY - sectionTop) / viewportHeight
      const nextFallbackThemeProgress = clamp01((nextProgress - 0.34) / 0.62)
      const nextFallbackAccentProgress = clamp01((nextProgress - 1.72) / 0.66)
      const globalStudySection = document.getElementById('rota-cognix')

      setViewportWidth(nextViewportWidth)
      setPageProgress(nextProgress)
      setStickyThemeProgress(
        getStickySectionProgress(
          productValueSectionRef.current,
          viewportHeight,
          nextFallbackThemeProgress,
        ),
      )
      setStickyAccentProgress(
        getStickySectionProgress(
          globalStudySection,
          viewportHeight,
          nextFallbackAccentProgress,
        ),
      )
      frameId = 0
    }

    const handleViewport = () => {
      if (frameId !== 0) {
        return
      }

      frameId = window.requestAnimationFrame(updateViewport)
    }

    updateViewport()
    window.addEventListener('scroll', handleViewport, { passive: true })
    window.addEventListener('resize', handleViewport)

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', handleViewport)
      window.removeEventListener('resize', handleViewport)
    }
  }, [productValueSectionRef, sectionRef])

  const isMobile = viewportWidth > 0 && viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024
  const sectionScrollProgress = Math.min(Math.max(pageProgress, 0), 1)
  const sectionRevealProgress = Math.min(Math.max(pageProgress / 0.62, 0), 1)
  const heroStageProgress = Math.min(Math.max(pageProgress / 0.78, 0), 1)
  const heroEffectProgress = Math.min(sectionScrollProgress / 0.34, 1)
  const heroOpacity = 1 - sectionScrollProgress * 0.72
  const heroTranslateY =
    sectionScrollProgress * (isMobile ? -38 : isTablet ? -62 : -104)
  const heroScale =
    1 - sectionScrollProgress * (isMobile ? 0.035 : isTablet ? 0.05 : 0.075)
  const heroVisualTranslateX =
    heroEffectProgress * (isMobile ? 0 : isTablet ? 26 : 42)
  const heroVisualTranslateY =
    heroEffectProgress * (isMobile ? -28 : isTablet ? -42 : -58)
  const heroVisualRotate =
    heroEffectProgress * (isMobile ? -4 : isTablet ? -7 : -10)
  const heroVisualScale =
    1 - heroEffectProgress * (isMobile ? 0.08 : isTablet ? 0.11 : 0.16)
  const heroOverlayOpacity = heroEffectProgress * (isMobile ? 0.62 : 0.78)
  const heroStageScale =
    1 - heroStageProgress * (isMobile ? 0.012 : isTablet ? 0.018 : 0.026)
  const heroStageOpacity = 1 - heroStageProgress * 0.1

  const sectionEnterOffset =
    (1 - sectionRevealProgress) * (isMobile ? 18 : isTablet ? 28 : 42)
  const sectionContentOpacity = isMobile
    ? 0.78 + sectionRevealProgress * 0.22
    : 0.72 + sectionRevealProgress * 0.28
  const sectionContentScale =
    0.985 + sectionRevealProgress * 0.015

  return {
    particlesReady,
    premiumHeroBackgroundStyle: {
      opacity: 1 - sectionScrollProgress * 0.1,
      transform: `scale(${1 + sectionScrollProgress * 0.024})`,
      willChange: 'transform, opacity',
    },
    premiumHeroContentStyle: {
      opacity: heroOpacity,
      transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale})`,
      willChange: 'transform, opacity',
    },
    premiumHeroOverlayStyle: {
      opacity: heroOverlayOpacity,
      transform: `scale(${1 + heroEffectProgress * 0.045})`,
      willChange: 'transform, opacity',
    },
    premiumHeroParticlesStyle: {
      opacity: 1 - sectionScrollProgress * 0.12,
      willChange: 'opacity',
    },
    premiumHeroStageStyle: {
      opacity: heroStageOpacity,
      transform: `scale(${heroStageScale})`,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
    },
    premiumHeroVisualStyle: {
      opacity: 1 - heroEffectProgress * 0.42,
      transform: `translate3d(${heroVisualTranslateX}px, ${heroVisualTranslateY}px, 0) rotate(${heroVisualRotate}deg) scale(${heroVisualScale})`,
      willChange: 'transform, opacity',
    },
    productValueSectionAccentStyle: {
      opacity: 0.22 + sectionRevealProgress * 0.78,
      transform: `translate3d(0, ${Math.max(sectionEnterOffset * -0.28, -18)}px, 0)`,
    },
    productValueSectionContentStyle: {
      opacity: sectionContentOpacity,
      transform: `translate3d(0, ${sectionEnterOffset}px, 0) scale(${sectionContentScale})`,
    },
    stickyAccentProgress,
    stickyThemeProgress,
  }
}
