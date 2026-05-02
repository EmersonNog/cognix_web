import { type CheckoutFieldProps } from '@/app/view/subscription/components/checkout-card/checkoutCardTypes'

export function CheckoutField({ children, id, label }: CheckoutFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold">
        {label}
      </label>
      {children}
    </div>
  )
}
