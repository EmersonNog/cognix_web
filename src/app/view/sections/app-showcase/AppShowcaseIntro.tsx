import { GOOGLE_PLAY_URL } from '@/app/model/app-links'
import { StoreBadge } from '@/app/view/components/StoreBadge'
import { containerClass } from '@/app/view/viewTokens'

type AppShowcaseIntroProps = {
  onAppleStoreClick: () => void
}

export function AppShowcaseIntro({
  onAppleStoreClick,
}: AppShowcaseIntroProps) {
  return (
    <div className={`${containerClass} mb-16`}>
      <div className="max-w-[980px] text-left">
        <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f39a21]">
          Disponivel nas lojas oficiais
        </span>
        <h2 className="mb-6 max-w-[980px] font-[var(--font-display)] text-[clamp(34px,4.8vw,64px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[var(--ink)]">
          Sua aprovação com{' '}
          <span className="inline-block px-[0.03em] pb-[0.1em] pr-[0.14em] pt-[0.05em] bg-[linear-gradient(90deg,#f6c768_0%,#f39a21_100%)] bg-clip-text italic leading-[1.02] text-transparent">
            Cognix
          </span>{' '}
          começa hoje
        </h2>
        <p className="max-w-[420px] text-[16px] leading-[1.6] text-[var(--slate)] max-[720px]:text-[15px]">
          Estude em qualquer lugar com seu plano, revisões e foco sempre
          sincronizados.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-start gap-4">
          <StoreBadge
            ariaLabel="Abrir informações sobre o lançamento do app Cognix na App Store"
            variant="app-store"
            onClick={onAppleStoreClick}
          />

          <StoreBadge
            ariaLabel="Baixar o app Cognix na Google Play"
            href={GOOGLE_PLAY_URL}
            variant="google-play"
          />
        </div>
      </div>
    </div>
  )
}
