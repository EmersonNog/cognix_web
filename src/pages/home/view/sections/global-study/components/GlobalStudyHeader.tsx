type GlobalStudyHeaderProps = {
  description: string
  eyebrow: string
  onPrimaryCta: () => void
  onSecondaryCta: () => void
  primaryCta: string
  secondaryCta: string
  title: string
}

export function GlobalStudyHeader({
  description,
  eyebrow,
  onPrimaryCta,
  onSecondaryCta,
  primaryCta,
  secondaryCta,
  title,
}: GlobalStudyHeaderProps) {
  return (
    <>
      <span className="text-[0.7rem] font-medium tracking-[0.24em] uppercase text-[#6f7d74] sm:text-sm">
        {eyebrow}
      </span>

      <h2 className="max-w-[14ch] text-[clamp(2.1rem,8vw,3.2rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#082018]">
        {title}
      </h2>

      <p className="max-w-[38rem] text-sm leading-6 text-[#4f6359] sm:text-base sm:leading-7 lg:text-[1rem]">
        {description}
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onPrimaryCta}
          className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-[#0b3028] px-5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(11,48,40,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#13483d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36c2a3]"
        >
          {primaryCta}
        </button>

        <button
          type="button"
          onClick={onSecondaryCta}
          className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-[#b9dccc] bg-white/84 px-5 text-sm font-semibold text-[#12483b] shadow-[0_14px_34px_rgba(20,86,69,0.09)] transition duration-200 hover:-translate-y-0.5 hover:border-[#87cfbb] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#72a8ff]"
        >
          {secondaryCta}
        </button>
      </div>
    </>
  )
}
