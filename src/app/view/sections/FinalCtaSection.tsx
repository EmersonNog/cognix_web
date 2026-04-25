import { ArrowRight } from 'lucide-react'

import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import {
  containerClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

export function FinalCtaSection() {
  return (
    <section className="bg-[radial-gradient(70%_60%_at_50%_0%,rgba(216,173,77,0.08),transparent_60%),var(--surface)] pb-[120px] pt-6 max-[720px]:pb-[72px] max-[720px]:pt-4">
      <div className={containerClass}>
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[radial-gradient(120%_140%_at_100%_0%,rgba(216,173,77,0.22),transparent_56%),radial-gradient(90%_120%_at_0%_100%,rgba(155,116,223,0.24),transparent_60%),linear-gradient(135deg,#241537_0%,#100819_100%)] px-[72px] py-[72px] text-center text-white shadow-[var(--shadow-lg)] max-[780px]:rounded-[24px] max-[780px]:px-7 max-[780px]:py-12"
        >
          <div className="relative z-[2]">
            <Eyebrow
              className="!border-[rgba(216,173,77,0.26)] !bg-[var(--primary-50)] !text-[var(--primary)]"
              dotClassName="!bg-[var(--primary)] !shadow-[0_0_0_4px_rgba(216,173,77,0.18)]"
            >
              Condição especial de lançamento
            </Eyebrow>
            <h2 className="mx-auto mb-[14px] mt-[18px] max-w-[780px] font-[var(--font-display)] text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.1] text-white">
              Estudar sem direção pode custar caro.
              <br />
              Comece a evoluir com estratégia.
            </h2>
            <p className="mx-auto mb-8 max-w-[620px] text-[18px] leading-[1.6] text-white/[0.78]">
              Pratique questões, faça simulados, revise com flashcards, treine
              redação, acompanhe seus indicadores e siga um plano de estudos
              personalizado — tudo em um só app.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className={primaryButtonClass}
              >
                Começar agora por R$ 9,90
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </a>
              <a
                href="#planos"
                className={secondaryButtonClass}
              >
                Ver planos
              </a>
            </div>
            <div className="mt-[22px] text-[14px] text-white/[0.55]">
              Primeiro mês por apenas R$ 9,90 · Cancele quando quiser
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
