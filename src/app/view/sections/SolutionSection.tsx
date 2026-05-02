import { solutionFeatureCards } from '@/app/model/landing-solution'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { DashboardInsightCard } from '@/app/view/sections/solution/DashboardInsightCard'
import { EssayFeedbackCard } from '@/app/view/sections/solution/EssayFeedbackCard'
import { MultiplayerStudyCard } from '@/app/view/sections/solution/MultiplayerStudyCard'
import { PersonalizedStudyPlanCard } from '@/app/view/sections/solution/PersonalizedStudyPlanCard'
import { PlanPreviewCard } from '@/app/view/sections/solution/PlanPreviewCard'
import { SolutionFeatureCard } from '@/app/view/sections/solution/SolutionFeatureCard'
import { containerClass } from '@/app/view/viewTokens'

export function SolutionSection() {
  return (
    <section
      id="solucao"
      className="relative z-[1] bg-transparent pb-[104px] pt-[144px] max-[720px]:pb-[72px] max-[720px]:pt-[108px]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-88px] h-44 bg-[radial-gradient(56%_100%_at_50%_0%,rgba(155,116,223,0.18),rgba(21,13,32,0.04)_44%,transparent_78%)] blur-[24px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(20,12,31,0.06)_0%,rgba(20,12,31,0)_100%)]" />
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow className="mb-[18px]">A solução</Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            O Cognix organiza seus estudos e <br />mostra onde você precisa
            evoluir.
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Em vez de apenas estudar mais, você passa a estudar com mais
            estratégia — combinando prática, revisão, análise de desempenho e
            personalização em uma única experiência.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <PlanPreviewCard />
          <DashboardInsightCard />
          <EssayFeedbackCard />
          {solutionFeatureCards.map((card) => (
            <SolutionFeatureCard key={card.title} card={card} />
          ))}
          <MultiplayerStudyCard />
          <PersonalizedStudyPlanCard />
        </div>
      </div>
    </section>
  )
}
