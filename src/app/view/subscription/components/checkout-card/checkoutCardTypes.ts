import type { LucideIcon } from 'lucide-react'
import { type ChangeEvent, type FormEvent, type ReactNode } from 'react'

import { type SubscriptionPlan } from '@/app/model/subscription-plans'

export type CheckoutCardProps = {
  selectedPlan: SubscriptionPlan
  isSubmitting: boolean
  errorMessage: string | null
  taxId: string
  couponCode: string
  isCouponEnabled: boolean
  isCouponFieldEnabled: boolean
  isCouponCodeInvalid: boolean
  isMonthlyPlan: boolean
  couponHelperText: string | null
  checkoutDisplayPrice: string
  checkoutPriceLabel: string
  checkoutDisplayNote: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onTaxIdChange: (event: ChangeEvent<HTMLInputElement>) => void
  onCouponCodeChange: (event: ChangeEvent<HTMLInputElement>) => void
  onCouponToggle: (event: ChangeEvent<HTMLInputElement>) => void
}

export type CheckoutFieldProps = {
  children: ReactNode
  id: string
  label: string
}

export type CouponSectionProps = Pick<
  CheckoutCardProps,
  | 'couponCode'
  | 'couponHelperText'
  | 'isCouponCodeInvalid'
  | 'isCouponEnabled'
  | 'isCouponFieldEnabled'
  | 'isMonthlyPlan'
  | 'onCouponCodeChange'
  | 'onCouponToggle'
>

export type PlanSummaryProps = Pick<
  CheckoutCardProps,
  | 'checkoutDisplayNote'
  | 'checkoutDisplayPrice'
  | 'checkoutPriceLabel'
  | 'selectedPlan'
>

export type CheckoutSubmitButtonProps = {
  disabled: boolean
  isSubmitting: boolean
  label: string
}

export type CheckoutTrustBadge = {
  className?: string
  icon: LucideIcon
  iconClassName: string
  label: string
}
