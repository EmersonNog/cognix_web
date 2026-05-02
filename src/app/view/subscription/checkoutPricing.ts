import { type SubscriptionPlan } from '@/app/model/subscription-plans'

type ResolveCheckoutDisplayStateInput = {
  isCouponFieldEnabled: boolean
  isFirstMonthCouponApplied: boolean
  isMonthlyPlan: boolean
  selectedPlan: SubscriptionPlan
}

type CheckoutDisplayState = {
  checkoutDisplayNote: string
  checkoutDisplayPrice: string
  checkoutPriceLabel: string
  checkoutValue: number
}

const MONTHLY_RENEWAL_PRICE = 'R$ 19,90'
const MONTHLY_RENEWAL_VALUE = 19.9
const MONTHLY_FIRST_MONTH_VALUE = 9.9
const ANNUAL_VALUE = 199.9

export function resolveCheckoutDisplayState({
  isCouponFieldEnabled,
  isFirstMonthCouponApplied,
  isMonthlyPlan,
  selectedPlan,
}: ResolveCheckoutDisplayStateInput): CheckoutDisplayState {
  return {
    checkoutDisplayPrice:
      isMonthlyPlan && !isFirstMonthCouponApplied
        ? MONTHLY_RENEWAL_PRICE
        : selectedPlan.price,
    checkoutPriceLabel:
      isMonthlyPlan && isFirstMonthCouponApplied ? 'Com cupom' : 'Total hoje',
    checkoutDisplayNote: resolveCheckoutDisplayNote({
      isCouponFieldEnabled,
      isFirstMonthCouponApplied,
      isMonthlyPlan,
      selectedPlan,
    }),
    checkoutValue: resolveCheckoutValue(
      selectedPlan.id,
      isFirstMonthCouponApplied,
    ),
  }
}

function resolveCheckoutDisplayNote({
  isCouponFieldEnabled,
  isFirstMonthCouponApplied,
  isMonthlyPlan,
  selectedPlan,
}: ResolveCheckoutDisplayStateInput) {
  if (isMonthlyPlan && isFirstMonthCouponApplied) {
    return 'Primeiro mês por R$ 9,90.'
  }

  if (isCouponFieldEnabled) {
    return 'Digite o cupom para ativar o desconto.'
  }

  if (isMonthlyPlan) {
    return 'Mensalidade de R$ 19,90.'
  }

  return selectedPlan.checkoutNote
}

function resolveCheckoutValue(
  selectedPlanId: SubscriptionPlan['id'],
  isFirstMonthCouponApplied: boolean,
) {
  if (selectedPlanId === 'anual') {
    return ANNUAL_VALUE
  }

  return isFirstMonthCouponApplied
    ? MONTHLY_FIRST_MONTH_VALUE
    : MONTHLY_RENEWAL_VALUE
}
