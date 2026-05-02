import type { SolutionPlanRow } from '@/app/model/landing-types'

export const solutionCardClass =
  'reveal rounded-[28px] border border-[var(--border)] bg-[var(--surface-card)] p-8 shadow-[var(--shadow-sm)] transition-[transform,box-shadow,border-color,background] duration-200 hover:-translate-y-[3px] hover:border-[rgba(216,173,77,0.34)] hover:bg-[var(--surface-card-2)] hover:shadow-[var(--shadow-md)] max-[980px]:col-span-12'

export const avatarClassByTone: Record<SolutionPlanRow['tone'], string> = {
  amber: 'bg-[var(--amber)]',
  blue: 'bg-[var(--primary)]',
  green: 'bg-[var(--success)]',
  purple: 'bg-[var(--secondary)]',
}

export const dashboardProgressRows = [
  { label: 'Matemática', value: 74, tone: 'default' },
  { label: 'Redação', value: 68, tone: 'default' },
  { label: 'História', value: 52, tone: 'warning' },
] as const
