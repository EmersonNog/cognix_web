import { useLandingPageController } from '@/app/controller/useLandingPageController'
import { ContactPageView } from '@/app/view/ContactPageView'
import { LegalPageView } from '@/app/view/LegalPageView'
import { LandingPageView } from '@/app/view/LandingPageView'

function App() {
  const { isContactPage, isScrolled, legalPage } = useLandingPageController()

  if (legalPage) {
    return <LegalPageView isScrolled={isScrolled} page={legalPage} />
  }

  if (isContactPage) {
    return <ContactPageView isScrolled={isScrolled} />
  }

  return <LandingPageView isScrolled={isScrolled} />
}

export default App
