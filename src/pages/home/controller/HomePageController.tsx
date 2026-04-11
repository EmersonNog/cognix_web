import { homePageModel } from '@/pages/home/model/home-page.model'
import { HomePageView } from '@/pages/home/view/HomePageView'

export function HomePageController() {
  return <HomePageView model={homePageModel} />
}
