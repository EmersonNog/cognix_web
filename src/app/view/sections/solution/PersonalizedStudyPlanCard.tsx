import clsx from 'clsx'

import { LandingIcon } from '@/app/view/components/LandingIcon'
import { ToneIcon } from '@/app/view/components/LandingPrimitives'
import { solutionCardClass } from '@/app/view/sections/solution/solutionSectionTokens'

export function PersonalizedStudyPlanCard() {
  return (
    <article data-reveal className={clsx(solutionCardClass, 'col-span-5')}>
      <ToneIcon tone="green" className="mb-5 h-[52px] w-[52px]">
        <LandingIcon
          name="zap"
          className="h-[26px] w-[26px]"
          strokeWidth={2}
        />
      </ToneIcon>
      <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
        Plano de estudos personalizado
      </h3>
      <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
        Seu plano se adapta conforme você evolui — sem precisar montar tudo do
        zero. Foco no que realmente importa.
      </p>
    </article>
  )
}
