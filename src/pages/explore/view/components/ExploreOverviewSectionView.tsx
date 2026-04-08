import Spline from '@splinetool/react-spline'
import { Minus, Plus } from 'lucide-react'

import { FocusCards } from '@/components/ui/focus-cards'
import { cn } from '@/lib/utils'
import type { ExploreOverviewSectionController } from '@/pages/explore/controller/useExploreOverviewSectionController'
import {
  OVERVIEW_SPLINE_SCENE,
  overviewCards,
  overviewInactiveCardClassName,
  overviewSectionPills,
} from '@/pages/explore/model/exploreOverviewSectionModel'

export function ExploreOverviewSectionView({
  handleOverviewSplineLoad,
  handleOverviewZoomIn,
  handleOverviewZoomOut,
  overviewSplineContainerRef,
  overviewSplineControlsVisible,
  overviewSplineVisibleState,
  setOverviewSplineGateRef,
  setOverviewSplinePlaybackRef,
  shouldRenderOverviewSpline,
}: ExploreOverviewSectionController) {
  return (
    <>
      <section className="relative mt-5 sm:mt-5">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-10">
          <div className="max-w-[32rem]">
            <p
              className="text-[10px] font-normal uppercase tracking-[0.28em] text-[color:var(--cognix-accent)]/82"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              COMO O COGNIX AJUDA
            </p>

            <h1
              className="mt-4 max-w-[16ch] text-[28px] font-thin leading-[1.08] tracking-[0.03em] text-[color:var(--cognix-text-strong)] sm:max-w-[18ch] sm:text-[38px] lg:max-w-[12ch] lg:text-[44px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Tudo mais simples de entender.
            </h1>

            <p className="mt-5 max-w-[28rem] text-[14px] leading-[1.75] text-[color:var(--cognix-muted-strong)]/84 sm:text-[15px]">
              O Cognix organiza sua rotina, ajuda na revisao e mostra seu
              progresso em uma experiencia mais leve de acompanhar.
            </p>

            <div className="mt-7 grid w-full grid-cols-2 gap-2.5 sm:flex sm:flex-nowrap sm:gap-2 lg:flex-wrap">
              {overviewSectionPills.map((item) => (
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
                ref={setOverviewSplinePlaybackRef}
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
                {shouldRenderOverviewSpline ? (
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
      </section>

      <div className="mt-8 lg:mt-10">
        <FocusCards
          cards={overviewCards}
          className="gap-3 sm:gap-5 lg:gap-4"
          carouselOnTablet
          inactiveCardClassName={overviewInactiveCardClassName}
        />
      </div>
    </>
  )
}
