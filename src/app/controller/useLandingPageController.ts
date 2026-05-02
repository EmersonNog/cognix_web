import { useEffect, useState } from 'react'

import {
  resolveIsContactPage,
  resolveIsSubscriptionPage,
  resolveLegalPageFromLocation,
  scrollToCurrentHashTarget,
} from '@/app/controller/landingRoute'
import { useRevealElements } from '@/app/controller/useRevealElements'
import { useScrolledHeaderState } from '@/app/controller/useScrolledHeaderState'

export function useLandingPageController() {
  const isScrolled = useScrolledHeaderState()
  const [legalPage, setLegalPage] = useState(resolveLegalPageFromLocation)
  const [isContactPage, setIsContactPage] = useState(resolveIsContactPage)
  const [isSubscriptionPage, setIsSubscriptionPage] = useState(
    resolveIsSubscriptionPage,
  )

  useEffect(() => {
    const onRouteChange = () => {
      setLegalPage(resolveLegalPageFromLocation())
      setIsContactPage(resolveIsContactPage())
      setIsSubscriptionPage(resolveIsSubscriptionPage())
      scrollToCurrentHashTarget()
    }

    window.addEventListener('hashchange', onRouteChange)
    window.addEventListener('popstate', onRouteChange)

    return () => {
      window.removeEventListener('hashchange', onRouteChange)
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])

  useRevealElements({
    isContactPage,
    isSubscriptionPage,
    legalPageSlug: legalPage?.slug,
  })

  return {
    isContactPage,
    isSubscriptionPage,
    isScrolled,
    legalPage,
  }
}
