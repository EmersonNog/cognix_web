import clsx from 'clsx'

import appleLogo from '@/assets/store/apple-logo.svg'
import googlePlayLogo from '@/assets/store/google-play-logo.svg'

type StoreBadgeVariant = 'app-store' | 'google-play'

type StoreBadgeBaseProps = {
  ariaLabel: string
  className?: string
  variant: StoreBadgeVariant
}

type StoreBadgeLinkProps = StoreBadgeBaseProps & {
  href: string
  onClick?: never
}

type StoreBadgeButtonProps = StoreBadgeBaseProps & {
  href?: never
  onClick: () => void
}

type StoreBadgeProps = StoreBadgeLinkProps | StoreBadgeButtonProps

const STORE_BADGE_BASE_CLASS =
  'group inline-flex h-[54px] min-w-[164px] items-center gap-2.5 rounded-[16px] border border-[rgba(17,17,17,0.12)] bg-white px-3.5 text-left text-[#17111f] shadow-[0_5px_0_rgba(0,0,0,0.14)] transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_7px_0_rgba(0,0,0,0.16)] min-[900px]:h-[60px] min-[900px]:min-w-[176px] min-[900px]:px-4'

const STORE_BADGE_CONTENT = {
  'app-store': {
    eyebrow: 'Baixar na',
    icon: appleLogo,
    iconClassName: '',
    label: 'App Store',
  },
  'google-play': {
    eyebrow: 'Disponivel no',
    icon: googlePlayLogo,
    iconClassName: 'brightness-0',
    label: 'Google Play',
  },
} satisfies Record<
  StoreBadgeVariant,
  {
    eyebrow: string
    icon: string
    iconClassName: string
    label: string
  }
>

function StoreBadgeContent({ variant }: { variant: StoreBadgeVariant }) {
  const badge = STORE_BADGE_CONTENT[variant]

  return (
    <>
      <span className="grid h-7 w-7 shrink-0 place-items-center min-[900px]:h-9 min-[900px]:w-9">
        <img
          src={badge.icon}
          alt=""
          className={clsx(
            'h-6 w-6 min-[900px]:h-7 min-[900px]:w-7',
            badge.iconClassName,
          )}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium text-[#7a7488] min-[900px]:text-[11px]">
          {badge.eyebrow}
        </span>
        <span className="mt-1 text-[13px] font-bold tracking-[-0.02em] text-[#17111f] min-[900px]:text-[15px]">
          {badge.label}
        </span>
      </span>
    </>
  )
}

export function StoreBadge(props: StoreBadgeProps) {
  const className = clsx(STORE_BADGE_BASE_CLASS, props.className)

  if (props.href) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        aria-label={props.ariaLabel}
        className={className}
      >
        <StoreBadgeContent variant={props.variant} />
      </a>
    )
  }

  return (
    <button
      type="button"
      aria-label={props.ariaLabel}
      onClick={props.onClick}
      className={className}
    >
      <StoreBadgeContent variant={props.variant} />
    </button>
  )
}
