import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

import { BackgroundBeams } from '@/components/ui/background-beams'
import { FocusCards, type FocusCardItem } from '@/components/ui/focus-cards'
import { cn } from '@/lib/utils'

const HERO_SPLINE_SCENE =
  'https://prod.spline.design/gZB6vO3PbLOPkb-i/scene.splinecode'
const OVERVIEW_SPLINE_SCENE =
  'https://prod.spline.design/5wl0cCXiWAkSsu-T/scene.splinecode'
const QUESTION_SPLINE_SCENE =
  'https://prod.spline.design/91e7zaQxWQ3iQSEW/scene.splinecode'
const OVERVIEW_SPLINE_CONTROLS_DELAY_MS = 8000

function AnimatedCount({
  target,
  durationMs = 4000,
  start = false,
}: {
  target: number
  durationMs?: number
  start?: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) {
      return
    }

    const startTime = window.performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setValue(target * eased)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [durationMs, start, target])

  return <>{Math.round(value).toLocaleString('pt-BR')}</>
}

function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const [node, setNode] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!node || isVisible) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, node, threshold])

  return [setNode, isVisible] as const
}

function useInViewState<T extends HTMLElement>(threshold = 0.2) {
  const [node, setNode] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [node, threshold])

  return [setNode, isVisible] as const
}

const overviewCards: FocusCardItem[] = [
  {
    label: 'PLANO DE ESTUDO',
    badge: '01',
    title: 'Veja sua semana com clareza.',
    description:
      'Defina tempo, turno e ritmo para montar uma semana organizada sem depender de improviso.',
    className:
      'bg-[linear-gradient(180deg,rgba(20,31,56,0.92)_0%,rgba(10,20,43,0.88)_100%)]',
    decorationClassName:
      'bg-[radial-gradient(circle_at_18%_20%,rgba(163,166,255,0.22)_0%,rgba(163,166,255,0)_36%),radial-gradient(circle_at_82%_80%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_30%)]',
  },
  {
    label: 'MAPAS MENTAIS',
    badge: '02',
    title: 'Revise com ajuda da inteligencia artificial.',
    description:
      'A IA gera mapas mentais e aponta onde voce precisa estudar mais para revisar com mais direcao.',
    className:
      'bg-[linear-gradient(180deg,rgba(18,28,52,0.92)_0%,rgba(8,18,39,0.9)_100%)]',
    decorationClassName:
      'bg-[radial-gradient(circle_at_78%_18%,rgba(163,166,255,0.24)_0%,rgba(163,166,255,0)_34%),radial-gradient(circle_at_20%_82%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_30%)]',
  },
  {
    label: 'SEU DESEMPENHO',
    badge: '03',
    title: 'Entenda como voce esta indo.',
    description:
      'Acompanhe seus resultados e descubra o que precisa de mais atencao na rotina.',
    className:
      'bg-[linear-gradient(180deg,rgba(17,27,49,0.92)_0%,rgba(7,15,34,0.9)_100%)]',
    decorationClassName:
      'bg-[radial-gradient(circle_at_50%_24%,rgba(163,166,255,0.22)_0%,rgba(163,166,255,0)_30%),radial-gradient(circle_at_12%_78%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_28%)]',
  },
]

const overviewInactiveCardClassName = 'scale-[0.985] blur-[5px] saturate-10'

export function HomePageView() {
  const heroSplineAppRef = useRef<Application | null>(null)
  const overviewSplineAppRef = useRef<Application | null>(null)
  const heroSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const overviewSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const questionSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const [overviewSplineVisibleState, setOverviewSplineVisibleState] =
    useState(false)
  const [overviewSplineControlsVisible, setOverviewSplineControlsVisible] =
    useState(false)
  const [questionSplineVisibleState, setQuestionSplineVisibleState] =
    useState(false)
  const [overviewZoomLevel, setOverviewZoomLevel] = useState(1)
  const [setHeroRevealRef, heroRevealVisible] = useInViewOnce<HTMLDivElement>(0.2)
  const [setHeroSplineGateRef, heroSplineVisible] =
    useInViewOnce<HTMLDivElement>(0.15)
  const [setHeroPlaybackRef, heroSplineInView] =
    useInViewState<HTMLDivElement>(0.18)
  const [setOverviewSplineGateRef, overviewSplineVisible] =
    useInViewOnce<HTMLDivElement>(0.35)
  const [setOverviewPlaybackRef, overviewSplineInView] =
    useInViewState<HTMLDivElement>(0.2)
  const [setQuestionSectionRef, questionSectionVisible] =
    useInViewOnce<HTMLDivElement>(0.4)
  const [setQuestionSplineGateRef, questionSplineVisible] =
    useInViewOnce<HTMLDivElement>(0.3)

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

  const handleOverviewSplineLoad = useCallback(
    (splineApp: Application) => {
      overviewSplineAppRef.current = splineApp
      splineApp.setZoom(overviewZoomLevel)
      setOverviewSplineControlsVisible(false)

      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          setOverviewSplineVisibleState(true)
        })
      }, 180)

      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          setOverviewSplineControlsVisible(true)
        })
      }, OVERVIEW_SPLINE_CONTROLS_DELAY_MS)
    },
    [overviewZoomLevel],
  )

  const handleQuestionSplineLoad = useCallback(() => {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        setQuestionSplineVisibleState(true)
      })
    }, 180)
  }, [])

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
    const handleResize = () => {
      syncHeroSplineZoom()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [syncHeroSplineZoom])

  useEffect(() => {
    const urls = [HERO_SPLINE_SCENE, OVERVIEW_SPLINE_SCENE, QUESTION_SPLINE_SCENE]
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

    urls.forEach((url) => {
      window.fetch(url, { cache: 'force-cache', mode: 'cors' }).catch(() => {
        if (!cancelled) {
          // noop: warm cache best-effort only
        }
      })
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
    const splineApp = overviewSplineAppRef.current

    if (!splineApp) {
      return
    }

    if (overviewSplineInView) {
      splineApp.play()
      return
    }

    splineApp.stop()
  }, [overviewSplineInView])

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

  return (
    <main className="w-full bg-[var(--cognix-bg)] text-[var(--cognix-text)]">
      <section className="relative isolate min-h-screen w-full overflow-hidden">
        <div ref={setHeroPlaybackRef} className="pointer-events-none absolute inset-0" />
        <div
          ref={heroSplineContainerRef}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <div ref={setHeroSplineGateRef} className="h-full w-full">
            {heroSplineVisible ? (
              <Spline
                className="cognix-spline-layer pointer-events-auto absolute inset-0 z-0 h-full w-full"
                onLoad={handleHeroSplineLoad}
                renderOnDemand
                scene={HERO_SPLINE_SCENE}
              />
            ) : null}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,14,32,0.72)_0%,rgba(6,14,32,0.34)_34%,rgba(6,14,32,0.16)_58%,rgba(6,14,32,0.64)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(163,166,255,0.06)_0%,rgba(163,166,255,0.018)_20%,rgba(0,0,0,0)_46%)]" />
        <div className="cognix-noise pointer-events-none absolute inset-0 z-10 opacity-40" />

        <div
          ref={setHeroRevealRef}
          className="pointer-events-none relative z-20 mx-auto flex min-h-screen w-full max-w-[1360px] items-center justify-center px-5 py-10 text-center sm:px-8 sm:py-12"
        >
          <section
            className={cn(
              'pointer-events-none flex max-w-[20rem] flex-col items-center sm:max-w-[34rem] lg:max-w-[58rem]',
              heroRevealVisible ? 'cognix-reveal' : 'translate-y-5 opacity-0',
            )}
          >
            <p
              className="text-[8px] font-normal uppercase leading-[1.2] tracking-[0em] text-[color:var(--cognix-muted)] sm:text-[8px] lg:text-[10px] xl:text-[11px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              PLANEJE MELHOR. ESTUDE COM IA.
            </p>

            <h1
              className="mt-5 text-[34px] font-thin leading-[1.2] tracking-[0.2em] text-[color:var(--cognix-text-strong)] [text-shadow:0_0_18px_rgba(163,166,255,0.14)] sm:mt-6 sm:text-[46px] sm:tracking-[0.26em] lg:text-[68px] lg:tracking-[0.34em] xl:text-[76px] xl:tracking-[0.38em]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              COGNIX
            </h1>

            <p
              className="mt-7 max-w-[15rem] text-[8px] font-normal uppercase leading-[1.2] tracking-[0.08em] text-[color:var(--cognix-muted-strong)]/70 sm:mt-8 sm:max-w-[18rem] lg:mt-10 lg:max-w-[24rem] lg:text-[10px] xl:max-w-[27rem] xl:text-[11px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              DESCUBRA O QUE ESTUDAR AGORA E GANHE CONSTANCIA TODOS OS DIAS.
            </p>

            <a
              href="#overview"
              className="pointer-events-auto mt-9 inline-flex min-w-[8.75rem] items-center justify-center rounded-full border border-[rgba(163,166,255,0.7)] bg-[rgba(20,31,56,0.42)] px-6 py-2.5 text-[8px] font-normal uppercase leading-[1.2] tracking-[0.22em] text-[color:var(--cognix-text)] shadow-[0_0_0_1px_rgba(163,166,255,0.08),0_0_26px_rgba(96,99,238,0.14),0_14px_34px_rgba(6,14,32,0.34)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(163,166,255,0.92)] hover:bg-[rgba(30,43,82,0.62)] hover:text-[color:var(--cognix-text-strong)] hover:shadow-[0_0_0_1px_rgba(163,166,255,0.1),0_0_34px_rgba(96,99,238,0.24),0_18px_40px_rgba(6,14,32,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(163,166,255,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cognix-bg)] sm:mt-10 lg:min-w-[10.5rem] lg:px-8 lg:py-3.5 lg:text-[10px] xl:text-[11px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              EXPLORE
            </a>
          </section>
        </div>
      </section>

      <div className="relative overflow-hidden bg-[linear-gradient(180deg,#071024_0%,#081228_18%,#09152d_54%,#0a142b_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(163,166,255,0.08)_0%,rgba(163,166,255,0)_34%),radial-gradient(circle_at_76%_72%,rgba(96,99,238,0.1)_0%,rgba(96,99,238,0)_36%)]" />
        <BackgroundBeams className="absolute inset-x-0 -top-8 bottom-0 z-0 opacity-70 [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.16)_16%,rgba(0,0,0,0.76)_34%,rgba(0,0,0,1)_100%)] sm:-top-20 sm:opacity-75" />

        <section
          id="overview"
          className="relative -mt-px w-full overflow-hidden bg-transparent px-5 py-16 sm:px-8 sm:py-18 lg:px-14 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_80%,rgba(0,0,0,0.45)_94%,transparent_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(163,166,255,0.12)_0%,rgba(163,166,255,0)_34%),radial-gradient(circle_at_84%_76%,rgba(96,99,238,0.16)_0%,rgba(96,99,238,0)_32%)]" />
            <div className="cognix-noise absolute inset-0 opacity-25" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1180px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-10">
              <div className="max-w-[32rem]">
                <p
                  className="text-[10px] font-normal uppercase tracking-[0.28em] text-[color:var(--cognix-accent)]/82"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  COMO O COGNIX AJUDA
                </p>

                <h2
                  className="mt-4 max-w-[16ch] text-[28px] font-thin leading-[1.08] tracking-[0.03em] text-[color:var(--cognix-text-strong)] sm:max-w-[18ch] sm:text-[38px] lg:max-w-[12ch] lg:text-[44px]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  Tudo mais simples de entender.
                </h2>

                <p className="mt-5 max-w-[28rem] text-[14px] leading-[1.75] text-[color:var(--cognix-muted-strong)]/84 sm:text-[15px]">
                  O Cognix organiza sua rotina, ajuda na revisao e mostra seu
                  progresso em uma experiencia mais leve de acompanhar.
                </p>

                <div className="mt-7 grid w-full grid-cols-2 gap-2.5 sm:flex sm:flex-nowrap sm:gap-2 lg:flex-wrap">
                  {[
                    'SEMANA ORGANIZADA',
                    'REVISAO GUIADA',
                    'PROGRESSO VISIVEL',
                    'FOCO NO QUE IMPORTA',
                  ].map((item) => (
                    <span
                      key={item}
                      className="flex w-full items-center justify-center rounded-full border border-[rgba(163,166,255,0.12)] bg-[rgba(163,166,255,0.04)] px-3 py-2 text-center text-[8px] uppercase tracking-[0.16em] text-[color:var(--cognix-muted-strong)]/86 sm:w-auto sm:flex-1 sm:px-3.5 sm:text-[9px] sm:tracking-[0.18em] lg:flex-none"
                      style={{ fontFamily: '"Montserrat", sans-serif' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(20,31,56,0.84)_0%,rgba(10,20,43,0.74)_100%)] shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_24px_70px_rgba(2,8,20,0.4)] backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(9,18,40,0.74)_0%,rgba(9,18,40,0.28)_34%,rgba(9,18,40,0.12)_60%,rgba(9,18,40,0.24)_100%)]" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_22%_26%,rgba(163,166,255,0.16)_0%,rgba(163,166,255,0)_28%),radial-gradient(circle_at_80%_72%,rgba(96,99,238,0.18)_0%,rgba(96,99,238,0)_30%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between px-4 py-4 sm:px-6">
                  <span
                    className="rounded-full border border-[rgba(163,166,255,0.14)] bg-[rgba(6,14,32,0.32)] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[color:var(--cognix-muted)] backdrop-blur-md sm:text-[10px]"
                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                  >
                    EXPERIENCIA COGNIX
                  </span>
                  <span
                    className="rounded-full border border-[rgba(163,166,255,0.14)] bg-[rgba(6,14,32,0.32)] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[color:var(--cognix-accent)] backdrop-blur-md sm:text-[10px]"
                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                  >
                    APP MOBILE
                  </span>
                </div>
                {overviewSplineControlsVisible ? (
                  <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-2 sm:bottom-5 sm:left-5">
                    <button
                      type="button"
                      aria-label="Aumentar zoom da demonstracao"
                      className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(163,166,255,0.16)] bg-[rgba(6,14,32,0.5)] text-[color:var(--cognix-text-strong)] backdrop-blur-md transition hover:border-[rgba(163,166,255,0.3)] hover:bg-[rgba(20,31,56,0.72)] sm:h-10 sm:w-10"
                      onClick={handleOverviewZoomIn}
                    >
                      <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Diminuir zoom da demonstracao"
                      className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(163,166,255,0.16)] bg-[rgba(6,14,32,0.5)] text-[color:var(--cognix-text-strong)] backdrop-blur-md transition hover:border-[rgba(163,166,255,0.3)] hover:bg-[rgba(20,31,56,0.72)] sm:h-10 sm:w-10"
                      onClick={handleOverviewZoomOut}
                    >
                      <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                ) : null}

              <div
                ref={overviewSplineContainerRef}
                className="relative h-[20rem] w-full sm:h-[22rem] lg:h-[24rem]"
              >
                <div
                  ref={setOverviewPlaybackRef}
                  className="pointer-events-none absolute inset-0"
                />
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 z-10 transition duration-500',
                      overviewSplineVisibleState ? 'opacity-0' : 'opacity-100',
                    )}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,31,56,0.84)_0%,rgba(10,20,43,0.74)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_42%,rgba(163,166,255,0.14)_0%,rgba(163,166,255,0)_32%)]" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                  </div>
                  <div ref={setOverviewSplineGateRef} className="h-full w-full">
                    {overviewSplineVisible ? (
                      <Spline
                        className={cn(
                          'cognix-spline-layer cognix-spline-touch absolute inset-0 h-full w-full scale-[1.02] transition-opacity duration-500 sm:scale-[1.04]',
                          overviewSplineVisibleState ? 'opacity-100' : 'opacity-0',
                        )}
                        onLoad={handleOverviewSplineLoad}
                        renderOnDemand
                        scene={OVERVIEW_SPLINE_SCENE}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-10">
              <FocusCards
                cards={overviewCards}
                className="gap-3 sm:gap-5 lg:gap-4"
                carouselOnTablet
                inactiveCardClassName={overviewInactiveCardClassName}
              />
            </div>
          </div>
        </section>

        <section className="relative -mt-px flex min-h-screen w-full items-start overflow-hidden bg-transparent px-5 pb-10 pt-4 sm:px-8 sm:py-12 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.58)_12%,rgba(0,0,0,1)_28%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(163,166,255,0.12)_0%,rgba(163,166,255,0)_30%),radial-gradient(circle_at_76%_46%,rgba(96,99,238,0.16)_0%,rgba(96,99,238,0)_36%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.015)_0%,rgba(255,255,255,0)_38%,rgba(163,166,255,0.025)_100%)]" />
            <div className="cognix-noise absolute inset-0 opacity-25" />
          </div>

          <div
            ref={setQuestionSectionRef}
            className="relative z-10 mx-auto grid w-full max-w-[1220px] gap-12 md:gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-10"
          >
            <div className="max-w-[33rem]">
              <p
                className="text-[9px] uppercase tracking-[0.24em] text-[color:var(--cognix-accent)]/72"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                BASE DE LANCAMENTO
              </p>

              <h2
                className="mt-5 max-w-[20ch] text-[24px] font-thin leading-[1.08] tracking-[0.01em] text-[color:var(--cognix-text-strong)] sm:max-w-[12ch] sm:text-[32px] md:text-[38px] lg:text-[50px]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Ate onde voce consegue chegar com a pratica certa?
              </h2>

              <p className="mt-6 max-w-[27rem] text-[14px] leading-[1.85] text-[color:var(--cognix-muted-strong)]/76 sm:text-[15px] lg:mt-7 lg:text-[15px]">
                O Cognix entrega a base que voce precisa para praticar melhor,
                revisar com clareza e evoluir com mais constancia.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4 lg:mt-9">
                <div
                  className="text-[44px] font-thin leading-none text-[color:var(--cognix-text-strong)] sm:text-[56px] md:text-[62px] lg:text-[78px]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  +<AnimatedCount target={1000} start={questionSectionVisible} />
                </div>
                <p className="max-w-[14rem] text-[13px] leading-[1.65] text-[color:var(--cognix-muted-strong)]/70 sm:max-w-[11rem] sm:pb-1 sm:text-[14px]">
                  questoes organizadas para sustentar sua trajetoria.
                </p>
              </div>

              <div className="mt-7">
                <p
                  className="mb-3 text-[8px] uppercase tracking-[0.16em] text-[color:var(--cognix-accent)]/64"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  ROTAS DE ESTUDO
                </p>
                <div className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                  {['Natureza', 'Humanas', 'Linguagens', 'Matematica'].map(
                    (item) => (
                      <span
                        key={item}
                        className="flex w-full items-center justify-center rounded-full border border-[rgba(163,166,255,0.12)] bg-[rgba(163,166,255,0.04)] px-3.5 py-2 text-center text-[9px] uppercase tracking-[0.16em] text-[color:var(--cognix-muted-strong)]/88 sm:w-auto sm:px-4 sm:text-[10px] sm:tracking-[0.18em]"
                        style={{ fontFamily: '"Montserrat", sans-serif' }}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-10 border-t border-[rgba(163,166,255,0.08)] pt-4 sm:hidden">
                <div className="max-w-[30rem]">
                  <p className="text-[8px] uppercase tracking-[0.16em] text-[color:var(--cognix-accent)]/66">
                    PLATAFORMA DE MISSAO
                  </p>
                  <p className="mt-2 text-[12px] leading-[1.55] text-[color:var(--cognix-text-strong)]/88">
                    Base ampla para revisar mais e manter a missao em
                    movimento.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[28rem] sm:mt-0 sm:block md:min-h-[31rem] lg:min-h-[38rem]">
              <div className="pointer-events-none absolute left-1/2 top-[20%] h-[60%] w-[88%] -translate-x-1/2 rounded-[999px] border border-dashed border-[rgba(163,166,255,0.06)] sm:top-[10%] sm:h-[70%] sm:w-[72%] md:top-[8%] md:h-[74%] md:w-[68%]" />
              <div className="pointer-events-none absolute left-1/2 top-[18%] hidden h-[56%] w-[58%] -translate-x-1/2 rounded-[999px] border border-dashed border-[rgba(163,166,255,0.1)] sm:block md:top-[15%] md:h-[60%] md:w-[50%]" />
              <div className="pointer-events-none absolute left-1/2 top-[28%] h-[36%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(163,166,255,0)_0%,rgba(163,166,255,0.28)_18%,rgba(163,166,255,0.16)_80%,rgba(163,166,255,0)_100%)] sm:top-[20%] sm:h-[48%] md:top-[18%] md:h-[54%]" />
              <div className="pointer-events-none absolute left-1/2 top-[30%] h-24 w-24 -translate-x-1/2 rounded-full bg-[rgba(163,166,255,0.07)] blur-3xl sm:top-[20%] sm:h-32 sm:w-32 md:h-40 md:w-40" />
              <div className="pointer-events-none absolute left-1/2 bottom-[26%] h-20 w-32 -translate-x-1/2 rounded-full bg-[rgba(96,99,238,0.14)] blur-3xl sm:h-24 sm:w-36 md:bottom-[22%] md:h-24 md:w-40" />
              <div className="pointer-events-none absolute left-[18%] top-[32%] hidden text-[10px] tracking-[0.18em] text-[color:var(--cognix-muted)]/20 md:block">
                a^2 + b^2 = c^2
              </div>
              <div className="pointer-events-none absolute right-[18%] top-[28%] hidden text-[10px] tracking-[0.18em] text-[color:var(--cognix-muted)]/18 md:block">
                f(x) = ax + b
              </div>
              <div className="pointer-events-none absolute left-[22%] bottom-[30%] hidden text-[10px] tracking-[0.18em] text-[color:var(--cognix-muted)]/18 md:block">
                A = pi r^2
              </div>
              <div className="pointer-events-none absolute right-[16%] top-[56%] hidden text-[10px] tracking-[0.18em] text-[color:var(--cognix-muted)]/18 md:block">
                x = (-b +- sqrt(delta)) / 2a
              </div>

              <div
                ref={questionSplineContainerRef}
                className="absolute inset-x-0 top-[18%] mx-auto h-[60%] w-full max-w-[14rem] overflow-hidden sm:top-[3%] sm:h-[70%] sm:max-w-[24rem] md:top-[2%] md:h-[74%] md:max-w-[28rem] lg:max-w-[32rem]"
              >
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 z-10 transition duration-500',
                    questionSplineVisibleState ? 'opacity-0' : 'opacity-100',
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(163,166,255,0.14)_0%,rgba(163,166,255,0.03)_34%,rgba(6,14,32,0)_72%)]" />
                  <div className="absolute inset-x-[26%] bottom-[10%] h-16 rounded-full bg-[radial-gradient(circle,rgba(96,99,238,0.2)_0%,rgba(96,99,238,0)_72%)] blur-2xl sm:inset-x-[28%] sm:h-20" />
                </div>
                <div ref={setQuestionSplineGateRef} className="h-full w-full">
                  {questionSplineVisible ? (
                    <Spline
                      className={cn(
                        'cognix-spline-layer absolute inset-0 h-full w-full scale-[0.96] transition-opacity duration-500 sm:scale-[1.04] md:scale-[1.06] lg:scale-[1.08]',
                        questionSplineVisibleState ? 'opacity-100' : 'opacity-0',
                      )}
                      onLoad={handleQuestionSplineLoad}
                      renderOnDemand
                      scene={QUESTION_SPLINE_SCENE}
                    />
                  ) : null}
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-[3%] left-1/2 w-full max-w-[34rem] -translate-x-1/2 border-t border-[rgba(163,166,255,0.08)] pt-4 sm:bottom-[6%] md:bottom-[8%] lg:bottom-[10%]">
                <div className="flex flex-col gap-3 px-2 sm:flex-row sm:items-end sm:justify-between sm:px-0">
                  <div className="max-w-[30rem]">
                    <p className="text-[8px] uppercase tracking-[0.16em] text-[color:var(--cognix-accent)]/66">
                      PLATAFORMA DE MISSAO
                    </p>
                    <p className="mt-2 text-[12px] leading-[1.55] text-[color:var(--cognix-text-strong)]/88 sm:text-[13px] sm:leading-[1.4] lg:whitespace-nowrap lg:text-[14px]">
                      Base ampla para revisar mais e manter a missao em
                      movimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
