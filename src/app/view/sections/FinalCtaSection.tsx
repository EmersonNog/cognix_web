import { ArrowRight } from 'lucide-react'

import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import {
  containerClass,
  contentSectionTopClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

const eyebrowText = 'Condi\u00e7\u00e3o especial de lan\u00e7amento'
const desktopTitleLineOne = 'Estudar sem dire\u00e7\u00e3o pode custar caro.'
const desktopTitleLineTwo = 'Comece a evoluir com estrat\u00e9gia.'
const mobileTitle = 'Evolua com estrat\u00e9gia.'
const desktopDescription =
  'Pratique quest\u00f5es, fa\u00e7a simulados, revise com flashcards, treine reda\u00e7\u00e3o, acompanhe seus indicadores e siga um plano de estudos personalizado - tudo em um s\u00f3 app.'
const mobileDescription =
  'Quest\u00f5es, simulados e plano personalizado em um s\u00f3 app.'
const desktopCtaLabel = 'Come\u00e7ar agora por R$ 19,90'
const mobileCtaLabel = 'Come\u00e7ar por R$ 19,90'
const desktopCouponText =
  'Cupom COGNIX10 liberado para o primeiro m\u00eas - cole no checkout'
const mobileCouponText = 'Cupom COGNIX10 no 1\u00ba m\u00eas'

export function FinalCtaSection() {
  return (
    <section
      className={`bg-transparent pb-[120px] ${contentSectionTopClass} max-[720px]:pb-[72px]`}
    >
      <div className={containerClass}>
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[radial-gradient(120%_140%_at_100%_0%,rgba(216,173,77,0.22),transparent_56%),radial-gradient(90%_120%_at_0%_100%,rgba(155,116,223,0.24),transparent_60%),linear-gradient(135deg,#241537_0%,#100819_100%)] px-[72px] py-[72px] text-center text-white shadow-[var(--shadow-lg)] max-[780px]:rounded-[24px] max-[780px]:px-5 max-[780px]:py-12 max-[420px]:px-4 max-[420px]:py-10"
        >
          <div className="relative z-[2]">
            <Eyebrow
              className="!border-[rgba(216,173,77,0.26)] !bg-[var(--primary-50)] !text-[var(--primary)] max-[420px]:px-2.5 max-[420px]:text-[11px] max-[420px]:tracking-[0.05em]"
              dotClassName="!bg-[var(--primary)] !shadow-[0_0_0_4px_rgba(216,173,77,0.18)]"
            >
              {eyebrowText}
            </Eyebrow>

            <h2 className="mx-auto mb-[14px] mt-[18px] max-w-[780px] font-[var(--font-display)] text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.1] text-white max-[720px]:max-w-none max-[720px]:text-[28px] max-[420px]:text-[24px]">
              <span className="max-[720px]:hidden">
                {desktopTitleLineOne}
                <br />
                {desktopTitleLineTwo}
              </span>
              <span className="hidden max-[720px]:block">{mobileTitle}</span>
            </h2>

            <p className="mx-auto mb-8 max-w-[620px] text-[18px] leading-[1.6] text-white/[0.78] max-[720px]:mb-6 max-[720px]:max-w-none max-[720px]:text-[15px] max-[420px]:text-[14px]">
              <span className="max-[720px]:hidden">{desktopDescription}</span>
              <span className="hidden max-[720px]:inline">
                {mobileDescription}
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-[420px]:gap-2.5">
              <a
                href="/assinatura?plano=mensal"
                className={`${primaryButtonClass} max-[420px]:px-[18px] max-[420px]:text-[15px]`}
              >
                <span className="max-[720px]:hidden">{desktopCtaLabel}</span>
                <span className="hidden max-[720px]:inline">
                  {mobileCtaLabel}
                </span>
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </a>
              <a
                href="#planos"
                className={`${secondaryButtonClass} max-[420px]:px-[18px] max-[420px]:text-[15px]`}
              >
                Ver planos
              </a>
            </div>

            <div className="mt-[22px] text-[14px] text-white/[0.55] max-[720px]:text-[13px] max-[420px]:text-[12px]">
              <span className="max-[720px]:hidden">{desktopCouponText}</span>
              <span className="hidden max-[720px]:inline">
                {mobileCouponText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
