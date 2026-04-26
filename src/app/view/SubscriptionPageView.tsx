import { FooterSection } from '@/app/view/sections/FooterSection'
import { HeaderSection } from '@/app/view/sections/HeaderSection'
import { CheckoutCard } from '@/app/view/subscription/components/CheckoutCard'
import { PlanSelectionPanel } from '@/app/view/subscription/components/PlanSelectionPanel'
import { SubscriptionSuccessPanel } from '@/app/view/subscription/components/SubscriptionSuccessPanel'
import { useSubscriptionCheckout } from '@/app/view/subscription/useSubscriptionCheckout'
import { containerClass } from '@/app/view/viewTokens'

type SubscriptionPageViewProps = {
  isScrolled: boolean
}

export function SubscriptionPageView({ isScrolled }: SubscriptionPageViewProps) {
  const checkout = useSubscriptionCheckout()

  return (
    <div className="min-h-dvh bg-[var(--surface)] text-[var(--ink)]">
      <HeaderSection isScrolled={isScrolled} />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(60%_44%_at_82%_10%,rgba(216,173,77,0.14),transparent_62%),linear-gradient(180deg,#0d0717_0%,#12091f_100%)] pb-[104px] pt-[88px] max-[720px]:pb-[72px] max-[720px]:pt-[64px]">
          <div className={containerClass}>
            {checkout.isConfirmed ? (
              <SubscriptionSuccessPanel
                selectedPlanName={checkout.selectedPlan.name}
              />
            ) : (
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] items-start gap-10 max-[980px]:grid-cols-1">
                <PlanSelectionPanel
                  selectedPlanId={checkout.selectedPlanId}
                  onPlanSelect={checkout.handlePlanSelect}
                />

                <CheckoutCard
                  selectedPlan={checkout.selectedPlan}
                  isSubmitting={checkout.isSubmitting}
                  errorMessage={checkout.errorMessage}
                  taxId={checkout.taxId}
                  couponCode={checkout.couponCode}
                  isCouponEnabled={checkout.isCouponEnabled}
                  isCouponFieldEnabled={checkout.isCouponFieldEnabled}
                  isCouponCodeInvalid={checkout.isCouponCodeInvalid}
                  isMonthlyPlan={checkout.isMonthlyPlan}
                  couponHelperText={checkout.couponHelperText}
                  checkoutDisplayPrice={checkout.checkoutDisplayPrice}
                  checkoutPriceLabel={checkout.checkoutPriceLabel}
                  checkoutDisplayNote={checkout.checkoutDisplayNote}
                  onSubmit={checkout.handleSubmit}
                  onTaxIdChange={checkout.handleTaxIdChange}
                  onCouponCodeChange={checkout.handleCouponCodeChange}
                  onCouponToggle={checkout.handleCouponToggle}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
