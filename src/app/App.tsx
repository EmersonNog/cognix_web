import { useLandingPageController } from '@/app/controller/useLandingPageController'
import { LandingPageView } from '@/app/view/LandingPageView'

function App() {
  const { isScrolled } = useLandingPageController()

  return <LandingPageView isScrolled={isScrolled} />
}

export default App
