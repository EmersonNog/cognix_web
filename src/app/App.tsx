import { useEffect, useMemo, useState } from 'react'

import { HomePageController } from '@/pages/home/controller/HomePageController'
import { LegalPageController } from '@/pages/legal/controller/LegalPageController'
import {
  getLegalPageRouteFromHash,
  legalPages,
} from '@/pages/legal/model/legal-pages.model'

const HOME_PAGE_TITLE = 'Cognix - HUB'
const HOME_PAGE_DESCRIPTION =
  'Cognix ajuda voce a descobrir o que revisar e organiza seu plano de estudo.'

function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const legalRoute = useMemo(() => getLegalPageRouteFromHash(hash), [hash])

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
    const pageTitle = legalRoute
      ? `${legalPages[legalRoute].title} | Cognix`
      : HOME_PAGE_TITLE
    const pageDescription = legalRoute
      ? legalPages[legalRoute].summary
      : HOME_PAGE_DESCRIPTION
    const metaDescription = document.querySelector(
      'meta[name="description"]',
    )

    document.title = pageTitle
    metaDescription?.setAttribute('content', pageDescription)
  }, [legalRoute])

  useEffect(() => {
    if (legalRoute) {
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
  }, [hash, legalRoute])

  if (legalRoute) {
    return <LegalPageController route={legalRoute} />
  }

  return <HomePageController />
}

export default App
