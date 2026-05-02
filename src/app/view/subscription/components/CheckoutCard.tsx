import { CheckoutErrorMessage } from '@/app/view/subscription/components/checkout-card/CheckoutErrorMessage'
import { CheckoutField } from '@/app/view/subscription/components/checkout-card/CheckoutField'
import { CheckoutHeader } from '@/app/view/subscription/components/checkout-card/CheckoutHeader'
import { CheckoutSubmitButton } from '@/app/view/subscription/components/checkout-card/CheckoutSubmitButton'
import { CheckoutTrustBadges } from '@/app/view/subscription/components/checkout-card/CheckoutTrustBadges'
import { type CheckoutCardProps } from '@/app/view/subscription/components/checkout-card/checkoutCardTypes'
import { CouponSection } from '@/app/view/subscription/components/checkout-card/CouponSection'
import { PlanFeaturesList } from '@/app/view/subscription/components/checkout-card/PlanFeaturesList'
import { PlanSummary } from '@/app/view/subscription/components/checkout-card/PlanSummary'
import { SUBSCRIPTION_INPUT_CLASS } from '@/app/view/subscription/subscriptionConstants'

export function CheckoutCard({
  selectedPlan,
  isSubmitting,
  errorMessage,
  taxId,
  couponCode,
  isCouponEnabled,
  isCouponFieldEnabled,
  isCouponCodeInvalid,
  isMonthlyPlan,
  couponHelperText,
  checkoutDisplayPrice,
  checkoutPriceLabel,
  checkoutDisplayNote,
  onSubmit,
  onTaxIdChange,
  onCouponCodeChange,
  onCouponToggle,
}: CheckoutCardProps) {
  return (
    <aside className="sticky top-[96px] rounded-[32px] border border-[var(--border)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-lg)] max-[980px]:static">
      <CheckoutHeader />

      <form onSubmit={onSubmit}>
        <CheckoutField id="subscription-name" label="Nome completo">
          <input
            id="subscription-name"
            name="name"
            required
            autoComplete="name"
            className={SUBSCRIPTION_INPUT_CLASS}
            placeholder="Seu nome"
          />
        </CheckoutField>

        <CheckoutField id="subscription-email" label="Email de acesso">
          <input
            id="subscription-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={SUBSCRIPTION_INPUT_CLASS}
            placeholder="voce@email.com"
          />
        </CheckoutField>

        <CheckoutField id="subscription-tax-id" label="CPF">
          <input
            id="subscription-tax-id"
            name="taxId"
            required
            inputMode="numeric"
            autoComplete="off"
            maxLength={14}
            value={taxId}
            onChange={onTaxIdChange}
            className={SUBSCRIPTION_INPUT_CLASS}
            placeholder="000.000.000-00"
          />
        </CheckoutField>

        <CouponSection
          couponCode={couponCode}
          couponHelperText={couponHelperText}
          isCouponCodeInvalid={isCouponCodeInvalid}
          isCouponEnabled={isCouponEnabled}
          isCouponFieldEnabled={isCouponFieldEnabled}
          isMonthlyPlan={isMonthlyPlan}
          onCouponCodeChange={onCouponCodeChange}
          onCouponToggle={onCouponToggle}
        />

        <PlanSummary
          checkoutDisplayNote={checkoutDisplayNote}
          checkoutDisplayPrice={checkoutDisplayPrice}
          checkoutPriceLabel={checkoutPriceLabel}
          selectedPlan={selectedPlan}
        />

        <PlanFeaturesList features={selectedPlan.features} />

        <CheckoutSubmitButton
          disabled={isSubmitting || isCouponCodeInvalid}
          isSubmitting={isSubmitting}
          label={selectedPlan.cta}
        />

        <CheckoutErrorMessage message={errorMessage} />
      </form>

      <CheckoutTrustBadges />
    </aside>
  )
}
