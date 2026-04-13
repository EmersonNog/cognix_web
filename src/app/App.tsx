import { useEffect, useMemo, useState } from 'react'

import { HomePageController } from '@/pages/home/controller/HomePageController'
import { LegalPageController } from '@/pages/legal/controller/LegalPageController'
import {
  getLegalPageRouteFromPathname,
  isLegalPageRoute,
  legalPages,
} from '@/pages/legal/model/legal-pages.model'
import {
  getRequestPresentationPageRouteFromPathname,
  isRequestPresentationPageRoute,
  requestPresentationPageModel,
} from '@/pages/request-presentation/model/request-presentation-page.model'
import { RequestPresentationPageController } from '@/pages/request-presentation/controller/RequestPresentationPageController'

const HOME_PAGE_TITLE = 'Cognix - HUB'
const HOME_PAGE_DESCRIPTION =
  'Cognix ajuda você a descobrir o que revisar e organiza seu plano de estudo.'

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)
  const [hash, setHash] = useState(() => window.location.hash)
  const legalRoute = useMemo(
    () => getLegalPageRouteFromPathname(pathname),
    [pathname],
  )
  const requestPresentationRoute = useMemo(
    () => getRequestPresentationPageRouteFromPathname(pathname),
    [pathname],
  )

  useEffect(() => {
    const syncLocationState = () => {
      setPathname(window.location.pathname)
      setHash(window.location.hash)
    }

    window.addEventListener('popstate', syncLocationState)
    window.addEventListener('hashchange', syncLocationState)

    return () => {
      window.removeEventListener('popstate', syncLocationState)
      window.removeEventListener('hashchange', syncLocationState)
    }
  }, [])

  useEffect(() => {
    if (pathname !== '/' || !hash.startsWith('#/')) {
      return
    }

    const legacyRoute = decodeURIComponent(
      hash.slice(2).replace(/\/+$/, '').split('?')[0],
    )

    if (
      !isLegalPageRoute(legacyRoute) &&
      !isRequestPresentationPageRoute(legacyRoute)
    ) {
      return
    }

    window.history.replaceState(null, '', `/${legacyRoute}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }, [hash, pathname])

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

    if (!hash) {
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
