import { trustItems } from '@/app/model/landing-hero'
import { containerClass } from '@/app/view/viewTokens'

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--border)] bg-[var(--bg)] py-7">
      <div
        data-reveal
        className={`${containerClass} reveal flex flex-wrap items-center justify-between gap-8`}
      >
        <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-[var(--slate-2)]">
          Preparado para
        </span>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
          {trustItems.map((item) => (
            <span
              key={item}
              className="font-[var(--font-display)] text-[16px] font-bold tracking-[-0.01em] text-[var(--ink-2)] opacity-[0.85]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
