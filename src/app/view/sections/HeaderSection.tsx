import clsx from 'clsx'

import { navItems } from '@/app/model/landing-navigation'
import { Brand } from '@/app/view/components/Brand'
import { containerClass } from '@/app/view/viewTokens'

type HeaderSectionProps = {
  isScrolled: boolean
}

export function HeaderSection({ isScrolled }: HeaderSectionProps) {
  return (
    <header
      id="nav"
      className={clsx(
        'sticky top-0 z-40 border-b border-transparent bg-white/[0.78] backdrop-blur-[10px] transition-[border-color,background] duration-200',
        isScrolled && 'border-b-[var(--border)] bg-white/[0.92]',
      )}
    >
      <div className={`${containerClass} flex h-[72px] items-center justify-between gap-6`}>
        <Brand />

        <nav
          aria-label="Seções"
          className="flex items-center gap-[6px] max-[860px]:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[10px] px-[14px] py-[10px] text-[15px] font-medium text-[var(--slate)] transition-colors duration-150 hover:bg-[var(--bg-muted)] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[10px]"> 
          <a
            href="#planos"
            className="inline-flex h-[44px] items-center justify-center rounded-[999px] bg-[var(--primary)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[transform,background] duration-150 hover:-translate-y-px hover:bg-[var(--primary-600)]"
          >
            Começar por R$ 9,90
          </a>
        </div>
      </div>
    </header>
  )
}
