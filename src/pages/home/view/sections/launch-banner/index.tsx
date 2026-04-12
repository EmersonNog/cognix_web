import { Rocket } from 'lucide-react'
import type { CSSProperties } from 'react'

import { StickyBanner } from '@/components/ui/sticky-banner'
import { cn } from '@/lib/utils'
import type { HomeLaunchBannerModel } from '@/pages/home/model/home-page.model'

type LaunchBannerProps = {
  accentProgress: number
  banner: HomeLaunchBannerModel
  themeProgress: number
}

type RgbTuple = [number, number, number]

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1)

const smoothStep = (value: number) => {
  const progress = clamp01(value)

  return progress * progress * (3 - 2 * progress)
}

const mixNumber = (from: number, to: number, progress: number) =>
  from + (to - from) * progress

const mixTuple = (
  from: RgbTuple,
  to: RgbTuple,
  progress: number,
): RgbTuple => [
  mixNumber(from[0], to[0], progress),
  mixNumber(from[1], to[1], progress),
  mixNumber(from[2], to[2], progress),
]

const formatCssNumber = (value: number) => Number(value.toFixed(3))

const formatColorChannels = (color: RgbTuple, separator: ' ' | ', ' = ' ') =>
  color.map((value) => formatCssNumber(value)).join(separator)

const toRgb = (color: RgbTuple) => `rgb(${formatColorChannels(color)})`

const toRgba = (color: RgbTuple, opacity: number) =>
  `rgba(${formatColorChannels(color, ', ')}, ${formatCssNumber(opacity)})`

export function LaunchBanner({
  accentProgress,
  banner,
  themeProgress,
}: LaunchBannerProps) {
  const transitionProgress = smoothStep(themeProgress)
  const accentTransitionProgress = smoothStep(accentProgress)
  const isLightTheme = transitionProgress > 0.52
  const bannerBaseColor = mixTuple(
    mixTuple([6, 22, 36], [255, 255, 255], transitionProgress),
    [239, 245, 255],
    accentTransitionProgress,
  )
  const borderBaseColor = mixTuple(
    mixTuple([255, 255, 255], [190, 210, 223], transitionProgress),
    [201, 218, 247],
    accentTransitionProgress,
  )
  const textBaseColor = mixTuple(
    mixTuple([255, 255, 255], [7, 20, 38], transitionProgress),
    [12, 32, 63],
    accentTransitionProgress,
  )
  const pillBaseColor = mixTuple(
    mixTuple([255, 255, 255], [233, 250, 252], transitionProgress),
    [238, 244, 255],
    accentTransitionProgress,
  )
  const pillBorderBaseColor = mixTuple(
    mixTuple([255, 255, 255], [181, 220, 228], transitionProgress),
    [191, 210, 246],
    accentTransitionProgress,
  )
  const pillTextBaseColor = mixTuple(
    mixTuple([214, 232, 246], [10, 101, 118], transitionProgress),
    [60, 95, 183],
    accentTransitionProgress,
  )
  const iconBaseColor = mixTuple(
    mixTuple([126, 251, 255], [8, 120, 142], transitionProgress),
    [67, 109, 214],
    accentTransitionProgress,
  )
  const messageBaseColor = mixTuple(
    mixTuple([215, 232, 246], [38, 56, 77], transitionProgress),
    [63, 82, 112],
    accentTransitionProgress,
  )
  const shadowBaseColor = mixTuple(
    mixTuple([0, 8, 18], [15, 44, 64], transitionProgress),
    [69, 93, 151],
    accentTransitionProgress,
  )
  const bannerOpacity = mixNumber(
    mixNumber(0.9, 0.96, transitionProgress),
    0.98,
    accentTransitionProgress,
  )
  const borderOpacity = mixNumber(
    mixNumber(0.16, 0.72, transitionProgress),
    0.78,
    accentTransitionProgress,
  )
  const shadowBlur = mixNumber(
    mixNumber(60, 44, transitionProgress),
    52,
    accentTransitionProgress,
  )
  const shadowOpacity = mixNumber(
    mixNumber(0.18, 0.09, transitionProgress),
    0.12,
    accentTransitionProgress,
  )
  const bannerStyle = {
    backgroundColor: toRgba(bannerBaseColor, bannerOpacity),
    borderColor: toRgba(borderBaseColor, borderOpacity),
    boxShadow: `0 18px ${formatCssNumber(shadowBlur)}px ${toRgba(
      shadowBaseColor,
      shadowOpacity,
    )}`,
    color: toRgb(textBaseColor),
  } satisfies CSSProperties
  const pillStyle = {
    backgroundColor: toRgba(
      pillBaseColor,
      mixNumber(
        mixNumber(0.08, 0.96, transitionProgress),
        0.98,
        accentTransitionProgress,
      ),
    ),
    borderColor: toRgba(
      pillBorderBaseColor,
      mixNumber(
        mixNumber(0.14, 0.74, transitionProgress),
        0.8,
        accentTransitionProgress,
      ),
    ),
    color: toRgb(pillTextBaseColor),
  } satisfies CSSProperties
  const iconColor = toRgb(iconBaseColor)
  const messageStyle = {
    color: toRgb(messageBaseColor),
  } satisfies CSSProperties

  return (
    <StickyBanner>
      <div
        className={cn(
          'relative mx-auto max-w-7xl overflow-hidden rounded-[1.15rem] border backdrop-blur-xl transition-[background-color,border-color,box-shadow,color] duration-300 ease-out',
        )}
        style={bannerStyle}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(61,246,255,0.12)_0%,rgba(61,246,255,0)_40%,rgba(61,246,255,0.08)_100%)] transition-opacity duration-300 ease-out"
          style={{ opacity: formatCssNumber(1 - transitionProgress) }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(61,246,255,0.14)_0%,rgba(255,255,255,0)_45%,rgba(91,129,255,0.1)_100%)] transition-opacity duration-300 ease-out"
          style={{
            opacity: formatCssNumber(
              transitionProgress * (1 - accentTransitionProgress * 0.35),
            ),
          }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(90,141,255,0.16)_0%,rgba(255,255,255,0)_45%,rgba(54,194,163,0.1)_100%)] transition-opacity duration-300 ease-out"
          style={{ opacity: formatCssNumber(accentTransitionProgress) }}
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
