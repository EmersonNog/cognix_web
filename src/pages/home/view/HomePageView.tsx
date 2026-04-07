import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'
import { useCallback, useEffect, useRef, useState } from 'react'

const overviewCards = [
  {
    label: 'PLANO DE ESTUDO',
    title: 'Veja sua semana com clareza.',
    description:
      'Defina tempo, turno e ritmo para montar uma semana organizada sem depender de improviso.',
  },
  {
    label: 'MAPAS MENTAIS',
    title: 'Revise com ajuda da IA.',
    description:
      'A IA gera mapas mentais e aponta onde voce precisa estudar mais para revisar com mais direcao.',
  },
  {
    label: 'SEU DESEMPENHO',
    title: 'Entenda como voce esta indo.',
    description:
      'Acompanhe seus resultados e descubra o que precisa de mais atencao na rotina.',
  },
] as const

type OverviewCardItem = (typeof overviewCards)[number]

function OverviewFocusCard({
  card,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  card: OverviewCardItem
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (value: number | null) => void
}) {
  const isActive = hoveredIndex === index
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index

  return (
    <article
      className={`group relative min-h-[16rem] overflow-hidden rounded-[28px] border bg-[linear-gradient(180deg,rgba(20,31,56,0.92)_0%,rgba(10,20,43,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_24px_60px_rgba(2,8,20,0.42)] backdrop-blur-xl transition-all duration-500 ease-out sm:min-h-[17rem] sm:p-6 lg:min-h-[19rem] lg:p-6 ${
        isActive
          ? 'border-[rgba(163,166,255,0.3)] shadow-[0_0_0_1px_rgba(163,166,255,0.08),0_0_36px_rgba(96,99,238,0.16),0_32px_80px_rgba(2,8,20,0.5)] lg:flex-[1.4]'
          : 'border-[rgba(163,166,255,0.12)] lg:flex-1'
      } ${isDimmed ? 'lg:scale-[0.985] lg:blur-[1px] lg:saturate-50' : ''}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={`pointer-events-none absolute inset-0 transition duration-500 ${
          isActive ? 'opacity-100' : 'opacity-80'
        }`}
        style={{
          backgroundImage:
            index === 0
              ? 'radial-gradient(circle at 18% 20%, rgba(163,166,255,0.22) 0%, rgba(163,166,255,0) 36%), radial-gradient(circle at 82% 80%, rgba(96,99,238,0.14) 0%, rgba(96,99,238,0) 30%)'
              : index === 1
                ? 'radial-gradient(circle at 78% 18%, rgba(163,166,255,0.24) 0%, rgba(163,166,255,0) 34%), radial-gradient(circle at 20% 82%, rgba(96,99,238,0.14) 0%, rgba(96,99,238,0) 30%)'
                : 'radial-gradient(circle at 50% 24%, rgba(163,166,255,0.22) 0%, rgba(163,166,255,0) 30%), radial-gradient(circle at 12% 78%, rgba(96,99,238,0.14) 0%, rgba(96,99,238,0) 28%)',
        }}
      />
      <div className={`pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_42%)] transition duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,rgba(163,166,255,0)_0%,rgba(163,166,255,0.7)_50%,rgba(163,166,255,0)_100%)] transition duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span
            className={`text-[10px] uppercase tracking-[0.22em] transition duration-300 ${
              isActive
                ? 'text-[color:var(--cognix-text-strong)]'
                : 'text-[color:var(--cognix-accent)]/82'
            }`}
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {card.label}
          </span>
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-[11px] uppercase tracking-[0.18em] text-[color:var(--cognix-text-strong)] transition duration-300 ${
              isActive
                ? 'border-[rgba(163,166,255,0.34)] bg-[rgba(163,166,255,0.12)] shadow-[0_0_24px_rgba(96,99,238,0.22)]'
                : 'border-[rgba(163,166,255,0.18)] bg-[rgba(163,166,255,0.06)]'
            }`}
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            0{index + 1}
          </span>
        </div>

        <h3
          className={`mt-5 max-w-[18ch] text-[20px] font-normal leading-[1.28] text-[color:var(--cognix-text-strong)] transition duration-300 sm:text-[22px] lg:text-[19px] ${
            isActive ? 'translate-x-0.5' : ''
          }`}
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          {card.title}
        </h3>

        <p
          className={`mt-3 max-w-[28ch] text-[13px] leading-[1.7] transition duration-300 sm:text-[14px] lg:text-[13px] ${
            isActive
              ? 'text-[color:var(--cognix-muted-strong)]/92'
              : 'text-[color:var(--cognix-muted-strong)]/78'
          }`}
        >
          {card.description}
        </p>

        <div className="mt-auto pt-8">
          <div
            className={`h-[7.5rem] rounded-[22px] border border-[rgba(163,166,255,0.12)] bg-[rgba(6,14,32,0.24)] transition duration-500 ${
              isActive ? 'scale-[1.01] border-[rgba(163,166,255,0.22)]' : ''
            }`}
          >
            <div className="flex h-full items-end justify-between px-4 pb-4">
              <div className="space-y-2">
                <div className="h-2 w-16 rounded-full bg-[rgba(163,166,255,0.18)]" />
                <div className="h-2 w-10 rounded-full bg-[rgba(163,166,255,0.1)]" />
              </div>
              <div className="flex gap-2">
                <span className="h-10 w-10 rounded-2xl bg-[rgba(163,166,255,0.08)]" />
                <span className="h-10 w-10 rounded-2xl bg-[rgba(96,99,238,0.12)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function HomePageView() {
  const splineAppRef = useRef<Application | null>(null)
  const heroSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const overviewSplineContainerRef = useRef<HTMLDivElement | null>(null)
  const [hoveredOverviewCard, setHoveredOverviewCard] = useState<number | null>(
    null,
  )

  const syncSplineZoom = useCallback(() => {
    const splineApp = splineAppRef.current

    if (!splineApp) {
      return
    }

    if (window.innerWidth >= 1024) {
      splineApp.setZoom(1.04)
      return
    }

    if (window.innerWidth >= 640) {
      splineApp.setZoom(1.10)
      return
    }

    splineApp.setZoom(0.7)
  }, [])

  const handleSplineLoad = useCallback(
    (splineApp: Application) => {
      splineAppRef.current = splineApp
      syncSplineZoom()
    },
    [syncSplineZoom],
  )

  useEffect(() => {
    window.addEventListener('resize', syncSplineZoom)

    return () => {
      window.removeEventListener('resize', syncSplineZoom)
    }
  }, [syncSplineZoom])

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

  return (
    <main className="w-full bg-[var(--cognix-bg)] text-[var(--cognix-text)]">
      <section className="relative isolate min-h-screen w-full overflow-hidden">
        <div
          ref={heroSplineContainerRef}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <Spline
            className="cognix-spline-layer pointer-events-auto absolute inset-0 z-0 h-full w-full"
            onLoad={handleSplineLoad}
            scene="https://prod.spline.design/gZB6vO3PbLOPkb-i/scene.splinecode"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,14,32,0.72)_0%,rgba(6,14,32,0.34)_34%,rgba(6,14,32,0.16)_58%,rgba(6,14,32,0.64)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(163,166,255,0.06)_0%,rgba(163,166,255,0.018)_20%,rgba(0,0,0,0)_46%)]" />
        <div className="cognix-noise pointer-events-none absolute inset-0 z-10 opacity-40" />

        <div className="pointer-events-none relative z-20 mx-auto flex min-h-screen w-full max-w-[1360px] items-center justify-center px-5 py-10 text-center sm:px-8 sm:py-12">
          <section className="pointer-events-none cognix-reveal flex max-w-[20rem] flex-col items-center sm:max-w-[34rem] lg:max-w-[58rem]">
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

      <section
        id="overview"
        className="relative flex min-h-screen w-full items-center overflow-hidden border-t border-[rgba(163,166,255,0.08)] bg-[linear-gradient(180deg,#060e20_0%,#0a142b_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(163,166,255,0.12)_0%,rgba(163,166,255,0)_34%),radial-gradient(circle_at_84%_76%,rgba(96,99,238,0.16)_0%,rgba(96,99,238,0)_32%)]" />
        <div className="cognix-noise pointer-events-none absolute inset-0 opacity-25" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col justify-center">
          <div className="mx-auto max-w-[42rem] text-center">
            <p
              className="text-[10px] font-normal uppercase tracking-[0.28em] text-[color:var(--cognix-accent)]/82"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              COMO O COGNIX AJUDA
            </p>

            <h2
              className="mt-4 text-[28px] font-thin leading-[1.12] tracking-[0.04em] text-[color:var(--cognix-text-strong)] sm:text-[38px] lg:text-[46px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Tudo mais simples de entender.
            </h2>

            <p className="mx-auto mt-5 max-w-[30rem] text-[14px] leading-[1.7] text-[color:var(--cognix-muted-strong)]/86 sm:text-[15px] lg:text-[15px]">
              O Cognix organiza sua rotina, ajuda na revisao e mostra seu
              progresso de um jeito rapido de ler.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[32px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(20,31,56,0.86)_0%,rgba(10,20,43,0.72)_100%)] shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_28px_80px_rgba(2,8,20,0.42)] backdrop-blur-xl lg:mt-8">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(163,166,255,0.12)_0%,rgba(163,166,255,0)_36%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between px-4 py-4 sm:px-6">
              <span
                className="rounded-full border border-[rgba(163,166,255,0.14)] bg-[rgba(6,14,32,0.38)] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[color:var(--cognix-muted)] backdrop-blur-md sm:text-[10px]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                EXPERIENCIA COGNIX
              </span>
              <span
                className="rounded-full border border-[rgba(163,166,255,0.14)] bg-[rgba(6,14,32,0.38)] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[color:var(--cognix-accent)] backdrop-blur-md sm:text-[10px]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                APP MOBILE
              </span>
            </div>
            <div
              ref={overviewSplineContainerRef}
              className="relative h-[24rem] w-full sm:h-[30rem] lg:h-[40rem]"
            >
              <Spline
                className="cognix-spline-layer absolute inset-0 h-full w-full"
                scene="https://prod.spline.design/PMrSoD9XoO7H92YU/scene.splinecode"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-7 lg:flex lg:items-stretch lg:gap-4">
            {overviewCards.map((card, index) => (
              <OverviewFocusCard
                key={card.title}
                card={card}
                hoveredIndex={hoveredOverviewCard}
                index={index}
                setHoveredIndex={setHoveredOverviewCard}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen w-full items-center overflow-hidden border-t border-[rgba(163,166,255,0.08)] bg-[linear-gradient(180deg,#081128_0%,#060e20_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-18">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(163,166,255,0.12)_0%,rgba(163,166,255,0)_30%),radial-gradient(circle_at_82%_72%,rgba(96,99,238,0.16)_0%,rgba(96,99,238,0)_28%)]" />
        <div className="cognix-noise pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10">
          <div className="max-w-[30rem]">
            <p
              className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--cognix-accent)]/82"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              BASE DE QUESTOES
            </p>

            <h2
              className="mt-4 max-w-[12ch] text-[28px] font-thin leading-[1.12] tracking-[0.04em] text-[color:var(--cognix-text-strong)] sm:text-[38px] lg:text-[46px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Mais conteudo para estudar com contexto.
            </h2>

            <p className="mt-5 max-w-[28rem] text-[14px] leading-[1.75] text-[color:var(--cognix-muted-strong)]/86 sm:text-[15px] lg:text-[16px]">
              O Cognix tem mais de 1000 questoes organizadas por area de
              conhecimento e disciplinas, com dicas personalizadas em cada
              questao para orientar sua revisao.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
            <article className="rounded-[26px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(20,31,56,0.82)_0%,rgba(10,20,43,0.82)_100%)] p-5 shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_18px_44px_rgba(2,8,20,0.34)] backdrop-blur-xl">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--cognix-accent)]/82"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                +1000
              </p>
              <h3
                className="mt-4 text-[20px] leading-[1.25] text-[color:var(--cognix-text-strong)]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Questoes na base
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[color:var(--cognix-muted-strong)]/80">
                Um volume grande para manter treino e revisao em movimento.
              </p>
            </article>

            <article className="rounded-[26px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(20,31,56,0.82)_0%,rgba(10,20,43,0.82)_100%)] p-5 shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_18px_44px_rgba(2,8,20,0.34)] backdrop-blur-xl">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--cognix-accent)]/82"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                DIVISAO
              </p>
              <h3
                className="mt-4 text-[20px] leading-[1.25] text-[color:var(--cognix-text-strong)]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Areas e disciplinas
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[color:var(--cognix-muted-strong)]/80">
                Fica mais facil encontrar exatamente o conteudo que voce quer atacar.
              </p>
            </article>

            <article className="rounded-[26px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(20,31,56,0.82)_0%,rgba(10,20,43,0.82)_100%)] p-5 shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_18px_44px_rgba(2,8,20,0.34)] backdrop-blur-xl">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--cognix-accent)]/82"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                DICAS
              </p>
              <h3
                className="mt-4 text-[20px] leading-[1.25] text-[color:var(--cognix-text-strong)]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Ajuda em cada questao
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[color:var(--cognix-muted-strong)]/80">
                Cada questao pode trazer contexto extra para voce revisar melhor.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
