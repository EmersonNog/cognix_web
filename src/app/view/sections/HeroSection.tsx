import {
  ArrowRight,
  Check,
  LockKeyhole,
  Star,
  TrendingUp,
} from 'lucide-react'

import { heroMetaItems } from '@/app/model/landing-hero'
import { HeroPhoneMockup } from '@/app/view/components/HeroPhoneMockup'
import {
  Eyebrow,
  FloatCard,
  ToneIcon,
} from '@/app/view/components/LandingPrimitives'
import {
  containerClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-0 pb-[120px] pt-[72px] max-[980px]:pb-20 max-[980px]:pt-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(60% 40% at 82% 12%, rgba(124,58,237,0.10), transparent 60%), radial-gradient(50% 45% at 18% 0%, rgba(37,99,235,0.10), transparent 65%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      />
      <div
        className={`${containerClass} relative z-[1] grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-[64px] max-[980px]:grid-cols-1 max-[980px]:gap-10`}
      >
        <div className="min-w-0">
          <Eyebrow className="mb-[22px]">
            Estudos com IA para ENEM, vestibulares e concursos
          </Eyebrow>

          <h1 className="mb-[22px] font-[var(--font-display)] text-[clamp(34px,5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--ink)]">
            Estude com direção, pratique com inteligência e{' '}
            <span className="bg-[linear-gradient(90deg,var(--primary)_0%,var(--secondary)_100%)] bg-clip-text text-transparent">
              evolua com o Cognix
            </span>
            .
          </h1>

          <p className="mb-[34px] max-w-[560px] text-[19px] leading-[1.6] text-[var(--slate)]">
            Aplicativo de estudos personalizado com IA, banco de questões,
            simulados, flashcards, redação guiada, partidas multiplayer e
            dashboards — tudo para você estudar com mais foco.
          </p>

          <div className="mb-[22px] flex flex-wrap items-center gap-3">
            <a href="#planos" className={primaryButtonClass}>
              Começar meus estudos
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]"
                strokeWidth={2.4}
              />
            </a>
            <a href="#solucao" className={secondaryButtonClass}>
              Ver recursos do app
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-[16px] text-[14px] text-[var(--slate-2)]">
            {heroMetaItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-[6px]">
                <Check className="h-4 w-4 text-[var(--success)]" strokeWidth={2.4} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[560px] w-full items-center justify-center px-8 max-[980px]:mx-auto max-[980px]:mt-3 max-[980px]:min-h-[580px] max-[980px]:max-w-[520px] max-[980px]:px-6">
          <div className="pointer-events-none absolute inset-[-10%_-15%] z-0 animate-[pulseGlow_6s_ease-in-out_infinite] bg-[radial-gradient(closest-side,rgba(124,58,237,0.22),rgba(37,99,235,0.18)_40%,transparent_72%)] blur-[2px]" />

          <FloatCard
            title="Matemática +12%"
            subtitle="Últimos 7 dias"
            className="left-2 top-10 max-[980px]:left-0"
            style={{ animation: 'floatY 8s ease-in-out infinite' }}
            icon={
              <ToneIcon tone="green" className="h-9 w-9 rounded-[10px]">
                <TrendingUp className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </ToneIcon>
            }
          />
          <FloatCard
            title="Redação guiada"
            subtitle="Correção por IA"
            className="bottom-[120px] right-2 max-[980px]:right-0"
            style={{ animation: 'floatY 9s ease-in-out infinite -2s' }}
            icon={
              <ToneIcon tone="purple" className="h-9 w-9 rounded-[10px]">
                <Star className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </ToneIcon>
            }
          />
          <FloatCard
            title="Plano atualizado"
            subtitle="Revisar funções"
            className="bottom-[30px] left-4 max-[980px]:left-2"
            style={{ animation: 'floatY 7s ease-in-out infinite -4s' }}
            icon={
              <ToneIcon tone="blue" className="h-9 w-9 rounded-[10px]">
                <LockKeyhole className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </ToneIcon>
            }
          />

          <HeroPhoneMockup className="relative z-[2] w-full max-w-[320px] [transform-origin:center_center] animate-[floatTilt3d_9s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
