import { ArrowLeft, Check } from 'lucide-react'

import { GOOGLE_PLAY_URL } from '@/app/model/app-links'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import {
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

type SubscriptionSuccessPanelProps = {
  selectedPlanName: string
}

export function SubscriptionSuccessPanel({
  selectedPlanName,
}: SubscriptionSuccessPanelProps) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <Eyebrow className="mb-6">Assinatura iniciada</Eyebrow>
      <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-[28px] border border-[rgba(115,225,191,0.24)] bg-[var(--success-50)] text-[var(--success)]">
        <Check className="h-10 w-10" strokeWidth={2.4} />
      </div>
      <h1 className="mb-5 font-[var(--font-display)] text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.04em]">
        Seu acesso esta quase pronto.
      </h1>
      <p className="mx-auto mb-8 max-w-[620px] text-[18px] leading-[1.7] text-[var(--slate)]">
        A AbacatePay confirmou o pagamento do {selectedPlanName.toLowerCase()}.
        Agora é só baixar o app e entrar com o email usado na assinatura.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/" className={secondaryButtonClass}>
          <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
          Voltar para a landing
        </a>
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noreferrer"
          className={primaryButtonClass}
        >
          Baixar na Google Play
        </a>
      </div>
    </div>
  )
}
