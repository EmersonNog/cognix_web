import { requestPresentationPageModel } from '@/pages/request-presentation/model/request-presentation-page.model'
import { RequestPresentationPageView } from '@/pages/request-presentation/view/RequestPresentationPageView'

export function RequestPresentationPageController() {
  return <RequestPresentationPageView page={requestPresentationPageModel} />
}
