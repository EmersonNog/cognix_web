import { ArrowRight } from 'lucide-react'

import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

export function FinalCtaSection() {
  return (
    <section className="bg-[var(--surface)] py-[120px] max-[720px]:py-[72px]">
      <div className={containerClass}>
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[32px] bg-[radial-gradient(120%_140%_at_100%_0%,rgba(124,58,237,0.6),transparent_55%),radial-gradient(90%_120%_at_0%_100%,rgba(37,99,235,0.8),transparent_60%),linear-gradient(135deg,#1E3A8A_0%,#1E1B4B_100%)] px-[72px] py-[72px] text-center text-white max-[780px]:rounded-[24px] max-[780px]:px-7 max-[780px]:py-12"
        >
          <div className="relative z-[2]">
            <Eyebrow
              className="!border-white/[0.14] !bg-white/[0.08] !text-[#c4d7ff]"
              dotClassName="!bg-[#78a3ff] !shadow-[0_0_0_4px_rgba(196,215,255,0.16)]"
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
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[999px] bg-white px-[22px] text-[16px] font-semibold tracking-[-0.01em] text-[var(--ink)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-[transform,background] duration-150 hover:-translate-y-px hover:bg-[#F1F5F9]"
              >
                Começar agora por R$ 9,90
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </a>
              <a
                href="#planos"
                className="inline-flex h-[52px] items-center justify-center rounded-[999px] border border-white/[0.18] bg-white/[0.08] px-[22px] text-[16px] font-semibold tracking-[-0.01em] text-white backdrop-blur-[6px] transition-[transform,background] duration-150 hover:-translate-y-px hover:bg-white/[0.14]"
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
