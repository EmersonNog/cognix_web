import { trustItems } from '@/app/model/landing-hero'
import { containerClass } from '@/app/view/viewTokens'

export function TrustStrip() {
  const duplicatedTrustItems = [...trustItems, ...trustItems]

  return (
    <div className="border-y border-[var(--border)] bg-white/[0.02] py-7 backdrop-blur-[6px]">
      <div
        data-reveal
        className={`${containerClass} reveal flex items-center justify-between gap-8 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-4`}
      >
        <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-[var(--slate-2)]">
          Preparado para
        </span>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-5 max-[720px]:hidden">
          {trustItems.map((item) => (
            <span
              key={item}
              className="font-[var(--font-display)] text-[16px] font-bold tracking-[-0.01em] text-[var(--ink-2)] opacity-[0.85]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="hidden w-full max-[720px]:block">
          <div className="trust-strip-marquee-mask overflow-hidden">
            <div className="trust-strip-marquee-track flex w-max items-center gap-7 pr-7">
              {duplicatedTrustItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  aria-hidden={index >= trustItems.length}
                  className="shrink-0 font-[var(--font-display)] text-[16px] font-bold tracking-[-0.01em] text-[var(--ink-2)] opacity-[0.85]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
