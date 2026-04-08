import { useCallback, useEffect, useRef, useState } from 'react'

import { QUESTION_SPLINE_SCENE } from '@/pages/explore/model/exploreQuestionSectionModel'

import { useInViewOnce, useInViewState } from './explorePageViewport'

export function useExploreQuestionSectionController() {
  const questionSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const [questionSplineVisibleState, setQuestionSplineVisibleState] =
    useState(false)
  const [setQuestionSectionRef, questionSectionVisible] =
    useInViewOnce<HTMLDivElement>(0.4)
  const [setQuestionSplineGateRef, questionSplineVisible] =
    useInViewOnce<HTMLDivElement>(0.3)
  const [setQuestionSplinePlaybackRef, questionSplineInView] =
    useInViewState<HTMLDivElement>(0.2)
  const shouldRenderQuestionSpline = questionSplineVisible && questionSplineInView

  const handleQuestionSplineLoad = useCallback(() => {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        setQuestionSplineVisibleState(true)
      })
    }, 180)
  }, [])

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
    if (shouldRenderQuestionSpline) {
      return
    }

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

  return {
    handleQuestionSplineLoad,
    questionSectionVisible,
    questionSplineContainerRef,
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
