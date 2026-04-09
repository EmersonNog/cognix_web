import type { HeroSectionControllerState } from '@/pages/home/controller/useHeroSectionController'
import type { HeroSectionModel } from '@/pages/home/model/hero-section.model'
import { ScrollIndicator } from '@/pages/home/view/components/ScrollIndicator'

type HeroSectionViewProps = {
  model: HeroSectionModel
  controller: HeroSectionControllerState
}

export function HeroSectionView({
  model,
  controller,
}: HeroSectionViewProps) {
  const {
    sectionRef,
    canvasRef,
    copyRef,
    progressHintRef,
    flashRef,
    heroReady,
    allFramesReady,
    sectionStyle,
  } = controller

  return (
    <section ref={sectionRef} className="relative bg-black" style={sectionStyle}>
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            heroReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_46%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0.06)_20%,rgba(96,99,238,0)_40%),linear-gradient(90deg,rgba(2,7,20,0.86)_0%,rgba(2,7,20,0.62)_28%,rgba(2,7,20,0.22)_60%,rgba(2,7,20,0.12)_100%),linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_52%,rgba(0,0,0,0.68)_100%)]" />
        <div
          ref={flashRef}
          className="absolute inset-0 bg-white opacity-0 transition-opacity duration-150"
        />

        <div className="relative z-10 h-full">
          <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 py-5 sm:px-10 sm:py-8 lg:px-14">
            <div className="grid flex-1 items-start pt-[max(2.9rem,6svh)] sm:pt-[max(1.95rem,4.85svh)] md:pt-[max(2.15rem,5.15svh)] lg:grid-cols-[minmax(20rem,42rem)_1fr] lg:pt-[max(6.5rem,12svh)]">
              <div
                ref={copyRef}
                className="relative mx-auto flex w-full max-w-[22rem] origin-top-left flex-col items-center pb-10 text-center transition-opacity duration-300 will-change-transform sm:max-w-[35rem] md:max-w-[36.5rem] lg:mx-0 lg:max-w-[40rem] lg:items-start lg:pb-24 lg:text-left"
              >
                <div className="pointer-events-none absolute left-1/2 top-[28%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,99,238,0.2)_0%,rgba(96,99,238,0.08)_28%,rgba(96,99,238,0)_72%)] blur-3xl sm:top-[25%] sm:h-44 sm:w-44 md:top-[24%] md:h-46 md:w-46 lg:-left-14 lg:left-auto lg:top-1/2 lg:h-56 lg:w-56 lg:-translate-x-0" />

                <div className="relative flex w-full flex-col items-center gap-2.5 sm:gap-2 lg:items-start lg:gap-0">
                  <p
                    className="mx-auto max-w-[18rem] text-center text-[9px] uppercase leading-[1.7] tracking-[0.38em] text-[#BCC0FF]/90 [text-shadow:0_0_10px_rgba(163,166,255,0.36),0_0_22px_rgba(96,99,238,0.16)] sm:max-w-[32rem] sm:text-[10px] md:max-w-[36rem] lg:mx-0 lg:max-w-none lg:text-left lg:text-[11px] lg:tracking-[0.42em]"
                    style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 400 }}
                  >
                    {model.copy.eyebrow}
                  </p>
                  <h1
                    className="w-full text-center text-[clamp(3rem,14vw,4.45rem)] uppercase leading-[0.92] tracking-[0.11em] text-white [text-shadow:0_0_12px_rgba(255,255,255,0.24),0_0_34px_rgba(163,166,255,0.2),0_10px_28px_rgba(2,7,20,0.24)] sm:text-[clamp(3.16rem,8.2vw,4.38rem)] md:text-[clamp(3.3rem,7.55vw,4.6rem)] lg:mt-5 lg:text-left lg:text-[clamp(4rem,8vw,7.2rem)] lg:tracking-[0.16em]"
                    style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 400 }}
                  >
                    {model.copy.title}
                  </h1>
                  <p
                    className="max-w-[19rem] text-center text-[0.81rem] leading-[1.58] tracking-[-0.015em] text-white/78 [text-shadow:0_0_12px_rgba(255,255,255,0.1),0_0_22px_rgba(96,99,238,0.1)] sm:max-w-[34ch] sm:text-[0.91rem] md:max-w-[36ch] md:text-[0.93rem] lg:mt-6 lg:max-w-[52ch] lg:text-left lg:text-[1rem] lg:leading-[1.86]"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontWeight: 300 }}
                  >
                    {model.copy.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-3 sm:pb-5">
              <div ref={progressHintRef} className="transition-opacity duration-300">
                <ScrollIndicator visible={allFramesReady} />
              </div>
            </div>
          </div>
        </div>

        {!heroReady ? (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45 sm:text-xs">
                {model.loadingEyebrow}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/60 sm:text-sm">
                {model.loadingLabel}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
