import type { CSSProperties } from 'react'
import { useId } from 'react'

import { cn } from '@/lib/utils'

type BackgroundBeamsProps = {
  className?: string
}

type BeamDefinition = {
  d: string
  duration: number
  delay: number
  width: number
}

type BeamCanvasProps = {
  beamDefinitions: BeamDefinition[]
  className?: string
  idPrefix: string
  viewBox: string
}

type BeamStyle = CSSProperties & {
  '--beam-delay': string
  '--beam-duration': string
  '--beam-filter': string
  '--beam-gradient': string
  '--beam-width': string
}

const desktopBeamDefinitions: BeamDefinition[] = [
  {
    d: 'M-180 110C10 16 182 14 346 104C510 194 642 300 844 274C1046 248 1238 102 1540 154',
    duration: 17,
    delay: -5.8,
    width: 1.3,
  },
  {
    d: 'M-120 246C90 156 270 134 458 214C646 294 810 486 1016 496C1222 506 1370 354 1564 250',
    duration: 20,
    delay: -11.2,
    width: 1.6,
  },
  {
    d: 'M-220 438C-20 348 154 322 324 384C494 446 630 612 876 606C1122 600 1288 430 1576 390',
    duration: 22,
    delay: -7.4,
    width: 1.4,
  },
  {
    d: 'M-16 692C182 588 350 560 506 628C662 696 808 860 1054 848C1300 836 1418 666 1548 622',
    duration: 19,
    delay: -13.6,
    width: 1.7,
  },
  {
    d: 'M220 -34C370 92 464 212 582 338C700 464 856 536 1032 486C1208 436 1342 252 1478 70',
    duration: 18,
    delay: -9.1,
    width: 1.2,
  },
  {
    d: 'M108 -90C244 74 368 210 506 298C644 386 786 424 926 400C1066 376 1210 290 1420 160',
    duration: 16,
    delay: -3.4,
    width: 1.1,
  },
]

const mobileBeamDefinitions: BeamDefinition[] = [
  {
    d: 'M-72 102C18 136 88 206 138 308C188 410 240 502 342 608C444 714 514 814 560 912',
    duration: 15,
    delay: -4.2,
    width: 1.2,
  },
  {
    d: 'M420 -84C360 12 298 140 258 278C218 416 208 556 246 708C284 860 352 982 458 1080',
    duration: 17,
    delay: -8.4,
    width: 1.5,
  },
  {
    d: 'M-128 284C-6 246 100 254 176 314C252 374 300 470 386 576C472 682 548 780 626 830',
    duration: 19,
    delay: -10.6,
    width: 1.35,
  },
  {
    d: 'M302 -108C228 4 176 118 160 240C144 362 150 488 118 620C86 752 34 866 -34 1010',
    duration: 16,
    delay: -6.1,
    width: 1.25,
  },
  {
    d: 'M-88 540C18 482 126 460 214 506C302 552 356 640 430 726',
    duration: 18,
    delay: -12.2,
    width: 1.4,
  },
]

function BeamCanvas({
  beamDefinitions,
  className,
  idPrefix,
  viewBox,
}: BeamCanvasProps) {
  const gradientId = `${idPrefix}-gradient`
  const filterId = `${idPrefix}-blur`

  return (
    <svg
      className={cn('absolute inset-0 h-full w-full', className)}
      fill="none"
      preserveAspectRatio="none"
      viewBox={viewBox}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#6063ee" stopOpacity="0" />
          <stop offset="18%" stopColor="#6063ee" stopOpacity="0.42" />
          <stop offset="50%" stopColor="#a3a6ff" stopOpacity="0.95" />
          <stop offset="82%" stopColor="#6063ee" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#6063ee" stopOpacity="0" />
        </linearGradient>
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="screen" />
        </filter>
      </defs>

      {beamDefinitions.map((beam, index) => {
        const style: BeamStyle = {
          '--beam-delay': `${beam.delay}s`,
          '--beam-duration': `${beam.duration}s`,
          '--beam-filter': `url(#${filterId})`,
          '--beam-gradient': `url(#${gradientId})`,
          '--beam-width': `${beam.width}`,
        }

        return (
          <g key={`${idPrefix}-${beam.duration}-${index}`}>
            <path
              className="cognix-beam-line"
              d={beam.d}
              pathLength={100}
            />
            <path
              className="cognix-beam-glow"
              d={beam.d}
              pathLength={100}
              style={style}
            />
            <path
              className="cognix-beam-core"
              d={beam.d}
              pathLength={100}
              style={style}
            />
          </g>
        )
      })}
    </svg>
  )
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const idPrefix = useId().replace(/:/g, '')

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <div className="absolute inset-x-[8%] top-[10%] h-32 rounded-full bg-[radial-gradient(circle,rgba(163,166,255,0.22)_0%,rgba(163,166,255,0)_72%)] blur-3xl sm:hidden" />
      <div className="absolute inset-x-[14%] bottom-[18%] h-40 rounded-full bg-[radial-gradient(circle,rgba(96,99,238,0.18)_0%,rgba(96,99,238,0)_72%)] blur-3xl sm:hidden" />
      <div className="absolute inset-x-[12%] top-[12%] hidden h-44 rounded-full bg-[radial-gradient(circle,rgba(163,166,255,0.2)_0%,rgba(163,166,255,0)_72%)] blur-3xl sm:block" />
      <div className="absolute inset-x-[18%] bottom-[16%] hidden h-56 rounded-full bg-[radial-gradient(circle,rgba(96,99,238,0.18)_0%,rgba(96,99,238,0)_72%)] blur-3xl sm:block" />

      <BeamCanvas
        beamDefinitions={mobileBeamDefinitions}
        className="sm:hidden"
        idPrefix={`${idPrefix}-mobile`}
        viewBox="0 0 420 960"
      />
      <BeamCanvas
        beamDefinitions={desktopBeamDefinitions}
        className="hidden sm:block"
        idPrefix={`${idPrefix}-desktop`}
        viewBox="0 0 1440 900"
      />
    </div>
  )
}
