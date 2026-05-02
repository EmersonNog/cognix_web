import clsx from 'clsx'

import { LandingIcon } from '@/app/view/components/LandingIcon'
import { ToneIcon } from '@/app/view/components/LandingPrimitives'
import {
  dashboardProgressRows,
  solutionCardClass,
} from '@/app/view/sections/solution/solutionSectionTokens'

function DashboardProgressRow({
  isLast,
  label,
  tone,
  value,
}: (typeof dashboardProgressRows)[number] & { isLast: boolean }) {
  const progressClassName =
    tone === 'warning'
      ? 'bg-[linear-gradient(90deg,#F59E0B,#F97316)]'
      : 'bg-[linear-gradient(90deg,var(--primary),var(--secondary))]'

  return (
    <div className={clsx(!isLast && 'mb-[14px]')}>
      <div className="mb-1 flex items-center justify-between text-[13px] font-medium text-[var(--slate)]">
        <span>{label}</span>
        <span className="font-[var(--font-display)] font-bold text-[var(--ink)]">
          {value}%
        </span>
      </div>
      <div className="h-[10px] overflow-hidden rounded-[999px] bg-white/[0.08]">
        <div
          className={clsx('h-full rounded-[999px]', progressClassName)}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export function DashboardInsightCard() {
  return (
    <article data-reveal className={clsx(solutionCardClass, 'col-span-7')}>
      <ToneIcon tone="blue" className="mb-5 h-[52px] w-[52px]">
        <LandingIcon
          name="barChart3"
          className="h-[26px] w-[26px]"
          strokeWidth={2}
        />
      </ToneIcon>
      <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
        Dashboard que mostra para onde ir
      </h3>
      <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
        Visualize sua evolução por matéria, veja indicadores claros de acertos
        e tempo, e descubra exatamente quais áreas precisam de mais atenção na
        próxima sessão.
      </p>
      <div className="mt-[22px] rounded-[16px] border border-[var(--border)] bg-[var(--bg)] p-[18px]">
        {dashboardProgressRows.map((row, index) => (
          <DashboardProgressRow
            key={row.label}
            {...row}
            isLast={index === dashboardProgressRows.length - 1}
          />
        ))}
      </div>
    </article>
  )
}
