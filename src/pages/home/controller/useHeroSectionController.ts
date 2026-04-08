import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react'

import type { HeroSectionModel } from '@/pages/home/model/hero-section.model'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getFrameSource(frameDirectory: string, frameNumber: number) {
  return `${frameDirectory}/frame_${String(frameNumber).padStart(4, '0')}.jpg`
}

export type HeroSectionControllerState = {
  sectionRef: RefObject<HTMLElement | null>
  canvasRef: RefObject<HTMLCanvasElement | null>
  copyRef: RefObject<HTMLDivElement | null>
  progressHintRef: RefObject<HTMLDivElement | null>
  flashRef: RefObject<HTMLDivElement | null>
  watermarkMaskRef: RefObject<HTMLDivElement | null>
  heroReady: boolean
  allFramesReady: boolean
  reducedMotion: boolean
  sectionStyle: CSSProperties
}

export function useHeroSectionController(
  model: HeroSectionModel,
): HeroSectionControllerState {
  const sectionRef = useRef<HTMLElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const copyRef = useRef<HTMLDivElement | null>(null)
  const progressHintRef = useRef<HTMLDivElement | null>(null)
  const flashRef = useRef<HTMLDivElement | null>(null)
  const watermarkMaskRef = useRef<HTMLDivElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const frameLoadedRef = useRef<boolean[]>([])
  const activeFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const lastScrollYRef = useRef(0)
  const snappedToOverviewRef = useRef(false)
  const [heroReady, setHeroReady] = useState(false)
  const [allFramesReady, setAllFramesReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const { frameDirectory, firstFrame, lastUsableFrame, scrollDistance } = model
  const frameCount = lastUsableFrame - firstFrame + 1

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncReducedMotion = () => {
      setReducedMotion(mediaQuery.matches)
    }

    syncReducedMotion()
    mediaQuery.addEventListener('change', syncReducedMotion)

    return () => {
      mediaQuery.removeEventListener('change', syncReducedMotion)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current

    if (!canvas || !section) {
      return
    }

    const context = canvas.getContext('2d', { alpha: false })

    if (!context) {
      return
    }

    let cancelled = false
    let loadedFrames = 0

    activeFrameRef.current = 0
    frameLoadedRef.current = Array.from({ length: frameCount }, () => false)
    lastScrollYRef.current = window.scrollY
    snappedToOverviewRef.current = false

    const syncCanvasSize = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const devicePixelRatio = clamp(window.devicePixelRatio || 1, 1, 2)

      canvas.width = Math.round(viewportWidth * devicePixelRatio)
      canvas.height = Math.round(viewportHeight * devicePixelRatio)
      canvas.style.width = `${viewportWidth}px`
      canvas.style.height = `${viewportHeight}px`

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      context.imageSmoothingEnabled = true
      context.imageSmoothingQuality = 'high'
    }

    const findDrawableFrame = (requestedFrame: number) => {
      if (frameLoadedRef.current[requestedFrame]) {
        return requestedFrame
      }

      for (let offset = 1; offset < frameCount; offset += 1) {
        const previousFrame = requestedFrame - offset

        if (previousFrame >= 0 && frameLoadedRef.current[previousFrame]) {
          return previousFrame
        }

        const nextFrame = requestedFrame + offset

        if (nextFrame < frameCount && frameLoadedRef.current[nextFrame]) {
          return nextFrame
        }
      }

      return 0
    }

    const drawFrame = (requestedFrame: number) => {
      const drawableFrame = findDrawableFrame(requestedFrame)
      const image = imagesRef.current[drawableFrame]
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      context.fillStyle = '#000000'
      context.fillRect(0, 0, viewportWidth, viewportHeight)

      if (!image || !frameLoadedRef.current[drawableFrame]) {
        return
      }

      const imageWidth = image.naturalWidth || image.width
      const imageHeight = image.naturalHeight || image.height

      if (!imageWidth || !imageHeight) {
        return
      }

      const scale = Math.max(viewportWidth / imageWidth, viewportHeight / imageHeight)
      const width = imageWidth * scale
      const height = imageHeight * scale
      const x = (viewportWidth - width) / 2
      const y = (viewportHeight - height) / 2

      context.drawImage(image, x, y, width, height)
    }

    const updatePresentation = () => {
      const distance = section.offsetHeight - window.innerHeight
      const progress =
        reducedMotion || distance <= 0
          ? 0
          : clamp(-section.getBoundingClientRect().top / distance, 0, 1)
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollYRef.current
      const flashProgress = reducedMotion ? 0 : clamp((progress - 0.82) / 0.18, 0, 1)
      const nextFrame = Math.round(progress * (frameCount - 1))

      activeFrameRef.current = nextFrame
      drawFrame(nextFrame)

      if (copyRef.current) {
        const copyOpacity = reducedMotion ? 1 : clamp(1 - progress * 2.8, 0, 1)
        const copyTranslateY = reducedMotion ? 0 : progress * 46
        copyRef.current.style.opacity = copyOpacity.toFixed(3)
        copyRef.current.style.transform = `translate3d(0, ${copyTranslateY}px, 0)`
      }

      if (progressHintRef.current) {
        const hintOpacity = reducedMotion ? 0.92 : clamp(1 - progress * 2.4, 0, 0.92)
        progressHintRef.current.style.opacity = hintOpacity.toFixed(3)
      }

      if (flashRef.current) {
        flashRef.current.style.opacity = flashProgress.toFixed(3)
      }

      if (watermarkMaskRef.current) {
        watermarkMaskRef.current.style.opacity = (1 - flashProgress).toFixed(3)
      }

      if (progress < 0.72) {
        snappedToOverviewRef.current = false
      }

      if (
        !snappedToOverviewRef.current &&
        progress >= 0.995 &&
        isScrollingDown
      ) {
        const overviewSection = document.getElementById('overview')

        if (overviewSection) {
          snappedToOverviewRef.current = true
          overviewSection.scrollIntoView({
            block: 'start',
            behavior: reducedMotion ? 'auto' : 'smooth',
          })
        }
      }

      lastScrollYRef.current = currentScrollY
    }

    const schedulePresentationUpdate = () => {
      if (rafRef.current !== null) {
        return
      }

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        syncCanvasSize()
        updatePresentation()
      })
    }

    imagesRef.current = Array.from({ length: frameCount }, (_, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.loading = 'eager'
      image.src = getFrameSource(frameDirectory, index + firstFrame)

      image.onload = () => {
        if (cancelled) {
          return
        }

        frameLoadedRef.current[index] = true
        loadedFrames += 1

        if (index === 0) {
          setHeroReady(true)
        }

        if (loadedFrames === frameCount) {
          setAllFramesReady(true)
        }

        if (index === activeFrameRef.current || index === 0) {
          schedulePresentationUpdate()
        }
      }

      image.onerror = () => {
        if (cancelled) {
          return
        }

        frameLoadedRef.current[index] = false
      }

      return image
    })

    syncCanvasSize()
    updatePresentation()

    window.addEventListener('scroll', schedulePresentationUpdate, { passive: true })
    window.addEventListener('resize', schedulePresentationUpdate)

    return () => {
      cancelled = true
      imagesRef.current = []
      frameLoadedRef.current = []
      window.removeEventListener('scroll', schedulePresentationUpdate)
      window.removeEventListener('resize', schedulePresentationUpdate)

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [frameCount, firstFrame, frameDirectory, reducedMotion])

  return {
    sectionRef,
    canvasRef,
    copyRef,
    progressHintRef,
    flashRef,
    watermarkMaskRef,
    heroReady,
    allFramesReady,
    reducedMotion,
    sectionStyle: {
      minHeight: reducedMotion ? '100svh' : `${scrollDistance * 100}svh`,
    },
  }
}
