import clsx from 'clsx'
import { Users } from 'lucide-react'

import { ToneIcon } from '@/app/view/components/LandingPrimitives'
import { solutionCardClass } from '@/app/view/sections/solution/solutionSectionTokens'

export function MultiplayerStudyCard() {
  return (
    <article data-reveal className={clsx(solutionCardClass, 'col-span-5')}>
      <ToneIcon tone="purple" className="mb-5 h-[52px] w-[52px]">
        <Users className="h-[26px] w-[26px]" strokeWidth={2} />
      </ToneIcon>
      <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
        Partidas multiplayer
      </h3>
      <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
        Estude de forma dinâmica e competitiva: dispute rodadas de questões em
        tempo real com outros alunos.
      </p>
      <div className="mt-[22px] rounded-[16px] border border-[var(--border)] bg-[var(--bg)] p-3">
        <div className="mb-2 flex items-center gap-[10px]">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--primary)] font-[var(--font-display)] text-[12px] font-bold text-white">
            MR
          </div>
          <div className="flex-1 text-[13px] font-semibold text-[var(--ink)]">
            Você
          </div>
          <div className="font-[var(--font-display)] font-bold text-[var(--ink)]">
            8/10
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--secondary)] font-[var(--font-display)] text-[12px] font-bold text-white">
            JP
          </div>
          <div className="flex-1 text-[13px] font-semibold text-[var(--ink)]">
            João P.
          </div>
          <div className="font-[var(--font-display)] font-bold text-[var(--slate)]">
            7/10
          </div>
        </div>
      </div>
    </article>
  )
}
