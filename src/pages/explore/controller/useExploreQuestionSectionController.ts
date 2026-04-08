import type { Application } from '@splinetool/runtime'
import { useCallback, useEffect, useRef, useState } from 'react'

import { QUESTION_SPLINE_SCENE } from '@/pages/explore/model/exploreQuestionSectionModel'

import { useInViewOnce, useInViewState } from './explorePageViewport'

type UseExploreQuestionSectionControllerOptions = {
  forceRender?: boolean
}

export function useExploreQuestionSectionController({
  forceRender = false,
}: UseExploreQuestionSectionControllerOptions = {}) {
  const questionSplineAppRef = useRef<Application | null>(null)
  const questionSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const [questionSplineLoadedState, setQuestionSplineLoadedState] =
    useState(false)
  const [questionSplineVisibleState, setQuestionSplineVisibleState] =
    useState(false)
  const [setQuestionSectionRef, questionSectionVisible] =
    useInViewOnce<HTMLDivElement>(0.4)
  const [setQuestionSplineGateRef, questionSplineVisible] =
    useInViewState<HTMLDivElement>(0.01, '280px 0px 280px 0px')
  const [setQuestionSplinePlaybackRef, questionSplineInView] =
    useInViewState<HTMLDivElement>(0.2)
  const shouldRenderQuestionSpline = questionSplineVisible || forceRender

  const handleQuestionSplineLoad = useCallback(
    (splineApp: Application) => {
      questionSplineAppRef.current = splineApp
      setQuestionSplineLoadedState(true)

      if (!questionSplineInView) {
        splineApp.stop()
      }

      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          setQuestionSplineVisibleState(true)
        })
      }, 180)
    },
    [questionSplineInView],
  )

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

    window.fetch(QUESTION_SPLINE_SCENE, {
      cache: 'force-cache',
      mode: 'cors',
    }).catch(() => {
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
    const splineApp = questionSplineAppRef.current

    if (!splineApp) {
      return
    }

    if (questionSplineInView) {
      splineApp.play()
      return
    }

    splineApp.stop()
  }, [questionSplineInView])

  useEffect(() => {
    if (shouldRenderQuestionSpline) {
      return
    }

    questionSplineAppRef.current?.stop()
    questionSplineAppRef.current = null
    setQuestionSplineVisibleState(false)
  }, [shouldRenderQuestionSpline])

  useEffect(() => {
    const container = questionSplineContainerRef.current

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
      questionSplineAppRef.current?.stop()
      questionSplineAppRef.current = null
    }
  }, [])

  return {
    handleQuestionSplineLoad,
    questionSectionVisible,
    questionSplineContainerRef,
    questionSplineLoadedState,
    questionSplineVisibleState,
    setQuestionSectionRef,
    setQuestionSplineGateRef,
    setQuestionSplinePlaybackRef,
    shouldRenderQuestionSpline,
  }
}

export type ExploreQuestionSectionController = ReturnType<
  typeof useExploreQuestionSectionController
>
