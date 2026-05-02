import { ShieldCheck } from 'lucide-react'

import { objections } from '@/app/model/landing-objections'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import {
  containerClass,
  primaryButtonClass,
} from '@/app/view/viewTokens'

export function ObjectionsSection() {
  return (
    <section className="bg-transparent py-[104px] max-[720px]:py-[72px]">
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow className="mb-[18px]">Dúvidas comuns</Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            Pensando se vale a pena?
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Entendemos. As dúvidas mais comuns de quem está chegando agora —
            respondidas sem rodeio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">
          {objections.map((item) => (
            <article
              key={item.question}
              data-reveal
              className="reveal flex flex-col gap-[10px] rounded-[20px] border border-[var(--border)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-sm)]"
            >
              <div className="flex items-start gap-[10px] font-[var(--font-display)] text-[18px] font-bold leading-[1.25] tracking-[-0.01em] text-[var(--ink)]">
                <span className="mt-0.5 text-[40px] leading-[0.9] text-[var(--primary)]">
                  “
                </span>
                {item.question}
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-6 rounded-[28px] border border-[rgba(216,173,77,0.26)] bg-[radial-gradient(90%_130%_at_0%_0%,rgba(115,225,191,0.12),transparent_54%),linear-gradient(135deg,#1c122c_0%,#130a22_100%)] px-8 py-7 shadow-[var(--shadow-md)] max-[780px]:grid-cols-1 max-[780px]:text-center min-[781px]:grid-cols-[auto_1fr_auto]">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-[rgba(115,225,191,0.22)] bg-[var(--success-50)] text-[var(--success)]">
            <ShieldCheck className="h-7 w-7" strokeWidth={2} />
          </div>
          <div>
            <h3 className="mb-1 font-[var(--font-display)] text-[20px] font-bold text-[var(--ink)]">
              Comece com baixo risco
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-[var(--ink-2)]">
              Teste o Cognix por{' '}
              <strong className="text-[var(--success)]">R$ 9,90 no primeiro mês</strong>
              . Explore o banco de questões, os indicadores, os flashcards e a
              redação guiada. Se não quiser continuar, basta cancelar — sem
              fidelidade, sem burocracia.
            </p>
          </div>
          <a href="/assinatura?plano=mensal" className={primaryButtonClass}>
            Começar agora
          </a>
        </div>
      </div>
    </section>
  )
}
