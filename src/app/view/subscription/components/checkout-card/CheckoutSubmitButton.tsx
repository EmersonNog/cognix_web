import { LoaderCircle } from 'lucide-react'

import { type CheckoutSubmitButtonProps } from '@/app/view/subscription/components/checkout-card/checkoutCardTypes'
import { primaryButtonClass } from '@/app/view/viewTokens'

export function CheckoutSubmitButton({
  disabled,
  isSubmitting,
  label,
}: CheckoutSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`checkout-button ${primaryButtonClass} w-full disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {isSubmitting ? (
        <>
          <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={2.4} />
          Abrindo checkout
        </>
      ) : (
        label
      )}
    </button>
  )
}
