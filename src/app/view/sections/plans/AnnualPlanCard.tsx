import { Check } from 'lucide-react'

import { annualFeatures } from '@/app/model/landing-plans'
import { PlanFeatureList } from '@/app/view/sections/plans/PlanFeatureList'
import { primaryButtonClass } from '@/app/view/viewTokens'

export function AnnualPlanCard() {
  return (
    <div className="relative flex h-full min-w-0">
      <span className="absolute left-1/2 top-0 z-[3] inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-[999px] bg-[linear-gradient(90deg,#f4d67a_0%,#d8ad4d_100%)] px-4 py-2 font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[0.04em] whitespace-nowrap text-[#100816] shadow-[0_12px_28px_-12px_rgba(216,173,77,0.78)]">
        <span className="h-[6px] w-[6px] rounded-full bg-[#100816]" />
        Mais vendido
      </span>

      <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-[rgba(216,173,77,0.26)] bg-[radial-gradient(120%_100%_at_100%_0%,rgba(216,173,77,0.18),transparent_56%),linear-gradient(180deg,#241537_0%,#100819_100%)] px-9 pb-9 pt-11 text-white shadow-[var(--shadow-lg)]">
        <div className="pointer-events-none absolute right-[-30%] top-[-40%] h-[320px] w-[320px] bg-[radial-gradient(closest-side,rgba(216,173,77,0.22),transparent_70%)]" />
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
            Cobrado anualmente ·{' '}
            <strong className="font-semibold text-white">R$ 199,90/ano</strong>{' '}
            · 12 meses de acesso
          </span>
        </div>
        <span className="relative mb-5 inline-flex items-center gap-1.5 rounded-[999px] bg-[var(--success-50)] px-[10px] py-[5px] text-[12px] font-semibold text-[var(--success)]">
          <Check className="h-3 w-3" strokeWidth={2.6} />
          2 meses grátis no plano anual
        </span>
        <PlanFeatureList
          features={annualFeatures}
          itemClassName="flex items-start gap-[10px] text-[15px] text-white/[0.88]"
        />
        <div className="relative mt-auto">
          <a
            href="/assinatura?plano=anual"
            className={`${primaryButtonClass} w-full`}
          >
            Assinar plano anual
          </a>
          <div className="mt-[14px] text-center text-[12px] text-white/50">
            Pagamento único anual · Cancele antes da renovação
          </div>
        </div>
      </article>
    </div>
  )
}
