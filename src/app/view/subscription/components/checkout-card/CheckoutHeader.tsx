import { CreditCard } from 'lucide-react'

export function CheckoutHeader() {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-[16px] bg-[var(--primary-50)] text-[var(--primary)]">
        <CreditCard className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <div>
        <h2 className="font-[var(--font-display)] text-[24px] font-bold">
          Finalizar assinatura
        </h2>
        <p className="text-[14px] text-[var(--slate)]">
          Checkout seguro via AbacatePay.
        </p>
      </div>
    </div>
  )
}
