import clsx from 'clsx'
import { Smartphone } from 'lucide-react'

import { navItems } from '@/app/model/landing-navigation'
import { containerClass } from '@/app/view/viewTokens'

type HeaderSectionProps = {
  isScrolled: boolean
}

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.cognixhub.app&hl=pt_BR'

export function HeaderSection({ isScrolled }: HeaderSectionProps) {
  return (
    <header
      id="nav"
      className={clsx(
        'sticky top-0 z-40 border-b border-transparent bg-[#0d0717]/[0.78] backdrop-blur-[14px] transition-[border-color,background] duration-200',
        isScrolled && 'border-b-[var(--border)] bg-[#0d0717]/[0.94]',
      )}
    >
      <div className={`${containerClass} flex h-[72px] items-center justify-between gap-6`}>
        <a
          href="/"
          className="font-[var(--font-display)] text-[24px] font-bold tracking-[-0.02em] text-[var(--ink)] transition-colors duration-150 hover:text-[var(--primary)]"
        >
          Cognix.
        </a>

        <nav
          aria-label="Seções"
          className="flex items-center gap-[6px] max-[860px]:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[10px] px-[14px] py-[10px] text-[15px] font-medium text-[var(--slate)] transition-colors duration-150 hover:bg-white/[0.05] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[10px]">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Baixar o app Cognix na Google Play"
            className="group inline-flex h-[46px] items-center gap-3 rounded-[999px] border border-[var(--border)] bg-white/[0.035] px-4 text-left text-[var(--ink)] shadow-[var(--shadow-sm)] backdrop-blur-[8px] transition-[transform,border-color,background] duration-150 hover:-translate-y-px hover:border-[rgba(216,173,77,0.38)] hover:bg-white/[0.07]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--primary-50)] text-[var(--primary)] transition-colors duration-150 group-hover:bg-[var(--primary)] group-hover:text-[#100816]">
              <Smartphone className="h-4 w-4" strokeWidth={2.3} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--slate-2)]">
                Baixar app
              </span>
              <span className="mt-1 text-[14px] font-bold text-[var(--ink)]">
                Google Play
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
