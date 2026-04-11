import type { ISourceOptions } from '@tsparticles/engine'
import type { CSSProperties } from 'react'

import { FlipWords } from '@/components/ui/flip-words'
import { SectionPattern } from '@/components/ui/section-pattern'
import type { HomeHeroModel } from '@/pages/home/model/home-page.model'

import { HeroParticles } from './HeroParticles'
import { DesktopHeroVisual } from './DesktopHeroVisual'
import { MobileHeroVisual } from './MobileHeroVisual'
import { MobileScrollHint } from './MobileScrollHint'
import { TabletHeroVisual } from './TabletHeroVisual'

type HeroSectionProps = {
  contentStyle: CSSProperties
  hero: HomeHeroModel
  particlesOptions: ISourceOptions
  particlesReady: boolean
  particlesStyle: CSSProperties
}

export function HeroSection({
  contentStyle,
  hero,
  particlesOptions,
  particlesReady,
  particlesStyle,
}: HeroSectionProps) {
  return (
    <section className="relative sticky top-0 flex min-h-[100svh] items-start overflow-hidden bg-[#071a2d] lg:items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(61,246,255,0.18)_0%,transparent_28%),radial-gradient(circle_at_82%_22%,rgba(0,140,255,0.14)_0%,transparent_24%),linear-gradient(135deg,#06111d_0%,#0a2239_42%,#0e3556_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,22,0.08)_0%,rgba(4,12,22,0.36)_100%)]" />
      <SectionPattern variant="dark" className="opacity-60" />
      <HeroParticles
        options={particlesOptions}
        particlesReady={particlesReady}
        style={particlesStyle}
      />

      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-36 lg:px-16 lg:py-24"
        style={contentStyle}
      >
        <div className="relative max-w-5xl space-y-5 md:grid md:max-w-none md:grid-cols-[minmax(0,1fr)_minmax(19rem,22rem)] md:items-center md:gap-10 md:space-y-0 lg:grid-cols-[minmax(0,42rem)_minmax(26rem,32rem)] lg:justify-between lg:gap-16 xl:grid-cols-[minmax(0,44rem)_minmax(28rem,36rem)] xl:gap-20">
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <span className="inline-flex w-fit rounded-full border border-[#3df6ff]/30 bg-[#0b2942]/55 px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.22em] uppercase text-[#7efbff] backdrop-blur sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.24em]">
              {hero.badge}
            </span>

            <h1 className="max-w-[10ch] text-[clamp(2.2rem,12vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:max-w-full sm:whitespace-normal sm:text-[clamp(2.15rem,5vw,3rem)] lg:whitespace-nowrap lg:text-[clamp(2.75rem,4vw,3.55rem)] xl:text-[clamp(3rem,3.8vw,3.75rem)]">
              <span className="block lg:inline">{hero.titlePrefix}</span>
              <span className="mt-1 inline-flex lg:ml-3 lg:mt-0">
                <FlipWords
                  words={hero.titleWords}
                  className="!px-0 text-[#7efbff] drop-shadow-[0_0_24px_rgba(61,246,255,0.28)]"
                  duration={2600}
                />
              </span>
            </h1>

            <p className="max-w-[38rem] text-sm leading-6 text-[#b9d5e8] sm:text-base sm:leading-7 lg:text-[1.02rem]">
              {hero.subtitle}
            </p>

            <MobileHeroVisual />
          </div>
          <TabletHeroVisual />
          <DesktopHeroVisual />
        </div>
      </div>

      <MobileScrollHint />
    </section>
  )
}
