import { useEffect, useState } from 'react'

export function useScrolledHeaderState() {
  const [isScrolled, setIsScrolled] = useState(
    typeof window !== 'undefined' ? window.scrollY > 8 : false,
  )

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isScrolled
}
