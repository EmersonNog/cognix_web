import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useState, type CSSProperties } from 'react'

type HomePageMotion = {
  activeSectionTheme: 'dark' | 'light'
  heroContentStyle: CSSProperties
  heroParticlesStyle: CSSProperties
  particlesReady: boolean
  productValueSectionAccentStyle: CSSProperties
  productValueSectionContentStyle: CSSProperties
  stickyAccentProgress: number
  stickyThemeProgress: number
}

export function useHomePageMotion(): HomePageMotion {
  const [particlesReady, setParticlesReady] = useState(false)
  const [pageProgress, setPageProgress] = useState(0)
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
      const nextProgress = window.scrollY / viewportHeight

      setViewportWidth(nextViewportWidth)
      setPageProgress(nextProgress)
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
  }, [])

  const isMobile = viewportWidth > 0 && viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024
  const heroScrollProgress = Math.min(pageProgress, 1)

  const heroOpacity = 1 - heroScrollProgress * 0.55
  const heroTranslateY = heroScrollProgress * (isMobile ? -28 : isTablet ? -44 : -72)
  const heroScale =
    1 - heroScrollProgress * (isMobile ? 0.015 : isTablet ? 0.025 : 0.04)
  const heroBlur = heroScrollProgress * (isMobile ? 10 : isTablet ? 14 : 18)

  const sectionEnterOffset =
    (1 - heroScrollProgress) * (isMobile ? 32 : isTablet ? 56 : 96)
  const sectionContentOpacity = isMobile
    ? 0.42 + heroScrollProgress * 0.58
    : 0.18 + heroScrollProgress * 0.82
  const sectionContentScale =
    0.96 + heroScrollProgress * (isMobile ? 0.04 : 0.06)
  const stickyThemeProgress = Math.min(
    Math.max((pageProgress - 0.46) / 0.34, 0),
    1,
  )
  const stickyAccentProgress = Math.min(
    Math.max((pageProgress - 1.52) / 0.48, 0),
    1,
  )

  return {
    activeSectionTheme: stickyThemeProgress > 0.58 ? 'light' : 'dark',
    heroContentStyle: {
      filter: `blur(${heroBlur}px)`,
      opacity: heroOpacity,
      transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale})`,
      willChange: 'transform, filter, opacity',
    },
    heroParticlesStyle: {
      filter: `blur(${heroBlur}px)`,
      willChange: 'filter',
    },
    particlesReady,
    productValueSectionAccentStyle: {
      opacity: heroScrollProgress,
      transform: `translate3d(0, ${Math.max(sectionEnterOffset * -0.35, -36)}px, 0)`,
    },
    productValueSectionContentStyle: {
      opacity: sectionContentOpacity,
      transform: `translate3d(0, ${sectionEnterOffset}px, 0) scale(${sectionContentScale})`,
    },
    stickyAccentProgress,
    stickyThemeProgress,
  }
}
