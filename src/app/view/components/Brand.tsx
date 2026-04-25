import clsx from 'clsx'

import logoLight from '@/assets/logo_outlined_light.png'

type BrandProps = {
  href?: string
  className?: string
}

export function Brand({ href = '#', className }: BrandProps) {
  return (
    <a
      href={href}
      className={clsx(
        'flex items-center gap-[10px] font-[var(--font-display)] text-[20px] font-bold tracking-[-0.02em] text-[var(--ink)]',
        className,
      )}
    >
      <span className="grid h-[34px] w-[34px] place-items-center overflow-hidden rounded-[10px] bg-[radial-gradient(120%_120%_at_30%_20%,#3b6cf0_0%,#2563eb_50%,#1e40af_100%)] shadow-[0_6px_14px_-6px_rgba(37,99,235,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]">
        <img
          src={logoLight}
          alt=""
          className="h-[22px] w-[22px] drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]"
        />
      </span>
      Cognix
    </a>
  )
}
