import clsx from 'clsx'
import { ArrowLeft, Check } from 'lucide-react'

import {
  subscriptionPlans,
  type SubscriptionPlanId,
} from '@/app/model/subscription-plans'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'

type PlanSelectionPanelProps = {
  selectedPlanId: SubscriptionPlanId
  onPlanSelect: (planId: SubscriptionPlanId) => void
}

export function PlanSelectionPanel({
  selectedPlanId,
  onPlanSelect,
}: PlanSelectionPanelProps) {
  return (
    <div>
      <div className="mb-8 flex flex-col items-start gap-5">
        <a
          href="/#planos"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--slate)] transition-colors duration-150 hover:text-[var(--primary)]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
          Voltar aos planos
        </a>

        <Eyebrow>Assinatura Cognix</Eyebrow>
      </div>
      <h1 className="mb-5 max-w-[760px] font-[var(--font-display)] text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.04em]">
        Comece com um plano claro e sem fricção.
      </h1>
      <p className="mb-10 max-w-[640px] text-[18px] leading-[1.7] text-[var(--slate)]">
        Escolha o plano, informe seus dados e avance para o pagamento seguro. O
        acesso completo fica vinculado ao email informado.
      </p>

      <div className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
        {subscriptionPlans.map((plan) => {
          const isSelected = selectedPlanId === plan.id

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onPlanSelect(plan.id)}
              className={clsx(
                'rounded-[24px] border p-6 text-left transition-[transform,border-color,background,box-shadow] duration-200 hover:-translate-y-1',
                isSelected
                  ? 'border-[rgba(216,173,77,0.42)] bg-[radial-gradient(120%_100%_at_100%_0%,rgba(216,173,77,0.16),transparent_55%),var(--surface-card-2)] shadow-[var(--shadow-md)]'
                  : 'border-[var(--border)] bg-[var(--surface-card)] shadow-[var(--shadow-sm)] hover:border-[rgba(216,173,77,0.3)]',
              )}
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-[999px] border border-[var(--border)] bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--primary)]">
                  {plan.eyebrow}
                </span>
                <span
                  className={clsx(
                    'grid h-7 w-7 place-items-center rounded-full border',
                    isSelected
                      ? 'border-[var(--primary)] bg-[var(--primary)] text-[#100816]'
                      : 'border-[var(--border)] text-transparent',
                  )}
                >
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
              </div>
              <h2 className="mb-3 font-[var(--font-display)] text-[24px] font-bold">
                {plan.name}
              </h2>
              <div className="mb-3 flex items-baseline gap-2">
                <span className="font-[var(--font-display)] text-[38px] font-bold leading-none">
                  {plan.price}
                </span>
                <span className="text-[14px] text-[var(--slate)]">
                  {plan.cadence}
                </span>
              </div>
              <p className="text-[14px] leading-[1.6] text-[var(--slate)]">
                {plan.note}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
