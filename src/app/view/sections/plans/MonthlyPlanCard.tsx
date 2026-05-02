import { monthlyFeatures } from '@/app/model/landing-plans'
import { PlanFeatureList } from '@/app/view/sections/plans/PlanFeatureList'
import { secondaryButtonClass } from '@/app/view/viewTokens'

export function MonthlyPlanCard() {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-[28px] border border-[var(--border)] bg-[var(--surface-card)] p-9 shadow-[var(--shadow-sm)]">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="font-[var(--font-display)] text-[22px] font-bold tracking-[-0.01em] text-[var(--ink)]">
          Mensal
        </h3>
        <span className="inline-flex shrink-0 items-center rounded-[999px] border border-[rgba(216,173,77,0.26)] bg-[var(--primary-50)] px-3 py-1 text-[12px] font-bold text-[var(--primary)]">
          Cupom COGNIX10
        </span>
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
      <div className="mb-3 text-[14px] text-[var(--slate)]">
        Depois, <strong className="text-[var(--ink)]">R$ 19,90/mês</strong>.
        Cancele quando quiser.
      </div>
      <PlanFeatureList
        features={monthlyFeatures}
        itemClassName="flex items-start gap-[10px] text-[15px] text-[var(--ink-2)]"
      />
      <div className="mt-auto">
        <a
          href="/assinatura?plano=mensal"
          className={secondaryButtonClass + ' w-full'}
        >
          Começar por R$ 9,90
        </a>
        <div className="mt-[14px] text-center text-[12px] text-[var(--slate-2)]">
          Cancele quando quiser
        </div>
      </div>
    </article>
  )
}
