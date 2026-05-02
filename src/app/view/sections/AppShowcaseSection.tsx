import { useState } from 'react'

import { AppLaunchSoonModal } from '@/app/view/components/AppLaunchSoonModal'
import { AppShowcaseCarousel } from '@/app/view/sections/app-showcase/AppShowcaseCarousel'
import { AppShowcaseIntro } from '@/app/view/sections/app-showcase/AppShowcaseIntro'

export function AppShowcaseSection() {
  const [isAppleModalOpen, setIsAppleModalOpen] = useState(false)

  return (
    <section className="bg-transparent pb-0 pt-0">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pt-[132px] max-[720px]:pt-[96px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(52%_100%_at_50%_0%,rgba(155,116,223,0.14),transparent_72%)]" />

        <AppShowcaseIntro
          onAppleStoreClick={() => setIsAppleModalOpen(true)}
        />
        <AppShowcaseCarousel />
      </div>

      <AppLaunchSoonModal
        open={isAppleModalOpen}
        onClose={() => setIsAppleModalOpen(false)}
      />
    </section>
  )
}
