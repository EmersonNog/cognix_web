import { Check } from 'lucide-react'

import {
  annualFeatures,
  monthlyFeatures,
} from '@/app/model/landing-plans'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import {
  containerClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

export function PlansSection() {
  return (
    <section
      id="planos"
      className="bg-[var(--surface)] py-[104px] max-[720px]:py-[72px]"
    >
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow className="mb-[18px]">Escolha seu plano</Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            Comece hoje com o plano ideal
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Acesso completo a todos os recursos em ambos os planos. Cancele
            quando quiser.
          </p>
        </div>

        <div
          data-reveal
          className="reveal mx-auto grid max-w-[960px] auto-rows-fr grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch gap-6 max-[780px]:grid-cols-1"
        >
          <article
            className="flex h-full min-w-0 flex-col rounded-[28px] border border-[var(--border)] bg-white p-9"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-[var(--font-display)] text-[22px] font-bold tracking-[-0.01em] text-[var(--ink)]">
                Mensal
              </h3>
            </div>
            <div className="my-5 flex items-baseline gap-1">
              <span className="font-[var(--font-display)] text-[22px] font-semibold text-[var(--slate)]">
                R$
              </span>
              <span className="font-[var(--font-display)] text-[54px] font-extrabold leading-none tracking-[-0.03em] text-[var(--ink)]">
                9,90
              </span>
              <span className="ml-1 text-[15px] font-medium text-[var(--slate)]">
                /1º mês
              </span>
            </div>
            <div className="mb-6 text-[14px] text-[var(--slate)]">
              Depois, <strong className="text-[var(--ink)]">R$ 19,90/mês</strong>.
              Cancele quando quiser.
            </div>
            <ul className="mb-7 flex list-none flex-col gap-3 p-0">
              {monthlyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-[10px] text-[15px] text-[var(--ink-2)]"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] bg-[var(--primary-50)] text-[var(--primary)]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a href="#" className={secondaryButtonClass + ' w-full'}>
                Começar por R$ 9,90
              </a>
              <div className="mt-[14px] text-center text-[12px] text-[var(--slate-2)]">
                Sem fidelidade · Cancele quando quiser
              </div>
            </div>
          </article>

          <div className="relative flex h-full min-w-0">
            <span className="absolute left-1/2 top-0 z-[3] inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-[999px] bg-[linear-gradient(90deg,#FCD34D_0%,#FBBF24_100%)] px-4 py-2 font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[0.04em] whitespace-nowrap text-[#0F172A] shadow-[0_10px_24px_-10px_rgba(251,191,36,0.6)]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#0F172A]" />
              Mais estratégico
            </span>

            <article
              className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-transparent bg-[linear-gradient(180deg,#0F172A_0%,#0B1220_100%)] px-9 pb-9 pt-11 text-white shadow-[0_40px_80px_-40px_rgba(37,99,235,0.6)]"
            >
              <div className="pointer-events-none absolute right-[-30%] top-[-40%] h-[320px] w-[320px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.45),transparent_70%)]" />
              <div className="relative mb-4 flex items-center justify-between">
                <h3 className="font-[var(--font-display)] text-[22px] font-bold tracking-[-0.01em] text-white">
                  Anual
                </h3>
              </div>
              <div className="relative my-5 flex items-baseline gap-1">
                <span className="font-[var(--font-display)] text-[22px] font-semibold text-white/[0.72]">
                  R$
                </span>
                <span className="font-[var(--font-display)] text-[54px] font-extrabold leading-none tracking-[-0.03em] text-white">
                  16,65
                </span>
                <span className="ml-1 text-[15px] font-medium text-white/[0.65]">
                  /mês
                </span>
              </div>
              <div className="relative mb-5 text-[11px] leading-none tracking-[-0.03em] text-white/[0.70]">
                <span className="whitespace-nowrap">
                  Cobrado anualmente · <strong className="font-semibold text-white">R$ 199,90/ano</strong>{' '}
                  · 12 meses de acesso
                </span>
              </div>
              <span className="relative mb-5 inline-flex items-center gap-1.5 rounded-[999px] bg-[rgba(34,197,94,0.18)] px-[10px] py-[5px] text-[12px] font-semibold text-[#86EFAC]">
                <Check className="h-3 w-3" strokeWidth={2.6} />
                2 meses grátis no plano anual
              </span>
              <ul className="relative mb-7 flex list-none flex-col gap-3 p-0">
                {annualFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-[10px] text-[15px] text-white/[0.88]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] bg-[rgba(96,165,250,0.18)] text-[#93C5FD]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="relative mt-auto">
                <a
                  href="#"
                  className={primaryButtonClass.replace(
                    'group inline-flex h-[52px] items-center justify-center gap-2 rounded-[999px] bg-[var(--primary)] px-[22px] text-[16px] font-semibold tracking-[-0.01em] text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[transform,box-shadow,background] duration-150 hover:-translate-y-px hover:bg-[var(--primary-600)]',
                    'inline-flex h-[52px] w-full items-center justify-center rounded-[999px] bg-white px-[22px] text-[16px] font-semibold tracking-[-0.01em] text-[var(--ink)] transition-[transform,background] duration-150 hover:-translate-y-px hover:bg-[#F1F5F9]',
                  )}
                >
                  Assinar plano anual
                </a>
                <div className="mt-[14px] text-center text-[12px] text-white/50">
                  Pagamento único anual · Cancele antes da renovação
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
