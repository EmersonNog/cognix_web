import { useEffect, useState } from 'react'

export function useInViewOnce<T extends HTMLElement>(
  threshold = 0.35,
  rootMargin = '0px',
) {
  const [node, setNode] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!node || isVisible) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, node, rootMargin, threshold])

  return [setNode, isVisible] as const
}

export function useInViewState<T extends HTMLElement>(
  threshold = 0.2,
  rootMargin = '0px',
) {
  const [node, setNode] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin, threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [node, rootMargin, threshold])

  return [setNode, isVisible] as const
}
