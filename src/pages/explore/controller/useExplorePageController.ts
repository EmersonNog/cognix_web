import { useExploreOverviewSectionController } from './useExploreOverviewSectionController'
import { useExploreQuestionSectionController } from './useExploreQuestionSectionController'

export function useExplorePageController() {
  const overviewSectionController = useExploreOverviewSectionController()
  const questionSectionController = useExploreQuestionSectionController()

  return {
    overviewSectionController,
    questionSectionController,
  }
}

export type ExplorePageController = ReturnType<typeof useExplorePageController>
