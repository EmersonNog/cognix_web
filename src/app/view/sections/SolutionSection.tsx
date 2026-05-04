import { ArrowRight, Sparkles } from 'lucide-react'

import afterEnemImage from '@/assets/enem/depois.png'
import beforeEnemImage from '@/assets/enem/antes.png'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

type SnapshotImageCardProps = {
  imageSrc: string
  label: string
  badge: string
  badgeClassName: string
  accentClassName: string
  helper: string
}

function SnapshotImageCard({
  imageSrc,
  label,
  badge,
  badgeClassName,
  accentClassName,
  helper,
}: SnapshotImageCardProps) {
  return (
    <article
      data-reveal
      className="reveal flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--border)] bg-[rgba(11,9,20,0.72)] shadow-[var(--shadow-md)] backdrop-blur-[12px]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-6 py-5 max-[560px]:px-4 max-[560px]:py-4">
        <h3 className="font-[var(--font-display)] text-[22px] font-bold tracking-[-0.02em] text-white max-[560px]:text-[20px]">
          {label}
        </h3>
        <span
          className={`inline-flex rounded-[999px] border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] max-[560px]:px-2.5 max-[560px]:text-[10px] ${badgeClassName}`}
        >
          {badge}
        </span>
      </div>

      <div className="relative p-5 max-[560px]:p-3.5">
        <div
          className={`pointer-events-none absolute inset-x-10 top-1 h-28 rounded-full blur-[42px] max-[560px]:inset-x-6 max-[560px]:h-20 ${accentClassName}`}
        />
        <img
          src={imageSrc}
          alt={`${label} da nota no ENEM`}
          width={1122}
          height={1402}
          loading="lazy"
          decoding="async"
          className="relative z-[1] h-auto w-full rounded-[22px] border border-white/[0.08] bg-[#07101d]"
        />
      </div>

      <div className="flex min-h-[84px] border-t border-white/[0.08] px-6 py-4 text-[14px] leading-[1.65] text-[var(--ink-2)] max-[560px]:min-h-0 max-[560px]:px-4 max-[560px]:py-3.5 max-[560px]:text-[13.5px]">
        {helper}
      </div>
    </article>
  )
}

export function SolutionSection() {
  return (
    <section
      id="solucao"
      className="relative z-[1] bg-transparent pb-[52px] pt-[120px] max-[720px]:pb-[36px] max-[720px]:pt-[88px]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-88px] h-44 bg-[radial-gradient(56%_100%_at_50%_0%,rgba(91,211,154,0.15),rgba(21,13,32,0.03)_44%,transparent_78%)] blur-[24px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(20,12,31,0.06)_0%,rgba(20,12,31,0)_100%)]" />

      <div className={containerClass}>
        <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <Eyebrow
            className="mb-5 border-[color:color-mix(in_oklab,var(--success)_18%,transparent)] bg-[var(--success-50)] text-[var(--success)]"
            dotClassName="bg-[var(--success)] shadow-[0_0_0_4px_rgba(91,211,154,0.16)]"
          >
            Prova social
          </Eyebrow>
          <h2 className="mb-5 font-[var(--font-display)] text-[clamp(30px,3.8vw,46px)] font-bold leading-[1.04] tracking-[-0.025em] text-[var(--ink)]">
            Antes e depois de uma evolução real no ENEM
          </h2>
          <p className="mx-auto max-w-[620px] text-[17px] leading-[1.7] text-[var(--slate)] md:text-[18px]">
            Uma comparação direta entre o ponto de partida e o resultado do
            ciclo seguinte.
          </p>
        </div>

        <div className="mx-auto max-w-[1120px]">
          <div className="mb-6 hidden justify-center md:flex lg:mb-8">
            <div className="pointer-events-none inline-flex items-center gap-2 rounded-[999px] border border-[rgba(216,173,77,0.24)] bg-[rgba(10,9,18,0.88)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--ink-2)] shadow-[var(--shadow-md)] backdrop-blur-[10px]">
              <Sparkles
                className="h-3.5 w-3.5 text-[var(--primary)]"
                strokeWidth={2.2}
              />
              Evolução visual
            </div>
          </div>

          <div className="grid items-stretch gap-4 md:gap-6 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] lg:gap-7">
            <SnapshotImageCard
              imageSrc={beforeEnemImage}
              label="Antes"
              badge="ENEM 2024"
              badgeClassName="border-[rgba(104,165,255,0.35)] bg-[rgba(56,111,216,0.16)] text-[#9cc6ff]"
              accentClassName="bg-[rgba(47,109,218,0.24)]"
              helper="Ponto de partida: a base inicial antes do novo ciclo de preparação."
            />

            <div className="pointer-events-none flex items-center justify-center py-1 lg:min-h-full lg:py-0">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[rgba(216,173,77,0.24)] bg-[rgba(10,9,18,0.92)] text-[var(--primary)] shadow-[var(--shadow-md)] backdrop-blur-[10px] md:h-14 md:w-14">
                <ArrowRight
                  className="h-5 w-5 rotate-90 md:h-5 md:w-5 lg:rotate-0"
                  strokeWidth={2.4}
                />
              </div>
            </div>

            <SnapshotImageCard
              imageSrc={afterEnemImage}
              label="Depois"
              badge="ENEM 2025"
              badgeClassName="border-[rgba(91,211,154,0.35)] bg-[rgba(91,211,154,0.14)] text-[#8ff0bc]"
              accentClassName="bg-[rgba(70,206,129,0.24)]"
              helper="Resultado seguinte: a evolução aparece de forma imediata na comparação."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
