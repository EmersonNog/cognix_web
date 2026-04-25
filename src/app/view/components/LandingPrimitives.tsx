import clsx from 'clsx'
import { Check, type LucideIcon } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'

import type { Tone } from '@/app/model/landing-types'
import { LandingIcon } from '@/app/view/components/LandingIcon'

type EyebrowProps = {
  children: ReactNode
  className?: string
  dotClassName?: string
}

type FloatCardProps = {
  title: string
  subtitle: string
  icon: ReactNode
  className?: string
  style?: CSSProperties
}

type ToneIconProps = {
  tone: Tone
  children: ReactNode
  className?: string
}

type BenefitCardProps = {
  title: string
  description: string
  icon: Parameters<typeof LandingIcon>[0]['name']
  tone: Tone
}

type FaqItemProps = {
  question: string
  answer: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

type PlusIconProps = {
  className?: string
}

type BenefitIconProps = {
  icon: LucideIcon
  strokeWidth?: number
  className?: string
}

export function Eyebrow({ children, className, dotClassName }: EyebrowProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-[999px] border border-[color:color-mix(in_oklab,var(--primary)_28%,transparent)] bg-[var(--primary-50)] px-3 py-1.5 font-[var(--font-body)] text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary)]',
        className,
      )}
    >
      <span
        className={clsx(
          'h-[6px] w-[6px] rounded-full bg-[var(--primary)] shadow-[0_0_0_4px_rgba(216,173,77,0.16)]',
          dotClassName,
        )}
      />
      {children}
    </span>
  )
}

export function FloatCard({
  title,
  subtitle,
  icon,
  className,
  style,
}: FloatCardProps) {
  return (
    <div
      className={clsx(
        'absolute z-[3] flex min-w-[180px] items-center gap-[10px] rounded-[14px] border border-[var(--border)] bg-[var(--surface-card)]/95 px-[14px] py-3 shadow-[var(--shadow-md)] backdrop-blur-[10px]',
        className,
      )}
      style={style}
    >
      {icon}
      <div>
        <div className="font-[var(--font-display)] text-[14px] font-bold leading-[1.1] text-[var(--ink)]">
          {title}
        </div>
        <div className="mt-0.5 text-[12px] text-[var(--slate-2)]">
          {subtitle}
        </div>
      </div>
    </div>
  )
}

export function ToneIcon({ tone, children, className }: ToneIconProps) {
  const toneClass = {
    blue: 'bg-[var(--primary-50)] text-[var(--primary)]',
    purple: 'bg-[var(--secondary-50)] text-[var(--secondary)]',
    green: 'bg-[var(--success-50)] text-[var(--success)]',
    amber: 'bg-[var(--amber-50)] text-[var(--amber)]',
  }[tone]

  return (
    <div className={clsx('grid place-items-center rounded-[14px]', toneClass, className)}>
      {children}
    </div>
  )
}

export function BenefitCard({
  title,
  description,
  icon,
  tone,
}: BenefitCardProps) {
  return (
    <article
      data-reveal
      className="reveal flex flex-col gap-3 rounded-[20px] border border-[var(--border)] bg-[var(--surface-card)] px-[26px] py-[26px] shadow-[var(--shadow-sm)] transition-[transform,border-color,background] duration-200 hover:-translate-y-[2px] hover:border-[rgba(216,173,77,0.34)] hover:bg-[var(--surface-card-2)]"
    >
      <ToneIcon tone={tone} className="h-11 w-11 rounded-[12px]">
        <LandingIcon name={icon} className="h-[22px] w-[22px]" strokeWidth={2} />
      </ToneIcon>
      <h4 className="font-[var(--font-display)] text-[17px] font-bold tracking-[-0.01em] text-[var(--ink)]">
        {title}
      </h4>
      <p className="text-[14.5px] leading-[1.6] text-[var(--slate)]">
        {description}
      </p>
    </article>
  )
}

export function FaqItem({
  question,
  answer,
  open = false,
  onOpenChange,
}: FaqItemProps) {
  return (
    <details
      data-reveal
      open={open}
      onToggle={(event) => onOpenChange?.(event.currentTarget.open)}
      className="reveal group mb-3 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface-card)] transition-[border-color,box-shadow,background] duration-200 open:border-[rgba(216,173,77,0.36)] open:bg-[var(--surface-card-2)] open:shadow-[var(--shadow-sm)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-[22px] font-[var(--font-display)] text-[17px] font-semibold tracking-[-0.01em] text-[var(--ink)] [&::-webkit-details-marker]:hidden">
        {question}
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--bg-muted)] text-[var(--primary)] transition-[transform,background,color] duration-200 group-open:rotate-45 group-open:bg-[var(--primary)] group-open:text-[#100816]">
          <PlusIcon className="h-[14px] w-[14px]" />
        </span>
      </summary>
      <div className="px-6 pb-[22px] text-[15.5px] leading-[1.6] text-[var(--slate)]">
        {answer}
      </div>
    </details>
  )
}

export function CheckBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[999px] border border-[var(--border)] bg-white/[0.04] px-[14px] py-2 text-[13px] font-medium text-[var(--ink-2)]">
      <Check className="h-[14px] w-[14px] text-[var(--primary)]" strokeWidth={2.4} />
      {children}
    </span>
  )
}

export function PlusIcon({ className }: PlusIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function RenderIcon({
  icon,
  strokeWidth = 2,
  className,
}: BenefitIconProps) {
  const Icon = icon

  return <Icon className={className} strokeWidth={strokeWidth} />
}
