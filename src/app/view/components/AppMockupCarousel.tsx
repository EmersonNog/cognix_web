export type AppMockupCarouselItem = {
  alt: string
  label: string
  src: string
}

type AppMockupCarouselProps = {
  animationClassName: string
  items: AppMockupCarouselItem[]
}

export function AppMockupCarousel({
  animationClassName,
  items,
}: AppMockupCarouselProps) {
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max items-end gap-6 ${animationClassName}`}>
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex === 1}
            className="flex shrink-0 items-end gap-6"
          >
            {items.map((mockup) => (
              <figure
                key={`${copyIndex}-${mockup.label}`}
                className="relative w-[340px] shrink-0 overflow-hidden rounded-[28px] shadow-[0_28px_80px_-34px_rgba(0,0,0,0.82)] max-[720px]:w-[280px]"
              >
                <img
                  src={mockup.src}
                  alt={mockup.alt}
                  loading="lazy"
                  className="relative z-[1] w-full rounded-[28px]"
                />
                <figcaption className="absolute bottom-5 left-5 z-[2] rounded-[999px] border border-[rgba(255,255,255,0.08)] bg-[#0b0914]/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--ink-2)] backdrop-blur-[8px]">
                  {mockup.label}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
