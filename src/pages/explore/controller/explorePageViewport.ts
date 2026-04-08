import { useEffect, useState } from 'react'

export function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
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
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, node, threshold])

  return [setNode, isVisible] as const
}

export function useInViewState<T extends HTMLElement>(threshold = 0.2) {
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
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [node, threshold])

  return [setNode, isVisible] as const
}
