import type { ISourceOptions } from '@tsparticles/engine'
import {
  forwardRef,
  useCallback,
  useMemo,
  type CSSProperties,
  type MouseEvent,
} from 'react'

import { FlipWords } from '@/components/ui/flip-words'
import type { HomePremiumHeroModel } from '@/pages/home/model/home-page.model'
import { scrollToElement } from '@/pages/home/view/scrollToElement'

import { HeroParticles } from './HeroParticles'

type PremiumHeroSectionProps = {
  backgroundStyle: CSSProperties
  contentStyle: CSSProperties
  overlayStyle: CSSProperties
  particlesOptions: ISourceOptions
  particlesReady: boolean
  particlesStyle: CSSProperties
  section: HomePremiumHeroModel
  stageStyle: CSSProperties
  visualStyle: CSSProperties
}

function PremiumHeroMockup() {
  return (
    <>
      <div className="absolute inset-0 rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,26,44,0.98)_0%,rgba(8,13,24,0.98)_100%)] shadow-[0_20px_50px_rgba(0,4,14,0.38)]" style={{ transform: 'translateZ(-18px)' }} />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_14%),linear-gradient(180deg,rgba(21,31,54,0.96)_0%,rgba(10,15,28,0.98)_100%)]" style={{ transform: 'translateZ(-9px)' }} />
      <div className="absolute left-1/2 top-[5.1%] h-[0.18rem] w-[24%] -translate-x-1/2 rounded-full bg-white/[0.24] shadow-[0_0_10px_rgba(196,205,255,0.12)] md:top-[4.95%] md:h-[0.2rem] md:w-[25%] lg:top-[4.8%] lg:h-[0.24rem] lg:w-[28%]" style={{ transform: 'translateZ(14px)' }} />

      <div className="absolute inset-[0.3rem] overflow-hidden rounded-[1.45rem] border border-white/[0.05] bg-[radial-gradient(circle_at_50%_14%,rgba(172,178,255,0.08)_0%,rgba(172,178,255,0)_28%),linear-gradient(180deg,rgba(11,17,31,0.98)_0%,rgba(6,10,20,0.98)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:inset-[0.34rem] md:rounded-[1.55rem] lg:inset-[0.42rem] lg:rounded-[1.7rem]" style={{ transform: 'translateZ(2px)', transformStyle: 'preserve-3d' }}>
        <div className="absolute left-[15%] top-[9.2%] flex items-center gap-1 [transform:translateZ(14px)] md:top-[9%] md:gap-1.5 lg:top-[8.8%]">
          <div className="h-1 w-1 rounded-full bg-[#9faeff]/80 shadow-[0_0_8px_rgba(159,174,255,0.55)] md:h-[0.3rem] md:w-[0.3rem] lg:h-1.5 lg:w-1.5" />
          <div className="h-px w-6 rounded-full bg-gradient-to-r from-white/[0.34] to-transparent md:w-7 lg:w-8" />
          <div className="h-px w-2.5 rounded-full bg-white/[0.16] md:w-3" />
        </div>

        <div className="absolute right-[15%] top-[9.6%] hidden items-center gap-1 [transform:translateZ(12px)] lg:flex">
          <div className="h-1 w-1 rounded-full bg-white/[0.26]" />
          <div className="h-1 w-1 rounded-full bg-white/[0.18]" />
          <div className="h-1 w-4 rounded-full bg-gradient-to-r from-white/[0.2] to-transparent" />
        </div>

        <div className="absolute inset-x-[20%] top-[12%] [transform:translateZ(10px)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent premium-hero-anim" style={{ animation: 'premiumHeroLinePulse 7s ease-in-out infinite' }} />
        </div>

        <div className="absolute left-1/2 top-[17.5%] w-[42%] -translate-x-1/2 [transform:translateZ(22px)] md:top-[17.2%] md:w-[43%] lg:top-[17%] lg:w-[44%]">
          <div className="premium-hero-anim flex h-5 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:h-6 lg:h-7" style={{ animation: 'premiumHeroDrift 8s ease-in-out infinite' }}>
            <div className="h-px w-[48%] rounded-full bg-gradient-to-r from-transparent via-[#cfd8ff]/68 to-transparent" />
          </div>
        </div>

        <div className="absolute inset-x-[18%] top-[30%] h-[31%] [transform:translateZ(34px)]">
          <div className="absolute inset-[4%] rounded-full border border-[#97a5ff]/10" />
          <div className="absolute inset-[18%] rounded-full border border-white/[0.05]" />
          <div className="premium-hero-anim absolute inset-[7%] rounded-full border border-[#9aa7ff]/12" style={{ animation: 'premiumHeroDrift 9s ease-in-out infinite', animationDelay: '0.6s' }} />
          <div
            className="premium-hero-anim absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(160,168,255,0.2)_0%,rgba(115,129,255,0.1)_38%,rgba(7,11,21,0)_74%)] blur-xl"
            style={{ animation: 'premiumHeroOrbPulse 6.8s ease-in-out infinite' }}
          />
          <div
            className="premium-hero-anim absolute inset-[22%] rounded-full border border-white/[0.06] bg-[radial-gradient(circle,rgba(239,242,255,0.9)_0%,rgba(170,179,255,0.72)_24%,rgba(102,118,255,0.2)_58%,rgba(15,23,42,0)_78%)] shadow-[0_0_24px_rgba(115,129,255,0.14)]"
            style={{ animation: 'premiumHeroOrbPulse 5.6s ease-in-out infinite' }}
          />
          <div className="absolute inset-[35%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.94)_0%,rgba(228,234,255,0.34)_56%,rgba(228,234,255,0)_76%)]" style={{ transform: 'translateZ(12px)' }} />
        </div>

        <div className="absolute z-20 right-[14%] top-[52%] w-[15%] [transform:translateZ(38px)] md:right-[15%] md:top-[52.5%] lg:right-[16%] lg:top-[53%]">
          <div className="premium-hero-anim rounded-[0.8rem] border border-white/[0.05] bg-white/[0.025] px-1.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md md:rounded-[0.88rem] md:px-[0.42rem] md:py-[0.42rem] lg:rounded-[0.95rem] lg:px-2 lg:py-2" style={{ animation: 'premiumHeroDrift 7.6s ease-in-out infinite', animationDelay: '0.3s' }}>
            <div className="mx-auto h-5 w-[0.2rem] rounded-full bg-[linear-gradient(180deg,rgba(154,167,255,0.65)_0%,rgba(154,167,255,0.1)_100%)] md:h-[1.35rem] md:w-[0.22rem] lg:h-6 lg:w-1" />
            <div className="mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-[#a7b3ff]/70 md:mt-[0.45rem] md:h-[0.34rem] md:w-[0.34rem] lg:mt-2 lg:h-1.5 lg:w-1.5" />
          </div>
        </div>

        <div className="absolute inset-x-[24%] top-[66%] [transform:translateZ(12px)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8da0d8]/28 to-transparent premium-hero-anim" style={{ animation: 'premiumHeroLinePulse 8s ease-in-out infinite', animationDelay: '0.9s' }} />
        </div>

        <div className="absolute inset-x-[17%] bottom-[10.5%] [transform:translateZ(24px)] md:inset-x-[17.5%] md:bottom-[10.8%] lg:inset-x-[18%] lg:bottom-[11%]">
          <div className="premium-hero-anim rounded-[0.95rem] border border-white/[0.06] bg-white/[0.03] px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md md:rounded-[1.02rem] md:px-[0.7rem] md:py-[0.58rem] lg:rounded-[1.15rem] lg:px-3 lg:py-2.5" style={{ animation: 'premiumHeroDrift 8.6s ease-in-out infinite', animationDelay: '0.45s' }}>
            <div className="h-px w-[40%] rounded-full bg-gradient-to-r from-transparent via-white/[0.22] to-transparent" />
            <div className="mt-2 h-8 rounded-[0.8rem] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.022)_0%,rgba(255,255,255,0.01)_100%)] px-2.5 pt-2 md:mt-[0.55rem] md:h-[2.15rem] md:rounded-[0.85rem] md:px-[0.7rem] md:pt-[0.55rem] lg:mt-2.5 lg:h-10 lg:rounded-[0.9rem] lg:px-3 lg:pt-2.5">
              <div className="h-px w-[58%] rounded-full bg-gradient-to-r from-[#7ed6c5]/0 via-[#7ed6c5]/34 to-[#7ed6c5]/0" />
              <div className="mt-2 h-px w-[40%] rounded-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
            </div>
            <div className="mt-2 flex items-center justify-between md:mt-[0.55rem] lg:mt-2.5">
              <div className="flex items-center gap-1.5">
                <div className="h-1 w-1 rounded-full bg-[#7ed6c5]/70 md:h-[0.3rem] md:w-[0.3rem] lg:h-1.5 lg:w-1.5" />
                <div className="h-px w-6 rounded-full bg-gradient-to-r from-white/[0.2] to-transparent md:w-7 lg:w-8" />
              </div>
              <div className="flex items-center gap-1 md:gap-1.5">
                <div className="h-4 w-4 rounded-full border border-white/[0.06] bg-white/[0.025] md:h-[1.05rem] md:w-[1.05rem] lg:h-5 lg:w-5" />
                <div className="h-4 w-4 rounded-full border border-white/[0.06] bg-white/[0.025] md:h-[1.05rem] md:w-[1.05rem] lg:h-5 lg:w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 h-[34%] bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0)_40%)] opacity-55" style={{ transform: 'translateZ(8px)' }} />
      </div>
    </>
  )
}

function PremiumHeroVisual({ style }: { style: CSSProperties }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[8.75rem] sm:max-w-[10.25rem] md:max-w-[9.75rem] lg:mr-0 lg:max-w-[15.75rem] xl:max-w-[17rem]"
      aria-hidden="true"
      style={style}
    >
      <style>
        {`
          @keyframes premiumHeroFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -12px, 0);
            }
          }

          @keyframes premiumHeroProductFloat {
            0%, 100% {
              transform: perspective(1260px) translate3d(0, 0, 0) rotateX(10deg) rotateY(-14deg) rotateZ(-1.1deg) scale(1);
            }

            25% {
              transform: perspective(1260px) translate3d(0, -4px, 0) rotateX(8deg) rotateY(-9deg) rotateZ(-0.2deg) scale(1.008);
            }

            50% {
              transform: perspective(1260px) translate3d(0, -10px, 0) rotateX(6deg) rotateY(-4deg) rotateZ(0.65deg) scale(1.018);
            }

            75% {
              transform: perspective(1260px) translate3d(0, -5px, 0) rotateX(8.5deg) rotateY(-11deg) rotateZ(-0.35deg) scale(1.008);
            }
          }

          @keyframes premiumHeroOrbPulse {
            0%, 100% {
              opacity: 0.82;
              transform: scale(0.985);
            }

            50% {
              opacity: 1;
              transform: scale(1.028);
            }
          }

          @keyframes premiumHeroDrift {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -3px, 0);
            }
          }

          @keyframes premiumHeroLinePulse {
            0%, 100% {
              opacity: 0.3;
              transform: scaleX(0.985);
            }

            50% {
              opacity: 0.64;
              transform: scaleX(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .premium-hero-anim {
              animation: none !important;
            }
          }
        `}
      </style>

      <div
        className="premium-hero-anim relative mx-auto aspect-[10/19.5] w-full"
        style={{ animation: 'premiumHeroFloat 10s ease-in-out infinite' }}
      >
        <div className="absolute inset-x-[18%] bottom-[10%] h-[12%] rounded-full bg-[#92a0ff]/12 blur-[30px] sm:blur-[38px]" />

        <div
          className="premium-hero-anim absolute inset-0"
          style={{
            animation: 'premiumHeroProductFloat 8.4s ease-in-out infinite',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <PremiumHeroMockup />
        </div>
      </div>
    </div>
  )
}

export const PremiumHeroSection = forwardRef<HTMLElement, PremiumHeroSectionProps>(
  function PremiumHeroSection(
    {
      backgroundStyle,
      contentStyle,
      overlayStyle,
      particlesOptions,
      particlesReady,
      particlesStyle,
      section,
      stageStyle,
      visualStyle,
    },
    ref,
  ) {
    const subtitleLines = useMemo(
      () =>
        section.subtitle.match(/[^.!?]+[.!?]?/g)?.map((line) => line.trim()).filter(Boolean) ?? [
          section.subtitle,
        ],
      [section.subtitle],
    )

    const premiumParticlesOptions = useMemo<ISourceOptions>(
      () => ({
        ...particlesOptions,
        particles: {
          ...particlesOptions.particles,
          color: {
            value: '#A3A6FF',
          },
          move: {
            ...particlesOptions.particles?.move,
            speed: {
              max: 1.75,
              min: 0.65,
            },
          },
          number: {
            ...particlesOptions.particles?.number,
            value: 34,
          },
          opacity: {
            ...particlesOptions.particles?.opacity,
            value: {
              max: 0.62,
              min: 0.16,
            },
          },
          size: {
            ...particlesOptions.particles?.size,
            value: {
              max: 4.1,
              min: 1.2,
            },
          },
        },
      }),
      [particlesOptions],
    )

    const handlePrimaryClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>) => {
        const target = document.getElementById(section.primaryCtaTargetId)

        if (!target) {
          return
        }

        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches

        event.preventDefault()
        scrollToElement(target, prefersReducedMotion ? 'auto' : 'smooth')
      },
      [section.primaryCtaTargetId],
    )

    return (
      <section
        ref={ref}
        className="relative sticky top-0 isolate h-[100svh] overflow-hidden bg-[#060E20] text-[#DEE5FF]"
      >
        <div className="absolute inset-0" style={stageStyle}>
          <div className="absolute inset-0" style={backgroundStyle}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(163,166,255,0.2)_0%,transparent_28%),radial-gradient(circle_at_18%_82%,rgba(126,214,197,0.1)_0%,transparent_36%),linear-gradient(180deg,#060E20_0%,#091328_48%,#0F1930_100%)]" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(222,229,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(222,229,255,0.08)_1px,transparent_1px)] [background-position:left_top] [background-size:24px_24px] sm:[background-size:30px_30px] lg:[background-size:42px_42px]"
            />
          </div>

          <div
            className="absolute inset-0 opacity-85 [mask-image:radial-gradient(circle_at_center,black_0%,rgba(0,0,0,0.92)_72%,transparent_100%)]"
            style={particlesStyle}
          >
            <HeroParticles
              id="premium-hero-particles"
              options={premiumParticlesOptions}
              particlesReady={particlesReady}
              style={{ filter: 'blur(0.2px) saturate(1.05)' }}
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_38%),linear-gradient(180deg,rgba(7,14,32,0)_0%,rgba(7,14,32,0.12)_52%,rgba(245,248,255,0.22)_100%)] backdrop-blur-[14px] md:backdrop-blur-[18px]"
            style={overlayStyle}
          />

          <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/6" />

          <div
            className="relative mx-auto flex h-[100svh] w-full max-w-7xl items-center px-5 pb-6 pt-[5.25rem] sm:px-8 sm:pb-8 sm:pt-[5.9rem] md:pb-6 md:pt-[5.8rem] lg:px-16 lg:pb-10 lg:pt-[6.9rem] xl:pt-[7.2rem]"
            style={contentStyle}
          >
            <div className="grid w-full items-center gap-8 sm:gap-10 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,17.5rem)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,18.5rem)] xl:gap-12">
              <div className="mx-auto max-w-[22rem] text-center sm:max-w-[27rem] md:max-w-[31rem] lg:mx-0 lg:max-w-[40rem] lg:pr-6 lg:text-left xl:max-w-[42rem]">
                <span className="inline-flex rounded-full border border-white/8 bg-[#121D38]/72 px-3 py-1 text-[0.66rem] font-medium tracking-[0.2em] uppercase text-[#9AA6C5] backdrop-blur-md sm:px-4 sm:py-1.5">
                  {section.badge}
                </span>

                <h1 className="mx-auto mt-4 max-w-[8ch] text-[clamp(2.45rem,10vw,4.15rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#DEE5FF] sm:mt-5 sm:max-w-none sm:text-[clamp(2.8rem,9vw,4.55rem)] md:text-[clamp(2.55rem,7.4vw,3.9rem)] lg:mx-0 lg:mt-6 lg:inline-flex lg:max-w-none lg:items-baseline lg:gap-4 lg:whitespace-nowrap lg:text-[clamp(3.35rem,5vw,5.15rem)]">
                  <span className="block lg:inline">{section.titlePrefix}</span>
                  <span className="mt-1 inline-flex lg:mt-0 lg:min-w-[3ch]">
                    <FlipWords
                      words={section.titleWords}
                      duration={3400}
                      className="!px-0 text-[#A3A6FF] drop-shadow-[0_0_22px_rgba(96,99,238,0.26)]"
                    />
                  </span>
                </h1>

                <p className="mx-auto mt-3 max-w-[32rem] text-[0.92rem] leading-6 text-[#9AA6C5] sm:mt-4 sm:text-[0.98rem] sm:leading-7 lg:mx-0 lg:max-w-[38rem] lg:text-[1rem]">
                  {subtitleLines.map((line, index) => (
                    <span
                      key={line}
                      className={index === 0 ? 'block' : 'mt-1 block'}
                    >
                      {line}
                    </span>
                  ))}
                </p>

                <a
                  href={`#${section.primaryCtaTargetId}`}
                  onClick={handlePrimaryClick}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#A3A6FF] px-5 text-sm font-medium text-[#060E20] shadow-[0_18px_40px_rgba(96,99,238,0.28)] transition duration-300 hover:-translate-y-px hover:bg-[#b2b4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ED6C5] sm:mt-6"
                >
                  {section.primaryCtaLabel}
                </a>
              </div>

              <div className="mt-3 sm:mt-5 md:mt-5 lg:mt-0">
                <PremiumHeroVisual style={visualStyle} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
)
