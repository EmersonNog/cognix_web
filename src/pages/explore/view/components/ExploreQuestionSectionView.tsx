import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import type { ExploreQuestionSectionController } from '@/pages/explore/controller/useExploreQuestionSectionController'
import {
  QUESTION_SPLINE_SCENE,
  questionSectionContent,
  questionSectionStudyRoutes,
} from '@/pages/explore/model/exploreQuestionSectionModel'
import Spline from '@splinetool/react-spline'

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

export function ExploreQuestionSectionView({
  handleQuestionSplineLoad,
  questionSectionVisible,
  questionSplineContainerRef,
  questionSplineVisibleState,
  setQuestionSectionRef,
  setQuestionSplineGateRef,
  setQuestionSplinePlaybackRef,
  shouldRenderQuestionSpline,
}: ExploreQuestionSectionController) {
  return (
    <section
      className="relative left-1/2 mt-14 flex w-screen -translate-x-1/2 items-start overflow-hidden bg-transparent px-5 py-6 sm:mt-16 sm:px-8 sm:py-10 lg:mt-20 lg:px-14 lg:py-12"
      style={{ containIntrinsicSize: '1100px', contentVisibility: 'auto' }}
    >
      <div
        ref={setQuestionSectionRef}
        className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-12 md:gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-10"
      >
        <div className="max-w-[33rem]">
          <p
            className="text-[9px] uppercase tracking-[0.24em] text-[color:var(--cognix-accent)]/72"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {questionSectionContent.badge}
          </p>

          <h2
            className="mt-5 max-w-[20ch] text-[24px] font-thin leading-[1.08] tracking-[0.01em] text-[color:var(--cognix-text-strong)] sm:max-w-[12ch] sm:text-[32px] md:text-[38px] lg:text-[50px]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {questionSectionContent.title}
          </h2>

          <p className="mt-6 max-w-[27rem] text-[14px] leading-[1.85] text-[color:var(--cognix-muted-strong)]/76 sm:text-[15px] lg:mt-7 lg:text-[15px]">
            {questionSectionContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4 lg:mt-9">
            <div
              className="text-[44px] font-thin leading-none text-[color:var(--cognix-text-strong)] sm:text-[56px] md:text-[62px] lg:text-[78px]"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              +
              <AnimatedCount
                start={questionSectionVisible}
                target={questionSectionContent.counterTarget}
              />
            </div>
            <p className="max-w-[14rem] text-[13px] leading-[1.65] text-[color:var(--cognix-muted-strong)]/70 sm:max-w-[11rem] sm:pb-1 sm:text-[14px]">
              {questionSectionContent.counterText}
            </p>
          </div>

          <div className="mt-7">
            <p
              className="mb-3 text-[8px] uppercase tracking-[0.16em] text-[color:var(--cognix-accent)]/64"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              {questionSectionContent.routesLabel}
            </p>
            <div className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              {questionSectionStudyRoutes.map((item) => (
                <span
                  key={item}
                  className="flex w-full items-center justify-center rounded-full border border-[rgba(163,166,255,0.12)] bg-[rgba(163,166,255,0.04)] px-3.5 py-2 text-center text-[9px] uppercase tracking-[0.16em] text-[color:var(--cognix-muted-strong)]/88 sm:w-auto sm:px-4 sm:text-[10px] sm:tracking-[0.18em]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[rgba(163,166,255,0.08)] pt-4 sm:hidden">
            <div className="max-w-[30rem]">
              <p className="text-[8px] uppercase tracking-[0.16em] text-[color:var(--cognix-accent)]/66">
                {questionSectionContent.mobileFooterLabel}
              </p>
              <p className="mt-2 text-[12px] leading-[1.55] text-[color:var(--cognix-text-strong)]/88">
                {questionSectionContent.mobileFooterDescription}
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
              ref={setQuestionSplinePlaybackRef}
              className="pointer-events-none absolute inset-0"
            />
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
              {shouldRenderQuestionSpline ? (
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
                  {questionSectionContent.visualFooterLabel}
                </p>
                <p className="mt-2 text-[12px] leading-[1.55] text-[color:var(--cognix-text-strong)]/88 sm:text-[13px] sm:leading-[1.4] lg:whitespace-nowrap lg:text-[14px]">
                  {questionSectionContent.visualFooterDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
