import { benefitItems } from '@/app/model/landing-benefits'
import {
  BenefitCard,
  Eyebrow,
} from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="bg-[var(--bg)] py-[104px] max-[720px]:py-[72px]"
    >
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow
            className="mb-[18px] border-[color:color-mix(in_oklab,var(--secondary)_14%,transparent)] bg-[var(--secondary-50)] text-[var(--secondary)]"
            dotClassName="bg-[var(--secondary)] shadow-[0_0_0_4px_rgba(155,116,223,0.16)]"
          >
            Benefícios
          </Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            O que muda na sua rotina de estudos
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Cada funcionalidade foi pensada como uma transformação concreta — não
            uma lista de recursos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {benefitItems.map((item) => (
            <BenefitCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              tone={item.tone}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
