import { type ChangeEvent, type FormEvent, useState } from 'react'

import {
  findSubscriptionPlan,
  type SubscriptionPlanId,
} from '@/app/model/subscription-plans'
import { createAbacatePaySubscriptionCheckout } from '@/app/service/abacatepay'
import { FIRST_MONTH_COUPON_CODE } from '@/app/view/subscription/subscriptionConstants'
import {
  copyCouponToClipboard,
  maskCpf,
  normalizeCouponCode,
  resolveInitialConfirmation,
  resolveInitialPlanId,
} from '@/app/view/subscription/subscriptionUtils'

type CouponCopyStatus = 'idle' | 'copied' | 'blocked'

export function useSubscriptionCheckout() {
  const [selectedPlanId, setSelectedPlanId] = useState(resolveInitialPlanId)
  const [isConfirmed] = useState(resolveInitialConfirmation)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [couponCopyStatus, setCouponCopyStatus] =
    useState<CouponCopyStatus>('idle')
  const [taxId, setTaxId] = useState('')
  const [isCouponEnabled, setIsCouponEnabled] = useState(false)
  const [couponCode, setCouponCode] = useState('')

  const selectedPlan = findSubscriptionPlan(selectedPlanId)
  const isMonthlyPlan = selectedPlan.id === 'mensal'
  const isCouponFieldEnabled = isMonthlyPlan && isCouponEnabled
  const isFirstMonthCouponApplied =
    isCouponFieldEnabled &&
    normalizeCouponCode(couponCode) === FIRST_MONTH_COUPON_CODE
  const isCouponCodeInvalid =
    isCouponFieldEnabled &&
    couponCode.trim() !== '' &&
    normalizeCouponCode(couponCode) !== FIRST_MONTH_COUPON_CODE
  const checkoutDisplayPrice =
    isMonthlyPlan && !isFirstMonthCouponApplied ? 'R$ 19,90' : selectedPlan.price
  const checkoutPriceLabel =
    isMonthlyPlan && isFirstMonthCouponApplied ? 'Com cupom' : 'Total hoje'
  const checkoutDisplayNote =
    isMonthlyPlan && isFirstMonthCouponApplied
      ? 'Primeiro mês por R$ 9,90.'
      : isCouponFieldEnabled
        ? 'Digite o cupom para ativar o desconto.'
        : isMonthlyPlan
          ? 'Mensalidade de R$ 19,90.'
          : selectedPlan.checkoutNote
  const couponHelperText = !isMonthlyPlan
    ? null
    : isCouponCodeInvalid
      ? `Cupom inválido. Use ${FIRST_MONTH_COUPON_CODE}.`
      : couponCopyStatus === 'copied'
        ? 'Cupom copiado.'
        : couponCopyStatus === 'blocked'
          ? `Copie ${FIRST_MONTH_COUPON_CODE} no checkout.`
          : null

  function handlePlanSelect(planId: SubscriptionPlanId) {
    setSelectedPlanId(planId)
    setErrorMessage(null)
    setCouponCopyStatus('idle')

    if (planId !== 'mensal') {
      setIsCouponEnabled(false)
      setCouponCode('')
    }
  }

  function handleTaxIdChange(event: ChangeEvent<HTMLInputElement>) {
    setTaxId(maskCpf(event.target.value))
  }

  function handleCouponCodeChange(event: ChangeEvent<HTMLInputElement>) {
    setCouponCopyStatus('idle')
    setCouponCode(normalizeCouponCode(event.target.value))
  }

  function handleCouponToggle(event: ChangeEvent<HTMLInputElement>) {
    const shouldUseCoupon = event.target.checked

    setIsCouponEnabled(shouldUseCoupon)
    setCouponCopyStatus('idle')
    setErrorMessage(null)

    if (!shouldUseCoupon) {
      setCouponCode('')
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const submittedTaxId = String(formData.get('taxId') ?? '').trim()
    const submittedCouponCode = isCouponFieldEnabled
      ? normalizeCouponCode(String(formData.get('couponCode') ?? '').trim())
      : ''
    const cleanTaxId = submittedTaxId.replace(/\D/g, '')

    if (!name || !email || !submittedTaxId) {
      setErrorMessage('Informe seu nome, email e CPF para continuar.')
      return
    }

    if (cleanTaxId.length !== 11) {
      setErrorMessage('Informe um CPF válido para continuar.')
      return
    }

    if (
      selectedPlan.id === 'mensal' &&
      submittedCouponCode &&
      submittedCouponCode !== FIRST_MONTH_COUPON_CODE
    ) {
      setErrorMessage(
        `Cupom inválido. Use ${FIRST_MONTH_COUPON_CODE} ou deixe o campo vazio para continuar sem cupom.`,
      )
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)
    setCouponCopyStatus('idle')

    try {
      if (
        selectedPlan.id === 'mensal' &&
        submittedCouponCode === FIRST_MONTH_COUPON_CODE
      ) {
        const didCopyCoupon = await copyCouponToClipboard(
          FIRST_MONTH_COUPON_CODE,
        )
        setCouponCopyStatus(didCopyCoupon ? 'copied' : 'blocked')
      }

      const checkoutUrl = await createAbacatePaySubscriptionCheckout({
        planId: selectedPlan.id,
        name,
        email,
        taxId: submittedTaxId,
        couponCode: submittedCouponCode || undefined,
      })

      window.location.assign(checkoutUrl)
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Não foi possível iniciar o checkout. Tente novamente em alguns instantes.',
      )
    }
  }

  return {
    selectedPlanId,
    selectedPlan,
    isConfirmed,
    isSubmitting,
    errorMessage,
    taxId,
    isCouponEnabled,
    isCouponFieldEnabled,
    isCouponCodeInvalid,
    isMonthlyPlan,
    couponCode,
    couponHelperText,
    checkoutDisplayPrice,
    checkoutPriceLabel,
    checkoutDisplayNote,
    handlePlanSelect,
    handleTaxIdChange,
    handleCouponCodeChange,
    handleCouponToggle,
    handleSubmit,
  }
}
