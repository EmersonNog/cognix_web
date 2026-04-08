import { useExplorePageController } from '@/pages/explore/controller/useExplorePageController'
import { ExplorePageContentView } from '@/pages/explore/view/components/ExplorePageContentView'

export function ExplorePageView() {
  const explorePageController = useExplorePageController()

  return <ExplorePageContentView {...explorePageController} />
}
