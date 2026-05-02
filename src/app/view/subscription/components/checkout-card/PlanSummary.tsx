import { type PlanSummaryProps } from '@/app/view/subscription/components/checkout-card/checkoutCardTypes'

export function PlanSummary({
  checkoutDisplayNote,
  checkoutDisplayPrice,
  checkoutPriceLabel,
  selectedPlan,
}: PlanSummaryProps) {
  return (
    <div className="mb-6 rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-[14px] text-[var(--slate)]">
          Plano selecionado
        </span>
        <strong className="text-right font-[var(--font-display)] text-[18px]">
          {selectedPlan.name}
        </strong>
      </div>
      <div className="mb-3 flex items-end justify-between gap-3">
        <span className="text-[14px] text-[var(--slate)]">
          {checkoutPriceLabel}
        </span>
        <span className="font-[var(--font-display)] text-[30px] font-bold leading-none text-[var(--primary)]">
          {checkoutDisplayPrice}
        </span>
      </div>
      <p className="text-[13px] leading-[1.55] text-[var(--slate-2)]">
        {checkoutDisplayNote}
      </p>
    </div>
  )
}
