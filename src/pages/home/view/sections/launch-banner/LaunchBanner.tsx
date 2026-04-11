import { Rocket } from 'lucide-react'
import type { CSSProperties } from 'react'

import { StickyBanner } from '@/components/ui/sticky-banner'
import { cn } from '@/lib/utils'
import type { HomeLaunchBannerModel } from '@/pages/home/model/home-page.model'

type LaunchBannerProps = {
  banner: HomeLaunchBannerModel
  theme: 'dark' | 'light'
  themeProgress: number
}

const mixNumber = (from: number, to: number, progress: number) =>
  Math.round(from + (to - from) * progress)

const mixColor = (
  from: [number, number, number],
  to: [number, number, number],
  progress: number,
) => `rgb(${from.map((value, index) => mixNumber(value, to[index], progress)).join(' ')})`

const mixRgba = (
  from: [number, number, number],
  to: [number, number, number],
  progress: number,
  alpha: number,
) => `rgba(${from.map((value, index) => mixNumber(value, to[index], progress)).join(', ')}, ${alpha})`

export function LaunchBanner({ banner, theme, themeProgress }: LaunchBannerProps) {
  const transitionProgress = Math.min(Math.max(themeProgress, 0), 1)
  const isLightTheme = theme === 'light'
  const bannerStyle = {
    backgroundColor: mixRgba([6, 22, 36], [255, 255, 255], transitionProgress, 0.88 + transitionProgress * 0.08),
    borderColor: mixRgba([255, 255, 255], [190, 210, 223], transitionProgress, 0.1 + transitionProgress * 0.72),
    boxShadow: `0 18px ${mixNumber(60, 55, transitionProgress)}px ${mixRgba([0, 8, 18], [15, 44, 64], transitionProgress, 0.16 - transitionProgress * 0.04)}`,
    color: mixColor([255, 255, 255], [7, 20, 38], transitionProgress),
  } satisfies CSSProperties
  const pillStyle = {
    backgroundColor: mixRgba([255, 255, 255], [233, 250, 252], transitionProgress, 0.05 + transitionProgress * 0.95),
    borderColor: mixRgba([255, 255, 255], [181, 220, 228], transitionProgress, 0.1 + transitionProgress * 0.74),
    color: mixColor([214, 232, 246], [10, 101, 118], transitionProgress),
  } satisfies CSSProperties
  const iconColor = mixColor([126, 251, 255], [8, 120, 142], transitionProgress)
  const messageStyle = {
    color: mixColor([215, 232, 246], [38, 56, 77], transitionProgress),
  } satisfies CSSProperties

  return (
    <StickyBanner>
      <div
        className={cn(
          'relative mx-auto max-w-7xl overflow-hidden rounded-[1.15rem] border backdrop-blur-xl transition-[background-color,border-color,box-shadow,color] duration-700 ease-out',
          isLightTheme ? 'text-[#071426]' : 'text-white',
        )}
        style={bannerStyle}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(61,246,255,0.12)_0%,rgba(61,246,255,0)_40%,rgba(61,246,255,0.08)_100%)] transition-opacity duration-700 ease-out"
          style={{ opacity: 1 - transitionProgress }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(61,246,255,0.14)_0%,rgba(255,255,255,0)_45%,rgba(91,129,255,0.1)_100%)] transition-opacity duration-700 ease-out"
          style={{ opacity: transitionProgress }}
        />

        <div className="relative flex items-center gap-3 px-3 py-2.5 sm:px-5 sm:py-3 md:gap-4">
          <span
            className={cn(
              'mr-auto inline-flex w-fit shrink-0 items-center gap-2 justify-self-start rounded-full border px-2.5 py-1.5 text-[0.62rem] font-medium tracking-[0.12em] uppercase transition-[background-color,border-color,color] duration-700 ease-out sm:px-3 sm:text-[0.68rem] sm:tracking-[0.14em]',
            )}
            style={pillStyle}
          >
            <Rocket
              className="h-3.5 w-3.5 transition-colors duration-700 ease-out"
              color={iconColor}
            />
            <span className="sm:hidden">{banner.compactTag}</span>
            <span className="hidden sm:inline">{banner.tag}</span>
          </span>

          <p
            className={cn(
              'min-w-0 flex-1 truncate text-left text-xs leading-5 transition-colors duration-700 ease-out sm:text-sm md:max-w-none md:text-[0.95rem]',
              isLightTheme && 'font-medium',
            )}
            style={messageStyle}
            title={banner.message}
          >
            <span className="sm:hidden">{banner.compactMessage}</span>
            <span className="hidden sm:inline lg:hidden">{banner.tabletMessage}</span>
            <span className="hidden lg:inline">{banner.message}</span>
          </p>
        </div>
      </div>
    </StickyBanner>
  )
}
