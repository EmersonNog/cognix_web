import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { ExplorePageView } from '@/pages/explore/view/ExplorePageView'
import { HomePageView } from '@/pages/home/view/HomePageView'

const ROUTE_TRANSITION_DURATION_MS = 420

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, '')

  if (hash === '/explore') {
    return 'explore' as const
  }

  return 'home' as const
}

function App() {
  const [displayedRoute, setDisplayedRoute] = useState(getRouteFromHash)
  const [routeStage, setRouteStage] = useState<'enter' | 'exit'>('enter')
  const displayedRouteRef = useRef(displayedRoute)
  const transitionTimeoutRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    displayedRouteRef.current = displayedRoute
  }, [displayedRoute])

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = getRouteFromHash()

      if (nextRoute === displayedRouteRef.current) {
        return
      }

      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current)
        transitionTimeoutRef.current = null
      }

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }

      setRouteStage('exit')

      transitionTimeoutRef.current = window.setTimeout(() => {
        transitionTimeoutRef.current = null
        displayedRouteRef.current = nextRoute
        setDisplayedRoute(nextRoute)

        frameRef.current = window.requestAnimationFrame(() => {
          frameRef.current = null
          setRouteStage('enter')
        })
      }, ROUTE_TRANSITION_DURATION_MS)
    }

    window.addEventListener('hashchange', syncRoute)

    return () => {
      window.removeEventListener('hashchange', syncRoute)

      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current)
        transitionTimeoutRef.current = null
      }

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [])

  return (
    <div
      className={cn(
        'cognix-route-shell',
        routeStage === 'enter' ? 'cognix-route-enter' : 'cognix-route-exit',
      )}
    >
      {displayedRoute === 'explore' ? <ExplorePageView /> : <HomePageView />}
    </div>
  )
}

export default App
