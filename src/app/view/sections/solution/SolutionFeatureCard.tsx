import clsx from 'clsx'

import type { SolutionFeatureCard as SolutionFeatureCardData } from '@/app/model/landing-types'
import { LandingIcon } from '@/app/view/components/LandingIcon'
import { ToneIcon } from '@/app/view/components/LandingPrimitives'
import { solutionCardClass } from '@/app/view/sections/solution/solutionSectionTokens'

export function SolutionFeatureCard({
  card,
}: {
  card: SolutionFeatureCardData
}) {
  return (
    <article data-reveal className={clsx(solutionCardClass, 'col-span-4')}>
      <ToneIcon tone={card.tone} className="mb-5 h-[52px] w-[52px]">
        <LandingIcon
          name={card.icon}
          className="h-[26px] w-[26px]"
          strokeWidth={2}
        />
      </ToneIcon>
      <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
        {card.title}
      </h3>
      <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
        {card.description}
      </p>
    </article>
  )
}
