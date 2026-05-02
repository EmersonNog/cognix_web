import { type SubscriptionPlanId } from '@/app/model/subscription-plans'
import { FIRST_MONTH_COUPON_CODE } from '@/app/view/subscription/subscriptionConstants'
import { normalizeCouponCode } from '@/app/view/subscription/subscriptionUtils'

export type SubmittedCheckoutForm = {
  name: string
  email: string
  taxId: string
  cleanTaxId: string
  couponCode: string
}

const CPF_DIGIT_LENGTH = 11

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
