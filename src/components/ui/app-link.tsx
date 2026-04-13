import type { AnchorHTMLAttributes, MouseEvent } from 'react'

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

function shouldHandleInternalNavigation(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  ) {
    return false
  }

  return href.startsWith('/') || href.startsWith('#')
}

export function AppLink({
  href,
  onClick,
  target,
  ...props
}: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      target === '_blank' ||
      !shouldHandleInternalNavigation(event, href)
    ) {
      return
    }

    event.preventDefault()

    const nextHref = href.startsWith('#')
      ? `${window.location.pathname}${href}`
      : href

    if (
      nextHref ===
      `${window.location.pathname}${window.location.search}${window.location.hash}`
    ) {
      return
    }

    window.history.pushState(null, '', nextHref)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <a {...props} href={href} onClick={handleClick} target={target} />
}
