import { Check } from 'lucide-react'

import { heroMetaItems } from '@/app/model/landing-hero'

export function HeroMetaList() {
  return (
    <div className="flex flex-wrap items-center gap-[16px] text-[14px] text-[var(--slate-2)]">
      {heroMetaItems.map((item) => (
        <span key={item} className="inline-flex items-center gap-[6px]">
          <Check className="h-4 w-4 text-[var(--success)]" strokeWidth={2.4} />
          {item}
        </span>
      ))}
    </div>
  )
}
