import { useHeroSectionController } from '@/pages/home/controller/useHeroSectionController'
import { homePageModel } from '@/pages/home/model/home-page.model'
import { HomePageView } from '@/pages/home/view/HomePageView'

export function HomePageController() {
  const heroSectionController = useHeroSectionController(homePageModel.heroSection)

  return (
    <HomePageView
      model={homePageModel}
      heroSectionController={heroSectionController}
    />
  )
}
