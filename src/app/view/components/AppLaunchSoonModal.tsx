import { useEffect } from 'react'
import { X } from 'lucide-react'

import { GOOGLE_PLAY_URL } from '@/app/model/app-links'

type AppLaunchSoonModalProps = {
  onClose: () => void
  open: boolean
}

export function AppLaunchSoonModal({ onClose, open }: AppLaunchSoonModalProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05020b]/72 px-6 backdrop-blur-[10px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apple-launch-modal-title"
        className="relative w-full max-w-[460px] rounded-[30px] border border-[rgba(216,173,77,0.18)] bg-[linear-gradient(180deg,rgba(19,12,31,0.98)_0%,rgba(11,7,19,0.98)_100%)] p-7 shadow-[0_32px_90px_-34px_rgba(0,0,0,0.9)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Fechar modal"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/[0.04] text-[var(--slate)] transition-colors duration-150 hover:bg-white/[0.08] hover:text-[var(--ink)]"
        >
          <X className="h-4 w-4" strokeWidth={2.4} />
        </button>

        <span className="mb-4 inline-flex items-center gap-2 rounded-[999px] border border-[rgba(216,173,77,0.2)] bg-[rgba(216,173,77,0.08)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          App iOS
        </span>

        <h3
          id="apple-launch-modal-title"
          className="max-w-[300px] font-[var(--font-display)] text-[32px] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--ink)]"
        >
          Lancamento em breve
        </h3>

        <p className="mt-4 text-[16px] leading-[1.65] text-[var(--slate)]">
          O Cognix para iPhone esta em preparacao final. Assim que a versao da
          App Store for liberada, esse botao vai levar direto para o download.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[48px] items-center justify-center rounded-[999px] bg-[linear-gradient(135deg,#f1bd53_0%,#d79f33_100%)] px-5 text-[15px] font-bold tracking-[-0.01em] text-[#100816] shadow-[0_14px_30px_-14px_rgba(216,173,77,0.72)] transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_18px_36px_-16px_rgba(216,173,77,0.84)]"
          >
            Ver na Google Play
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-[48px] items-center justify-center rounded-[999px] border border-[var(--border)] bg-white/[0.04] px-5 text-[15px] font-semibold text-[var(--ink)] transition-[border-color,background] duration-150 hover:border-[rgba(216,173,77,0.3)] hover:bg-white/[0.08]"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
