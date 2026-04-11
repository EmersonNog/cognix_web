import { ChevronDown } from 'lucide-react'

export function MobileScrollHint() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center sm:hidden">
      <div className="flex animate-bounce flex-col items-center text-[#27a7ff] drop-shadow-[0_0_12px_rgba(39,167,255,0.55)]">
        <ChevronDown className="h-6 w-6 opacity-45" strokeWidth={2.1} />
        <ChevronDown className="-mt-4 h-6 w-6 opacity-65" strokeWidth={2.1} />
        <ChevronDown className="-mt-4 h-6 w-6 opacity-90" strokeWidth={2.1} />
      </div>
    </div>
  )
}
