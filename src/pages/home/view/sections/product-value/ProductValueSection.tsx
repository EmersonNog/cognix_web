import { forwardRef, type CSSProperties } from 'react'

import { FocusCards } from '@/components/ui/focus-cards'
import { SectionPattern } from '@/components/ui/section-pattern'
import type { HomeProductValueSectionModel } from '@/pages/home/model/home-page.model'

import { FeatureCard } from './FeatureCard'

type ProductValueSectionProps = {
  accentStyle: CSSProperties
  contentStyle: CSSProperties
  section: HomeProductValueSectionModel
}

export const ProductValueSection = forwardRef<HTMLElement, ProductValueSectionProps>(
  function ProductValueSection({ accentStyle, contentStyle, section }, ref) {
  const focusCards = section.cards.map((card) => ({
    className: card.spanClassName,
    content: <FeatureCard card={card} />,
    key: card.title,
  }))

  return (
    <section
      ref={ref}
      className="relative z-10 flex min-h-[100svh] items-start overflow-hidden bg-white px-5 pb-16 pt-16 text-[#060E20] sm:px-8 sm:pb-20 sm:pt-20 lg:h-[100svh] lg:min-h-0 lg:items-center lg:px-16 lg:pb-16 lg:pt-16"
    >
      <SectionPattern variant="light" className="opacity-70" />
      <div
        className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(61,246,255,0.18)_0%,rgba(255,255,255,0)_100%)] sm:h-24"
        style={accentStyle}
      />

      <div
        className="relative mx-auto w-full max-w-7xl py-6 sm:py-8 lg:py-0"
        style={contentStyle}
      >
        <div className="lg:grid lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] xl:gap-10">
          <div className="mb-8 max-w-3xl space-y-4 sm:mb-10 lg:mb-0 lg:max-w-[24rem] xl:max-w-[26rem]">
            <span className="text-[0.7rem] font-medium tracking-[0.24em] uppercase text-[#7A6D5A] sm:text-sm">
              {section.eyebrow}
            </span>
            <h2 className="max-w-[14ch] text-[clamp(2.1rem,8vw,3.2rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              {section.title}
            </h2>
            <p className="max-w-[38rem] text-sm leading-6 text-[#4E5A6E] sm:text-base sm:leading-7 lg:text-[1rem]">
              {section.description}
            </p>
          </div>

          <FocusCards
            cards={focusCards}
            className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-6"
          />
        </div>
      </div>
    </section>
  )
  },
)
