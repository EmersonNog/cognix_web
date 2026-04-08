import { ChevronDown } from 'lucide-react'

export function ScrollIndicator({ visible }: { visible: boolean }) {
  return (
    <div className="pointer-events-none flex w-20 flex-col items-center gap-2 text-center">
      <span className="relative -left-[-0.5em] pr-[0.42em] text-center text-[10px] font-semibold uppercase tracking-[0.42em] text-white/76 [text-shadow:0_6px_18px_rgba(2,7,20,0.45)] sm:text-[11px]">
        {visible ? 'Scroll' : ''}
      </span>

      <span className="relative flex h-12 w-8 items-start justify-center">
        {['0s', '0.18s', '0.36s'].map((delay, index) => (
          <span
            key={index}
            className="absolute top-0 left-1/2 -translate-x-1/2"
          >
            <ChevronDown
              className="h-5 w-5 animate-[cognix-scroll-chevron_1.8s_ease-in-out_infinite] text-[#A3A6FF] opacity-0 drop-shadow-[0_0_12px_rgba(163,166,255,0.55)]"
              style={{ animationDelay: delay }}
            />
          </span>
        ))}
      </span>
    </div>
  )
}
