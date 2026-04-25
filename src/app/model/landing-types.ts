export type IconName =
  | 'barChart3'
  | 'bookOpen'
  | 'circleDot'
  | 'clock3'
  | 'fileText'
  | 'layers3'
  | 'shieldCheck'
  | 'trendingUp'
  | 'users'
  | 'zap'

export type Tone = 'blue' | 'purple' | 'green' | 'amber'

export type NavigationItem = {
  href: string
  label: string
}

export type PlanOfDayItem = {
  index: string
  label: string
  tag: string
  done: boolean
}

export type BenefitItem = {
  icon: IconName
  tone: Tone
  title: string
  description: string
}

export type ObjectionItem = {
  question: string
  answer: string
}

export type FaqItem = {
  question: string
  answer: string
  open?: boolean
}

export type FooterColumn = {
  title: string
  links: Array<{
    href: string
    label: string
    external?: boolean
  }>
}

export type SolutionPlanRow = {
  avatar: string
  tone: Tone
  title: string
  subtitle: string
  value: string
  delta?: string
}

export type SolutionFeatureCard = {
  icon: IconName
  tone: Tone
  title: string
  description: string
}
