export type SubscriptionPlanId = 'mensal' | 'anual'

export type SubscriptionPlan = {
  id: SubscriptionPlanId
  name: string
  eyebrow: string
  price: string
  cadence: string
  note: string
  checkoutNote: string
  cta: string
  features: string[]
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'mensal',
    name: 'Plano mensal',
    eyebrow: 'Flexível',
    price: 'R$ 19,90',
    cadence: 'no primeiro mês',
    note: 'Depois, R$ 29,90/mês. Cancele quando quiser.',
    checkoutNote: 'Primeiro mês por R$ 19,90. Renovação mensal sem fidelidade.',
    cta: 'Assinar plano mensal',
    features: [
      'Banco de questões completo',
      'Simulados e flashcards',
      'Redação guiada por IA',
      'Dashboard e plano personalizado',
    ],
  },
  {
    id: 'anual',
    name: 'Plano anual',
    eyebrow: 'Mais vendido',
    price: 'R$ 299,00',
    cadence: 'por ano',
    note: 'Equivale a R$ 24,91/mês, com 2 meses grátis.',
    checkoutNote: 'Assinatura anual com 12 meses de acesso completo.',
    cta: 'Assinar plano anual',
    features: [
      'Tudo do plano mensal',
      '12 meses de acesso completo',
      'Economia de R$ 59,80',
      'Ideal para ciclos longos de preparação',
    ],
  },
]

export function findSubscriptionPlan(planId: string | null) {
  return (
    subscriptionPlans.find((plan) => plan.id === planId) ??
    subscriptionPlans[0]
  )
}
