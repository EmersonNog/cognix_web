import clsx from 'clsx'

import { solutionPlanRows } from '@/app/model/landing-solution'
import type { SolutionPlanRow } from '@/app/model/landing-types'
import { LandingIcon } from '@/app/view/components/LandingIcon'
import { CheckBadge } from '@/app/view/components/LandingPrimitives'
import { avatarClassByTone } from '@/app/view/sections/solution/solutionSectionTokens'

function PlanPreviewRow({ item }: { item: SolutionPlanRow }) {
  return (
    <div className="flex items-center gap-3 rounded-[12px] bg-[var(--bg)] p-3">
      <div
        className={clsx(
          'grid h-9 w-9 shrink-0 place-items-center rounded-[10px] font-[var(--font-display)] text-[13px] font-bold text-white',
          avatarClassByTone[item.tone],
        )}
      >
        {item.avatar}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-[var(--font-display)] text-[14px] font-bold text-[var(--ink)]">
          {item.title}
        </div>
        <div className="mt-0.5 text-[12px] text-[var(--slate-2)]">
          {item.subtitle}
        </div>
      </div>
      <div className="font-[var(--font-display)] text-[16px] font-bold text-[var(--ink)]">
        {item.value}
        {item.delta ? (
          <small className="ml-1 text-[11px] font-semibold text-[var(--success)]">
            {item.delta}
          </small>
        ) : null}
      </div>
    </div>
  )
}

export function PlanPreviewCard() {
  return (
    <div className="col-span-12 grid overflow-hidden rounded-[28px] border border-[var(--border)] bg-[radial-gradient(120%_140%_at_100%_0%,rgba(216,173,77,0.12),transparent_58%),linear-gradient(135deg,#1d102f_0%,#130a22_100%)] p-12 shadow-[var(--shadow-md)] max-[900px]:grid-cols-1 max-[900px]:p-8 min-[901px]:grid-cols-[1.1fr_1fr] min-[901px]:gap-10">
      <div>
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-[999px] border border-[var(--border)] bg-white/[0.04] px-[10px] py-1.5 text-[12px] font-semibold text-[var(--primary)]">
          <LandingIcon name="zap" className="h-3 w-3" strokeWidth={2.4} />
          Plano personalizado com IA
        </span>
        <h3 className="mb-3 font-[var(--font-display)] text-[clamp(24px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-[var(--ink)]">
          Um plano que se ajusta ao seu desempenho, não ao contrário.
        </h3>
        <p className="mb-5 text-[16px] leading-[1.6] text-[var(--slate)]">
          A IA do Cognix analisa seus resultados em questões e simulados,
          identifica as áreas críticas e atualiza seu plano de estudos para
          focar no que realmente importa.
        </p>
        <div className="flex flex-wrap gap-2">
          <CheckBadge>Detecção de lacunas</CheckBadge>
          <CheckBadge>Revisão espaçada</CheckBadge>
          <CheckBadge>Priorização por peso</CheckBadge>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--surface-card)] p-[22px] shadow-[var(--shadow-sm)]">
        {solutionPlanRows.map((item) => (
          <PlanPreviewRow key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}
