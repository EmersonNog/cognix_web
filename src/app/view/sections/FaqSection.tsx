import { useState } from 'react'

import { faqs } from '@/app/model/landing-faq'
import {
  Eyebrow,
  FaqItem,
} from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <section
      id="faq"
      className="bg-transparent pb-10 pt-[104px] max-[720px]:pb-8 max-[720px]:pt-[72px]"
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
              open={openQuestion === item.question}
              onOpenChange={(isOpen) => {
                setOpenQuestion((currentQuestion) => {
                  if (isOpen) {
                    return item.question
                  }

                  return currentQuestion === item.question ? null : currentQuestion
                })
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
