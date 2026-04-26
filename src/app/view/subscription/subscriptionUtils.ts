import { type SubscriptionPlanId } from '@/app/model/subscription-plans'

export function resolveInitialPlanId(): SubscriptionPlanId {
  if (typeof window === 'undefined') {
    return 'mensal'
  }

  const planParam = new URLSearchParams(window.location.search).get('plano')

  return planParam === 'anual' ? 'anual' : 'mensal'
}

export function resolveInitialConfirmation() {
  if (typeof window === 'undefined') {
    return false
  }

  return new URLSearchParams(window.location.search).get('status') === 'sucesso'
}

export function maskCpf(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 3) {
    return digits
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`
  }

  if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
  }

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
}

export function normalizeCouponCode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 30)
}

export async function copyCouponToClipboard(value: string) {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    return false
  }

  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    return false
  }
}
