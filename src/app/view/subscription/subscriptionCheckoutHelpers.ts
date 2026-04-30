import {
  type SubscriptionPlan,
  type SubscriptionPlanId,
} from '@/app/model/subscription-plans'
import { trackMetaEvent } from '@/app/service/metaPixel'
import { FIRST_MONTH_COUPON_CODE } from '@/app/view/subscription/subscriptionConstants'
import {
  copyCouponToClipboard,
  normalizeCouponCode,
} from '@/app/view/subscription/subscriptionUtils'

export type CouponCopyStatus = 'idle' | 'copied' | 'blocked'

type SubmittedCheckoutForm = {
  name: string
  email: string
  taxId: string
  cleanTaxId: string
  couponCode: string
}

type CheckoutDisplayState = {
  checkoutDisplayNote: string
  checkoutDisplayPrice: string
  checkoutPriceLabel: string
  checkoutValue: number
}

const CPF_DIGIT_LENGTH = 11
const MONTHLY_RENEWAL_PRICE = 'R$ 19,90'
const MONTHLY_RENEWAL_VALUE = 19.9
const MONTHLY_FIRST_MONTH_VALUE = 9.9
const ANNUAL_VALUE = 199.9

export function readSubmittedCheckoutForm(
  form: HTMLFormElement,
  isCouponFieldEnabled: boolean,
): SubmittedCheckoutForm {
  const formData = new FormData(form)
  const taxId = String(formData.get('taxId') ?? '').trim()
  const couponCode = isCouponFieldEnabled
    ? normalizeCouponCode(String(formData.get('couponCode') ?? '').trim())
    : ''

  return {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    taxId,
    cleanTaxId: taxId.replace(/\D/g, ''),
    couponCode,
  }
}

export function validateCheckoutSubmission(
  form: SubmittedCheckoutForm,
  selectedPlanId: SubscriptionPlanId,
) {
  if (!form.name || !form.email || !form.taxId) {
    return 'Informe seu nome, email e CPF para continuar.'
  }

  if (form.cleanTaxId.length !== CPF_DIGIT_LENGTH) {
    return 'Informe um CPF válido para continuar.'
  }

  if (
    selectedPlanId === 'mensal' &&
    form.couponCode &&
    form.couponCode !== FIRST_MONTH_COUPON_CODE
  ) {
    return `Cupom inválido. Use ${FIRST_MONTH_COUPON_CODE} ou deixe o campo vazio para continuar sem cupom.`
  }

  return null
}

export function resolveCheckoutDisplayState({
  isCouponFieldEnabled,
  isFirstMonthCouponApplied,
  isMonthlyPlan,
  selectedPlan,
}: {
  isCouponFieldEnabled: boolean
  isFirstMonthCouponApplied: boolean
  isMonthlyPlan: boolean
  selectedPlan: SubscriptionPlan
}): CheckoutDisplayState {
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

export function trackInitiateCheckout(
  selectedPlan: SubscriptionPlan,
  checkoutValue: number,
) {
  trackMetaEvent('InitiateCheckout', {
    content_name: selectedPlan.name,
    content_type: 'product',
    currency: 'BRL',
    num_items: 1,
    value: checkoutValue,
  })
}

function resolveCheckoutDisplayNote({
  isCouponFieldEnabled,
  isFirstMonthCouponApplied,
  isMonthlyPlan,
  selectedPlan,
}: {
  isCouponFieldEnabled: boolean
  isFirstMonthCouponApplied: boolean
  isMonthlyPlan: boolean
  selectedPlan: SubscriptionPlan
}) {
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
  selectedPlanId: SubscriptionPlanId,
  isFirstMonthCouponApplied: boolean,
) {
  if (selectedPlanId === 'anual') {
    return ANNUAL_VALUE
  }

  return isFirstMonthCouponApplied
    ? MONTHLY_FIRST_MONTH_VALUE
    : MONTHLY_RENEWAL_VALUE
}
