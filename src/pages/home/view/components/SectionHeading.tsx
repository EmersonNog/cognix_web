interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <span className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[3.35rem] lg:leading-[0.96]">
          <span className="display-font block">{title}</span>
        </h2>
        <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">{description}</p>
      </div>
    </div>
  )
}
