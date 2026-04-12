import { useCallback, useEffect, useRef, useState } from 'react'

import {
  metricAutoplayIntervalMs,
  metricTransitionDurationMs,
} from '../constants'

type UseMetricCarouselArgs = {
  hasEntered: boolean
  isPaused: boolean
  metricCount: number
  prefersReducedMotion: boolean
}

type UseMetricCarouselResult = {
  activeMetricIndex: number
  previousMetricIndex: number | null
  showMetric: (nextIndex: number) => void
}

export function useMetricCarousel({
  hasEntered,
  isPaused,
  metricCount,
  prefersReducedMotion,
}: UseMetricCarouselArgs): UseMetricCarouselResult {
  const metricTransitionTimeoutRef = useRef<number | null>(null)
  const [activeMetricIndex, setActiveMetricIndex] = useState(0)
  const [previousMetricIndex, setPreviousMetricIndex] = useState<number | null>(
    null,
  )

  const clearTransitionTimeout = useCallback(() => {
    if (metricTransitionTimeoutRef.current === null) {
      return
    }

    window.clearTimeout(metricTransitionTimeoutRef.current)
    metricTransitionTimeoutRef.current = null
  }, [])

  const queueTransitionCleanup = useCallback(() => {
    clearTransitionTimeout()
    metricTransitionTimeoutRef.current = window.setTimeout(() => {
      setPreviousMetricIndex(null)
      metricTransitionTimeoutRef.current = null
    }, metricTransitionDurationMs)
  }, [clearTransitionTimeout])

  const showMetric = useCallback(
    (nextIndex: number) => {
      if (
        nextIndex === activeMetricIndex ||
        nextIndex < 0 ||
        nextIndex >= metricCount
      ) {
        return
      }

      if (prefersReducedMotion) {
        clearTransitionTimeout()
        setPreviousMetricIndex(null)
        setActiveMetricIndex(nextIndex)
        return
      }

      clearTransitionTimeout()
      setPreviousMetricIndex(activeMetricIndex)
      setActiveMetricIndex(nextIndex)
      queueTransitionCleanup()
    },
    [
      activeMetricIndex,
      clearTransitionTimeout,
      metricCount,
      prefersReducedMotion,
      queueTransitionCleanup,
    ],
  )

  useEffect(() => {
    return () => {
      clearTransitionTimeout()
    }
  }, [clearTransitionTimeout])

  useEffect(() => {
    if (metricCount <= 0 || activeMetricIndex < metricCount) {
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      setActiveMetricIndex(0)
      setPreviousMetricIndex(null)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [activeMetricIndex, metricCount])

  useEffect(() => {
    if (
      prefersReducedMotion ||
      isPaused ||
      !hasEntered ||
      metricCount <= 1
    ) {
      return
    }

    const intervalId = window.setInterval(() => {
      const nextIndex = (activeMetricIndex + 1) % metricCount
      showMetric(nextIndex)
    }, metricAutoplayIntervalMs)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [
    activeMetricIndex,
    hasEntered,
    isPaused,
    metricCount,
    prefersReducedMotion,
    showMetric,
  ])

  return {
    activeMetricIndex,
    previousMetricIndex,
    showMetric,
  }
}
