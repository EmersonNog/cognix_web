import { useState } from 'react'

import { homePageModel } from '@/pages/home/model/homePage.model'
import { HomePageView } from '@/pages/home/view/HomePageView'

const initialCapability = homePageModel.capabilities[0]

if (!initialCapability) {
  throw new Error('The home page model must provide at least one capability.')
}

export function HomePageController() {
  const [activeCapabilityId, setActiveCapabilityId] = useState(initialCapability.id)

  const activeCapability =
    homePageModel.capabilities.find((capability) => capability.id === activeCapabilityId) ??
    initialCapability

  return (
    <HomePageView
      activeCapability={activeCapability}
      activeCapabilityId={activeCapabilityId}
      data={homePageModel}
      onSelectCapability={setActiveCapabilityId}
    />
  )
}
