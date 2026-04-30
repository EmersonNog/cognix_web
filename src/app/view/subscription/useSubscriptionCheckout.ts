import { type ChangeEvent, type FormEvent, useState } from 'react'

import {
  findSubscriptionPlan,
  type SubscriptionPlanId,
} from '@/app/model/subscription-plans'
import { createAbacatePaySubscriptionCheckout } from '@/app/service/abacatepay'
import { readCheckoutAttribution } from '@/app/service/attribution'
import { FIRST_MONTH_COUPON_CODE } from '@/app/view/subscription/subscriptionConstants'
import {
  type CouponCopyStatus,
  maybeCopyFirstMonthCoupon,
  readSubmittedCheckoutForm,
  resolveCheckoutDisplayState,
  resolveCouponHelperText,
  trackInitiateCheckout,
  validateCheckoutSubmission,
} from '@/app/view/subscription/subscriptionCheckoutHelpers'
import {
  maskCpf,
  normalizeCouponCode,
  resolveInitialConfirmation,
  resolveInitialPlanId,
} from '@/app/view/subscription/subscriptionUtils'

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
  const {
    checkoutDisplayNote,
    checkoutDisplayPrice,
    checkoutPriceLabel,
    checkoutValue,
  } = resolveCheckoutDisplayState({
    isCouponFieldEnabled,
    isFirstMonthCouponApplied,
    isMonthlyPlan,
    selectedPlan,
  })
  const couponHelperText = resolveCouponHelperText({
    couponCopyStatus,
    isCouponCodeInvalid,
    isMonthlyPlan,
  })

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

    const submittedForm = readSubmittedCheckoutForm(
      event.currentTarget,
      isCouponFieldEnabled,
    )
    const validationError = validateCheckoutSubmission(
      submittedForm,
      selectedPlan.id,
    )

    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)
    setCouponCopyStatus('idle')

    try {
      const nextCouponCopyStatus = await maybeCopyFirstMonthCoupon({
        couponCode: submittedForm.couponCode,
        planId: selectedPlan.id,
      })

      if (nextCouponCopyStatus) {
        setCouponCopyStatus(nextCouponCopyStatus)
      }

      const checkoutUrl = await createAbacatePaySubscriptionCheckout({
        planId: selectedPlan.id,
        name: submittedForm.name,
        email: submittedForm.email,
        taxId: submittedForm.taxId,
        attribution: readCheckoutAttribution(),
        couponCode: submittedForm.couponCode || undefined,
      })

      trackInitiateCheckout(selectedPlan, checkoutValue)
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
    checkoutValue,
    handlePlanSelect,
    handleTaxIdChange,
    handleCouponCodeChange,
    handleCouponToggle,
    handleSubmit,
  }
}
