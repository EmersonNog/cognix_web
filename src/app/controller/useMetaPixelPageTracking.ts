import { useEffect } from 'react'

import { captureAttributionFromCurrentUrl } from '@/app/service/attribution'
import { initMetaPixel, trackMetaPageView } from '@/app/service/metaPixel'

export function useMetaPixelPageTracking() {
  useEffect(() => {
    initMetaPixel()

    const handleRouteChange = () => {
      captureAttributionFromCurrentUrl()
      trackMetaPageView()
    }

    handleRouteChange()
    window.addEventListener('hashchange', handleRouteChange)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])
}
