import { useEffect, useState } from 'react'

import { useExploreOverviewSectionController } from './useExploreOverviewSectionController'
import { useExploreQuestionSectionController } from './useExploreQuestionSectionController'

export function useExplorePageController() {
  const [isExploreLoadingVisible, setIsExploreLoadingVisible] = useState(true)
  const [minimumDelayElapsed, setMinimumDelayElapsed] = useState(false)
  const questionSectionController = useExploreQuestionSectionController({
    forceRender: isExploreLoadingVisible,
  })
  const overviewSectionController = useExploreOverviewSectionController({
    playbackEnabled: !isExploreLoadingVisible,
  })

  useEffect(() => {
    const minimumDelayId = window.setTimeout(() => {
      setMinimumDelayElapsed(true)
    }, 2360)

    const fallbackId = window.setTimeout(() => {
      setIsExploreLoadingVisible(false)
    }, 8000)

    return () => {
      window.clearTimeout(minimumDelayId)
      window.clearTimeout(fallbackId)
    }
  }, [])

  useEffect(() => {
    if (
      !minimumDelayElapsed ||
      !questionSectionController.questionSplineLoadedState
    ) {
      return
    }

    setIsExploreLoadingVisible(false)
  }, [minimumDelayElapsed, questionSectionController.questionSplineLoadedState])

  return {
    isExploreLoadingVisible,
    overviewSectionController,
    questionSectionController,
  }
}

export type ExplorePageController = ReturnType<typeof useExplorePageController>
