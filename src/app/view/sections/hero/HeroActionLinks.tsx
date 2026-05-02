import { ArrowRight } from 'lucide-react'

import {
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

export function HeroActionLinks() {
  return (
    <div className="mb-[22px] flex flex-wrap items-center gap-3">
      <a href="#planos" className={primaryButtonClass}>
        Começar meus estudos
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]"
          strokeWidth={2.4}
        />
      </a>
      <a href="#solucao" className={secondaryButtonClass}>
        Ver recursos do app
      </a>
    </div>
  )
}
