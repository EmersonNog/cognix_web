import type { SubscriptionPlanId } from '@/app/model/subscription-plans'

type CreateSubscriptionCheckoutInput = {
  planId: SubscriptionPlanId
  name: string
  email: string
  taxId: string
  couponCode?: string
}

type CreateSubscriptionCheckoutResponse = {
  checkoutUrl?: string
  message?: string
  detail?: string
}

const abacatePaySubscriptionEndpoint =
  import.meta.env.VITE_ABACATEPAY_SUBSCRIPTION_ENDPOINT ??
  'https://api.cognix-hub.com/payments/abacatepay/subscription'

export async function createAbacatePaySubscriptionCheckout({
  planId,
  name,
  email,
  taxId,
  couponCode,
}: CreateSubscriptionCheckoutInput) {
  const response = await fetch(abacatePaySubscriptionEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ planId, name, email, taxId, couponCode }),
  })

  let payload: CreateSubscriptionCheckoutResponse | null = null

  try {
    payload = (await response.json()) as CreateSubscriptionCheckoutResponse
  } catch {
    payload = null
  }

  if (!response.ok || !payload?.checkoutUrl) {
    throw new Error(
      payload?.message ??
        payload?.detail ??
        'Não foi possível iniciar o checkout. Tente novamente em alguns instantes.',
    )
  }

  return payload.checkoutUrl
}
