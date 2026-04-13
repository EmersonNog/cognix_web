import {
  legalPages,
  type LegalPageRoute,
} from '@/pages/legal/model/legal-pages.model'
import { LegalPageView } from '@/pages/legal/view/LegalPageView'

type LegalPageControllerProps = {
  route: LegalPageRoute
}

export function LegalPageController({
  route,
}: LegalPageControllerProps) {
  return <LegalPageView page={legalPages[route]} />
}
