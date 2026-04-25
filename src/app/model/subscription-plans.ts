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
    price: 'R$ 9,90',
    cadence: 'no primeiro mês',
    note: 'Depois, R$ 19,90/mês. Cancele quando quiser.',
    checkoutNote: 'Primeiro mês por R$ 9,90. Renovação mensal sem fidelidade.',
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
    eyebrow: 'Mais estratégico',
    price: 'R$ 199,90',
    cadence: 'por ano',
    note: 'Equivale a R$ 16,65/mês, com 2 meses grátis.',
    checkoutNote: 'Pagamento único anual com 12 meses de acesso completo.',
    cta: 'Assinar plano anual',
    features: [
      'Tudo do plano mensal',
      '12 meses de acesso completo',
      'Economia de R$ 38,90',
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
