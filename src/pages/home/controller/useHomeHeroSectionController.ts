import type { Application } from '@splinetool/runtime'
import { useCallback, useEffect, useRef } from 'react'

import { HERO_SPLINE_SCENE } from '@/pages/home/model/homeHeroSectionModel'

import { useInViewOnce, useInViewState } from './homePageViewport'

export function useHomeHeroSectionController() {
  const heroSplineAppRef = useRef<Application | null>(null)
  const heroSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const [setHeroRevealRef, heroRevealVisible] =
    useInViewOnce<HTMLDivElement>(0.2)
  const [setHeroSplineGateRef, heroSplineVisible] =
    useInViewOnce<HTMLDivElement>(0.15)
  const [setHeroPlaybackRef, heroSplineInView] =
    useInViewState<HTMLDivElement>(0.18)
  const shouldRenderHeroSpline = heroSplineVisible && heroSplineInView

  const syncHeroSplineZoom = useCallback(() => {
    const splineApp = heroSplineAppRef.current

    if (!splineApp) {
      return
    }

    if (window.innerWidth >= 1024) {
      splineApp.setZoom(1.04)
      return
    }

    if (window.innerWidth >= 640) {
      splineApp.setZoom(1.1)
      return
    }

    splineApp.setZoom(0.7)
  }, [])

  const handleHeroSplineLoad = useCallback(
    (splineApp: Application) => {
      heroSplineAppRef.current = splineApp
      syncHeroSplineZoom()
    },
    [syncHeroSplineZoom],
  )

  useEffect(() => {
    const handleResize = () => {
      syncHeroSplineZoom()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [syncHeroSplineZoom])

  useEffect(() => {
    const linkElements: HTMLLinkElement[] = []
    let cancelled = false

    const ensureLink = (
      rel: 'preconnect' | 'dns-prefetch',
      href: string,
      crossOrigin?: string,
    ) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href

      if (crossOrigin) {
        link.crossOrigin = crossOrigin
      }

      document.head.appendChild(link)
      linkElements.push(link)
    }

    ensureLink('preconnect', 'https://prod.spline.design', 'anonymous')
    ensureLink('dns-prefetch', 'https://prod.spline.design')

    window
      .fetch(HERO_SPLINE_SCENE, { cache: 'force-cache', mode: 'cors' })
      .catch(() => {
        if (!cancelled) {
          // noop: warm cache best-effort only
        }
      })

    return () => {
      cancelled = true
      linkElements.forEach((link) => link.remove())
    }
  }, [])

  useEffect(() => {
    const splineApp = heroSplineAppRef.current

    if (!splineApp) {
      return
    }

    if (heroSplineInView) {
      splineApp.play()
      return
    }

    splineApp.stop()
  }, [heroSplineInView])

  useEffect(() => {
    if (shouldRenderHeroSpline) {
      return
    }

    heroSplineAppRef.current?.stop()
    heroSplineAppRef.current = null
  }, [shouldRenderHeroSpline])

  useEffect(() => {
    const container = heroSplineContainerRef.current

    if (!container) {
      return
    }

    const handleWheel: EventListener = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    const registerWheelBlock = (element: Element | HTMLDivElement) => {
      element.addEventListener('wheel', handleWheel, {
        passive: false,
        capture: true,
      })
    }

    const unregisterWheelBlock = (element: Element | HTMLDivElement) => {
      element.removeEventListener('wheel', handleWheel, true)
    }

    registerWheelBlock(container)

    const canvas = container.querySelector('canvas')

    if (canvas) {
      registerWheelBlock(canvas)
    }

    return () => {
      unregisterWheelBlock(container)

      if (canvas) {
        unregisterWheelBlock(canvas)
      }
    }
  }, [])

  return {
    handleHeroSplineLoad,
    heroRevealVisible,
    heroSplineContainerRef,
    setHeroPlaybackRef,
    setHeroRevealRef,
    setHeroSplineGateRef,
    shouldRenderHeroSpline,
  }
}

export type HomeHeroSectionController = ReturnType<
  typeof useHomeHeroSectionController
>
