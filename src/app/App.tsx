import { useEffect, useMemo, useState } from 'react'

import { HomePageController } from '@/pages/home/controller/HomePageController'
import { LegalPageController } from '@/pages/legal/controller/LegalPageController'
import {
  getLegalPageRouteFromHash,
  legalPages,
} from '@/pages/legal/model/legal-pages.model'
import {
  getRequestPresentationPageRouteFromHash,
  requestPresentationPageModel,
} from '@/pages/request-presentation/model/request-presentation-page.model'
import { RequestPresentationPageController } from '@/pages/request-presentation/controller/RequestPresentationPageController'

const HOME_PAGE_TITLE = 'Cognix - HUB'
const HOME_PAGE_DESCRIPTION =
  'Cognix ajuda você a descobrir o que revisar e organiza seu plano de estudo.'

function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const legalRoute = useMemo(() => getLegalPageRouteFromHash(hash), [hash])
  const requestPresentationRoute = useMemo(
    () => getRequestPresentationPageRouteFromHash(hash),
    [hash],
  )

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    let pageTitle = HOME_PAGE_TITLE
    let pageDescription = HOME_PAGE_DESCRIPTION

    if (legalRoute) {
      pageTitle = `${legalPages[legalRoute].title} | Cognix`
      pageDescription = legalPages[legalRoute].summary
    } else if (requestPresentationRoute) {
      pageTitle = `${requestPresentationPageModel.title} | Cognix`
      pageDescription = requestPresentationPageModel.summary
    }

    const metaDescription = document.querySelector(
      'meta[name="description"]',
    )

    document.title = pageTitle
    metaDescription?.setAttribute('content', pageDescription)
  }, [legalRoute, requestPresentationRoute])

  useEffect(() => {
    if (legalRoute || requestPresentationRoute) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    if (!hash || hash.startsWith('#/')) {
      return
    }

    const targetId = decodeURIComponent(hash.slice(1))
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [hash, legalRoute, requestPresentationRoute])

  if (legalRoute) {
    return <LegalPageController route={legalRoute} />
  }

  if (requestPresentationRoute) {
    return <RequestPresentationPageController />
  }

  return <HomePageController />
}

export default App
