import type { LegalPage } from '@/app/model/legal-pages'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { FooterSection } from '@/app/view/sections/FooterSection'
import { HeaderSection } from '@/app/view/sections/HeaderSection'
import { containerClass, secondaryButtonClass } from '@/app/view/viewTokens'

type LegalPageViewProps = {
  isScrolled: boolean
  page: LegalPage
}

export function LegalPageView({ isScrolled, page }: LegalPageViewProps) {
  return (
    <div className="min-h-dvh bg-[var(--surface)] text-[var(--ink)]">
      <HeaderSection isScrolled={isScrolled} />

      <main>
        <section className="bg-[radial-gradient(60%_44%_at_82%_10%,rgba(216,173,77,0.12),transparent_62%),linear-gradient(180deg,#0d0717_0%,#12091f_100%)] pb-10 pt-[88px] max-[720px]:pb-8 max-[720px]:pt-[64px]">
          <div className={containerClass}>
            <div className="mx-auto max-w-[860px]">
              <Eyebrow className="mb-5">{page.eyebrow}</Eyebrow>

              <h1 className="mb-5 font-[var(--font-display)] text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
                {page.title}
              </h1>

              <p className="max-w-[720px] text-[18px] leading-[1.7] text-[var(--slate)]">
                {page.description}
              </p>

              <a href="/" className={`${secondaryButtonClass} mt-8`}>
                Voltar
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] pb-[104px] pt-16 max-[720px]:pb-[72px] max-[720px]:pt-10">
          <div className={containerClass}>
            <div className="mx-auto max-w-[860px] rounded-[28px] border border-[var(--border)] bg-[var(--surface-card)] p-10 shadow-[var(--shadow-md)] max-[720px]:p-6">
              {page.sections.map((section) => (
                <article
                  key={section.title}
                  className="border-b border-[var(--border)] py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <h2 className="mb-4 font-[var(--font-display)] text-[24px] font-bold tracking-[-0.02em] text-[var(--ink)]">
                    {section.title}
                  </h2>

                  <div className="space-y-4 text-[16px] leading-[1.8] text-[var(--slate)]">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-5 flex list-disc flex-col gap-3 pl-6 text-[16px] leading-[1.7] text-[var(--slate)]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
