import clsx from 'clsx'

import { LandingIcon } from '@/app/view/components/LandingIcon'
import { ToneIcon } from '@/app/view/components/LandingPrimitives'
import { solutionCardClass } from '@/app/view/sections/solution/solutionSectionTokens'

export function EssayFeedbackCard() {
  return (
    <article data-reveal className={clsx(solutionCardClass, 'col-span-5')}>
      <ToneIcon tone="purple" className="mb-5 h-[52px] w-[52px]">
        <LandingIcon
          name="fileText"
          className="h-[26px] w-[26px]"
          strokeWidth={2}
        />
      </ToneIcon>
      <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
        Redação guiada por IA
      </h3>
      <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
        Escreva, receba feedback direcionado e evolua tema a tema. Sem ficar
        esperando correção manual por dias.
      </p>
      <div className="mt-[22px] rounded-[16px] border border-[var(--border)] bg-white/[0.04] p-3">
        <div className="mb-[6px] text-[12px] font-medium text-[var(--slate)]">
          Tema da semana
        </div>
        <div className="mb-[10px] font-[var(--font-display)] text-[14px] font-bold text-[var(--ink)]">
          Desafios da mobilidade urbana no Brasil
        </div>
        <div className="flex flex-wrap gap-[6px]">
          <span className="rounded-[999px] bg-[var(--success-50)] px-[10px] py-1 text-[11px] font-semibold text-[var(--success)]">
            C1 · 160
          </span>
          <span className="rounded-[999px] bg-[var(--success-50)] px-[10px] py-1 text-[11px] font-semibold text-[var(--success)]">
            C2 · 200
          </span>
          <span className="rounded-[999px] bg-[var(--amber-50)] px-[10px] py-1 text-[11px] font-semibold text-[var(--amber)]">
            C3 · 140
          </span>
        </div>
      </div>
    </article>
  )
}
