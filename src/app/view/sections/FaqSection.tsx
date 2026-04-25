import { faqs } from '@/app/model/landing-faq'
import {
  Eyebrow,
  FaqItem,
} from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

export function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-[var(--surface)] py-[104px] max-[720px]:py-[72px]"
    >
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow className="mb-[18px]">FAQ</Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            Perguntas frequentes
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Ainda com dúvida? Abaixo as respostas mais rápidas.
          </p>
        </div>

        <div className="mx-auto max-w-[820px]">
          {faqs.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={item.open}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
