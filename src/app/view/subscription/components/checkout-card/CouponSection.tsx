import clsx from 'clsx'

import { type CouponSectionProps } from '@/app/view/subscription/components/checkout-card/checkoutCardTypes'
import { SUBSCRIPTION_INPUT_CLASS } from '@/app/view/subscription/subscriptionConstants'

export function CouponSection({
  couponCode,
  couponHelperText,
  isCouponCodeInvalid,
  isCouponEnabled,
  isCouponFieldEnabled,
  isMonthlyPlan,
  onCouponCodeChange,
  onCouponToggle,
}: CouponSectionProps) {
  if (!isMonthlyPlan) {
    return null
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="subscription-use-coupon"
        className="inline-flex cursor-pointer items-center gap-3 text-[14px] font-semibold"
      >
        <input
          id="subscription-use-coupon"
          type="checkbox"
          checked={isCouponEnabled}
          onChange={onCouponToggle}
          className="h-4 w-4 rounded border border-[var(--border)] accent-[var(--primary)]"
        />
        Usar cupom
      </label>

      {isCouponFieldEnabled && (
        <div className="mt-3">
          <input
            id="subscription-coupon"
            name="couponCode"
            aria-describedby={
              couponHelperText ? 'subscription-coupon-note' : undefined
            }
            aria-invalid={isCouponCodeInvalid || undefined}
            autoComplete="off"
            value={couponCode}
            onChange={onCouponCodeChange}
            className={clsx(
              SUBSCRIPTION_INPUT_CLASS,
              isCouponCodeInvalid &&
                'border-[rgba(255,112,112,0.54)] bg-[rgba(255,112,112,0.06)] focus:border-[rgba(255,112,112,0.74)] focus:shadow-[0_0_0_4px_rgba(255,112,112,0.12)]',
            )}
            placeholder="cupom"
          />
          {couponHelperText && (
            <p
              id="subscription-coupon-note"
              className={clsx(
                'mt-2 text-[12px] leading-[1.45]',
                isCouponCodeInvalid
                  ? 'text-[rgba(255,158,158,0.95)]'
                  : 'text-[var(--slate-2)]',
              )}
            >
              {couponHelperText}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
