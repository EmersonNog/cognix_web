import Spline from '@splinetool/react-spline'

import { cn } from '@/lib/utils'
import type { HomeHeroSectionController } from '@/pages/home/controller/useHomeHeroSectionController'
import {
  HERO_SPLINE_SCENE,
  homeHeroContent,
} from '@/pages/home/model/homeHeroSectionModel'

export function HomeHeroSectionView({
  handleHeroSplineLoad,
  heroRevealVisible,
  heroSplineContainerRef,
  setHeroPlaybackRef,
  setHeroRevealRef,
  setHeroSplineGateRef,
  shouldRenderHeroSpline,
}: HomeHeroSectionController) {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden">
      <div ref={setHeroPlaybackRef} className="pointer-events-none absolute inset-0" />
      <div
        ref={heroSplineContainerRef}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <div ref={setHeroSplineGateRef} className="h-full w-full">
          {shouldRenderHeroSpline ? (
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
            {homeHeroContent.eyebrow}
          </p>

          <h1
            className="mt-5 text-[34px] font-thin leading-[1.2] tracking-[0.2em] text-[color:var(--cognix-text-strong)] [text-shadow:0_0_18px_rgba(163,166,255,0.14)] sm:mt-6 sm:text-[46px] sm:tracking-[0.26em] lg:text-[68px] lg:tracking-[0.34em] xl:text-[76px] xl:tracking-[0.38em]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {homeHeroContent.title}
          </h1>

          <p
            className="mt-7 max-w-[15rem] text-[8px] font-normal uppercase leading-[1.2] tracking-[0.08em] text-[color:var(--cognix-muted-strong)]/70 sm:mt-8 sm:max-w-[18rem] lg:mt-10 lg:max-w-[24rem] lg:text-[10px] xl:max-w-[27rem] xl:text-[11px]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {homeHeroContent.description}
          </p>

          <a
            href={homeHeroContent.ctaHref}
            className="pointer-events-auto mt-9 inline-flex min-w-[8.75rem] items-center justify-center rounded-full border border-[rgba(163,166,255,0.7)] bg-[rgba(20,31,56,0.42)] px-6 py-2.5 text-[8px] font-normal uppercase leading-[1.2] tracking-[0.22em] text-[color:var(--cognix-text)] shadow-[0_0_0_1px_rgba(163,166,255,0.08),0_0_26px_rgba(96,99,238,0.14),0_14px_34px_rgba(6,14,32,0.34)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(163,166,255,0.92)] hover:bg-[rgba(30,43,82,0.62)] hover:text-[color:var(--cognix-text-strong)] hover:shadow-[0_0_0_1px_rgba(163,166,255,0.1),0_0_34px_rgba(96,99,238,0.24),0_18px_40px_rgba(6,14,32,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(163,166,255,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cognix-bg)] sm:mt-10 lg:min-w-[10.5rem] lg:px-8 lg:py-3.5 lg:text-[10px] xl:text-[11px]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {homeHeroContent.ctaLabel}
          </a>
        </section>
      </div>
    </section>
  )
}
