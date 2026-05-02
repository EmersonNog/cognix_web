import { AppMockupCarousel } from '@/app/view/components/AppMockupCarousel'
import { appShowcaseMockups } from '@/app/view/sections/app-showcase/appShowcaseMockups'

export function AppShowcaseCarousel() {
  return (
    <div className="relative overflow-hidden pb-0 pt-3">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(68%_90%_at_18%_42%,rgba(104,74,177,0.18),transparent_58%),radial-gradient(48%_64%_at_82%_54%,rgba(216,173,77,0.08),transparent_68%),linear-gradient(180deg,rgba(17,10,26,0.08)_0%,rgba(17,10,26,0.26)_22%,rgba(17,10,26,0.16)_68%,rgba(17,10,26,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[4] h-20 bg-[linear-gradient(180deg,rgba(17,10,26,0.34)_0%,rgba(17,10,26,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[16%] bottom-[-82px] z-[4] h-44 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(155,116,223,0.18),rgba(25,16,37,0.05)_46%,transparent_78%)] blur-[24px]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[4] w-24 bg-[linear-gradient(90deg,rgba(20,11,31,0.94)_0%,rgba(20,11,31,0.66)_34%,rgba(20,11,31,0)_100%)] max-[720px]:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[4] w-24 bg-[linear-gradient(270deg,rgba(36,24,39,0.82)_0%,rgba(36,24,39,0.44)_34%,rgba(36,24,39,0)_100%)] max-[720px]:w-12" />

      <div className="relative z-[1]">
        <AppMockupCarousel
          animationClassName="animate-[mockupMarquee_36s_linear_infinite_reverse]"
          items={appShowcaseMockups}
        />
      </div>
    </div>
  )
}
