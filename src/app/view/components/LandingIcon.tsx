import {
  BarChart3,
  BookOpen,
  CircleDot,
  Clock3,
  FileText,
  Layers3,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

import type { IconName } from '@/app/model/landing-types'

const iconMap = {
  barChart3: BarChart3,
  bookOpen: BookOpen,
  circleDot: CircleDot,
  clock3: Clock3,
  fileText: FileText,
  layers3: Layers3,
  shieldCheck: ShieldCheck,
  trendingUp: TrendingUp,
  users: Users,
  zap: Zap,
} as const

type LandingIconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export function LandingIcon({
  name,
  className,
  strokeWidth = 2,
}: LandingIconProps) {
  const Icon = iconMap[name]

  return <Icon className={className} strokeWidth={strokeWidth} />
}
