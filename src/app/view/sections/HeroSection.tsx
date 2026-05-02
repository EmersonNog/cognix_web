import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { HeroActionLinks } from '@/app/view/sections/hero/HeroActionLinks'
import { HeroMetaList } from '@/app/view/sections/hero/HeroMetaList'
import { HeroVisual } from '@/app/view/sections/hero/HeroVisual'
import { containerClass } from '@/app/view/viewTokens'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent px-0 pb-[120px] pt-[72px] max-[980px]:pb-20 max-[980px]:pt-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(56% 42% at 16% 0%, rgba(155,116,223,0.28), transparent 64%), radial-gradient(42% 30% at 82% 16%, rgba(216,173,77,0.14), transparent 58%), linear-gradient(180deg, rgba(10,6,16,0.74) 0%, rgba(10,6,16,0.18) 56%, transparent 100%)',
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
            <span className="bg-[linear-gradient(90deg,#f4d67a_0%,#d8ad4d_46%,#f39a21_100%)] bg-clip-text text-transparent">
              evolua com o Cognix
            </span>
            .
          </h1>

          <p className="mb-[34px] max-w-[560px] text-[19px] leading-[1.6] text-[var(--slate)]">
            Aplicativo de estudos personalizado com IA, banco de questões,
            simulados, flashcards, redação guiada, partidas multiplayer e
            dashboards — tudo para você estudar com mais foco.
          </p>

          <HeroActionLinks />
          <HeroMetaList />
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
