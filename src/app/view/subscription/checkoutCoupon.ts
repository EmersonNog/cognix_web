import { type SubscriptionPlanId } from '@/app/model/subscription-plans'
import { FIRST_MONTH_COUPON_CODE } from '@/app/view/subscription/subscriptionConstants'
import { copyCouponToClipboard } from '@/app/view/subscription/subscriptionUtils'

export type CouponCopyStatus = 'idle' | 'copied' | 'blocked'

export function resolveCouponHelperText({
  couponCopyStatus,
  isCouponCodeInvalid,
  isMonthlyPlan,
}: {
  couponCopyStatus: CouponCopyStatus
  isCouponCodeInvalid: boolean
  isMonthlyPlan: boolean
}) {
  if (!isMonthlyPlan) {
    return null
  }

  if (isCouponCodeInvalid) {
    return `Cupom inválido. Use ${FIRST_MONTH_COUPON_CODE}.`
  }

  if (couponCopyStatus === 'copied') {
    return 'Cupom copiado.'
  }

  if (couponCopyStatus === 'blocked') {
    return `Copie ${FIRST_MONTH_COUPON_CODE} no checkout.`
  }

  return null
}

export async function maybeCopyFirstMonthCoupon({
  couponCode,
  planId,
}: {
  couponCode: string
  planId: SubscriptionPlanId
}): Promise<CouponCopyStatus | null> {
  if (planId !== 'mensal' || couponCode !== FIRST_MONTH_COUPON_CODE) {
    return null
  }

  const didCopyCoupon = await copyCouponToClipboard(FIRST_MONTH_COUPON_CODE)

  return didCopyCoupon ? 'copied' : 'blocked'
}
