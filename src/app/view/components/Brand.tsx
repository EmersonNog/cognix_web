import clsx from 'clsx'

import logoLight from '@/assets/logo_outlined_light.png'

type BrandProps = {
  href?: string
  className?: string
  logoClassName?: string
  logoWrapperClassName?: string
  orientation?: 'horizontal' | 'vertical'
  textClassName?: string
}

export function Brand({
  href = '#',
  className,
  logoClassName,
  logoWrapperClassName,
  orientation = 'horizontal',
  textClassName,
}: BrandProps) {
  return (
    <a
      href={href}
      className={clsx(
        'flex font-[var(--font-display)] text-[20px] font-bold tracking-[-0.02em] text-[var(--ink)]',
        orientation === 'vertical'
          ? 'flex-col items-start gap-3'
          : 'items-center gap-[10px]',
        className,
      )}
    >
      <span
        className={clsx(
          'grid h-[54px] w-[44px] place-items-center overflow-hidden',
          logoWrapperClassName,
        )}
      >
        <img
          src={logoLight}
          alt=""
          className={clsx(
            'h-[52px] w-auto drop-shadow-[0_10px_20px_rgba(216,173,77,0.28)]',
            logoClassName,
          )}
        />
      </span>
      <span className={clsx('leading-none', textClassName)}>Cognix.</span>
    </a>
  )
}
