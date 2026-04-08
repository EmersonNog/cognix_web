import type { Application } from '@splinetool/runtime'
import { useCallback, useEffect, useRef, useState } from 'react'

import {
  OVERVIEW_SPLINE_CONTROLS_DELAY_MS,
  OVERVIEW_SPLINE_SCENE,
} from '@/pages/explore/model/exploreOverviewSectionModel'

import { useInViewState } from './explorePageViewport'

type UseExploreOverviewSectionControllerOptions = {
  playbackEnabled?: boolean
}

export function useExploreOverviewSectionController({
  playbackEnabled = true,
}: UseExploreOverviewSectionControllerOptions = {}) {
  const overviewSplineAppRef = useRef<Application | null>(null)
  const overviewSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const overviewControlsTimeoutRef = useRef<number | null>(null)
  const [overviewSplineLoadedState, setOverviewSplineLoadedState] =
    useState(false)
  const [overviewSplineVisibleState, setOverviewSplineVisibleState] =
    useState(false)
  const [overviewSplineControlsVisible, setOverviewSplineControlsVisible] =
    useState(false)
  const [overviewZoomLevel, setOverviewZoomLevel] = useState(1)
  const [setOverviewSplineGateRef, overviewSplineVisible] =
    useInViewState<HTMLDivElement>(0.01, '640px 0px 640px 0px')
  const [setOverviewSplinePlaybackRef, overviewSplineInView] =
    useInViewState<HTMLDivElement>(0.18)
  const shouldRenderOverviewSpline = overviewSplineVisible

  const handleOverviewSplineLoad = useCallback(
    (splineApp: Application) => {
      overviewSplineAppRef.current = splineApp
      splineApp.setZoom(overviewZoomLevel)
      setOverviewSplineControlsVisible(false)
      setOverviewSplineLoadedState(true)

      if (!overviewSplineInView || !playbackEnabled) {
        splineApp.stop()
      }

      if (overviewControlsTimeoutRef.current !== null) {
        window.clearTimeout(overviewControlsTimeoutRef.current)
      }

      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          setOverviewSplineVisibleState(true)
        })
      }, 180)

      overviewControlsTimeoutRef.current = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          setOverviewSplineControlsVisible(true)
        })
      }, OVERVIEW_SPLINE_CONTROLS_DELAY_MS)
    },
    [overviewSplineInView, overviewZoomLevel, playbackEnabled],
  )

  const applyOverviewZoom = useCallback((nextZoom: number) => {
    const splineApp = overviewSplineAppRef.current

    if (!splineApp) {
      return
    }

    splineApp.setZoom(nextZoom)
    setOverviewZoomLevel(nextZoom)
  }, [])

  const handleOverviewZoomIn = useCallback(() => {
    const nextZoom = Math.min(overviewZoomLevel + 0.16, 1.48)
    applyOverviewZoom(nextZoom)
  }, [applyOverviewZoom, overviewZoomLevel])

  const handleOverviewZoomOut = useCallback(() => {
    const nextZoom = Math.max(overviewZoomLevel - 0.16, 0.76)
    applyOverviewZoom(nextZoom)
  }, [applyOverviewZoom, overviewZoomLevel])

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
      .fetch(OVERVIEW_SPLINE_SCENE, { cache: 'force-cache', mode: 'cors' })
      .catch(() => {
        if (!cancelled) {
          // noop
        }
      })

    return () => {
      cancelled = true
      linkElements.forEach((link) => link.remove())
    }
  }, [])

  useEffect(() => {
    const splineApp = overviewSplineAppRef.current

    if (!splineApp) {
      return
    }

    if (overviewSplineInView && playbackEnabled) {
      splineApp.play()
      return
    }

    splineApp.stop()
  }, [overviewSplineInView, playbackEnabled])

  useEffect(() => {
    if (shouldRenderOverviewSpline) {
      return
    }

    if (overviewControlsTimeoutRef.current !== null) {
      window.clearTimeout(overviewControlsTimeoutRef.current)
      overviewControlsTimeoutRef.current = null
    }

    overviewSplineAppRef.current?.stop()
    overviewSplineAppRef.current = null
    setOverviewSplineLoadedState(false)
    setOverviewSplineVisibleState(false)
    setOverviewSplineControlsVisible(false)
  }, [shouldRenderOverviewSpline])

  useEffect(() => {
    const container = overviewSplineContainerRef.current

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

  useEffect(() => {
    return () => {
      if (overviewControlsTimeoutRef.current !== null) {
        window.clearTimeout(overviewControlsTimeoutRef.current)
      }

      overviewSplineAppRef.current?.stop()
      overviewSplineAppRef.current = null
      setOverviewSplineLoadedState(false)
    }
  }, [])

  return {
    handleOverviewSplineLoad,
    handleOverviewZoomIn,
    handleOverviewZoomOut,
    overviewSplineContainerRef,
    overviewSplineControlsVisible,
    overviewSplineLoadedState,
    overviewSplineVisibleState,
    setOverviewSplineGateRef,
    setOverviewSplinePlaybackRef,
    shouldRenderOverviewSpline,
  }
}

export type ExploreOverviewSectionController = ReturnType<
  typeof useExploreOverviewSectionController
>
