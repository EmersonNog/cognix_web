export function getScrollTopForElement(element: HTMLElement) {
  return Math.max(element.getBoundingClientRect().top + window.scrollY, 0)
}

export function scrollToElement(
  element: HTMLElement,
  behavior: ScrollBehavior = 'smooth',
) {
  window.scrollTo({
    behavior,
    top: getScrollTopForElement(element),
  })
}
