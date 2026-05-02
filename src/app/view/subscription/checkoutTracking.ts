import { type SubscriptionPlan } from '@/app/model/subscription-plans'
import { trackMetaEvent } from '@/app/service/metaPixel'

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
