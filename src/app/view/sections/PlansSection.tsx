import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { AnnualPlanCard } from '@/app/view/sections/plans/AnnualPlanCard'
import { MonthlyPlanCard } from '@/app/view/sections/plans/MonthlyPlanCard'
import { containerClass } from '@/app/view/viewTokens'

export function PlansSection() {
  return (
    <section
      id="planos"
      className="bg-transparent py-[104px] max-[720px]:py-[72px]"
    >
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow className="mb-[18px]">Escolha seu plano</Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            Comece hoje com o plano ideal
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Acesso completo a todos os recursos em ambos os planos. Cancele
            quando quiser.
          </p>
        </div>

        <div
          data-reveal
          className="reveal mx-auto grid max-w-[960px] auto-rows-fr grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch gap-6 max-[780px]:grid-cols-1"
        >
          <MonthlyPlanCard />
          <AnnualPlanCard />
        </div>
      </div>
    </section>
  )
}
