import { LockKeyhole, Star, TrendingUp } from 'lucide-react'

import { HeroPhoneMockup } from '@/app/view/components/HeroPhoneMockup'
import {
  FloatCard,
  ToneIcon,
} from '@/app/view/components/LandingPrimitives'

export function HeroVisual() {
  return (
    <div className="relative flex min-h-[560px] w-full items-center justify-center px-8 max-[980px]:mx-auto max-[980px]:mt-3 max-[980px]:min-h-[580px] max-[980px]:max-w-[520px] max-[980px]:px-6">
      <div className="pointer-events-none absolute inset-[-10%_-15%] z-0 animate-[pulseGlow_6s_ease-in-out_infinite] bg-[radial-gradient(closest-side,rgba(216,173,77,0.2),rgba(81,45,121,0.26)_42%,transparent_72%)] blur-[2px]" />

      <FloatCard
        title="Matemática +12%"
        subtitle="Últimos 7 dias"
        className="left-2 top-10 max-[980px]:left-0"
        style={{ animation: 'floatY 8s ease-in-out infinite' }}
        icon={
          <ToneIcon tone="green" className="h-9 w-9 rounded-[10px]">
            <TrendingUp className="h-[18px] w-[18px]" strokeWidth={2.2} />
          </ToneIcon>
        }
      />
      <FloatCard
        title="Redação guiada"
        subtitle="Correção por IA"
        className="bottom-[120px] right-2 max-[980px]:right-0"
        style={{ animation: 'floatY 9s ease-in-out infinite -2s' }}
        icon={
          <ToneIcon tone="purple" className="h-9 w-9 rounded-[10px]">
            <Star className="h-[18px] w-[18px]" strokeWidth={2.2} />
          </ToneIcon>
        }
      />
      <FloatCard
        title="Plano atualizado"
        subtitle="Revisar funções"
        className="bottom-[30px] left-4 max-[980px]:left-2"
        style={{ animation: 'floatY 7s ease-in-out infinite -4s' }}
        icon={
          <ToneIcon tone="blue" className="h-9 w-9 rounded-[10px]">
            <LockKeyhole className="h-[18px] w-[18px]" strokeWidth={2.2} />
          </ToneIcon>
        }
      />

      <HeroPhoneMockup className="relative z-[2] w-full max-w-[320px] [transform-origin:center_center] animate-[floatTilt3d_9s_ease-in-out_infinite]" />
    </div>
  )
}
