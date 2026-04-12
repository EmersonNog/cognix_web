import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'

import { cn } from '@/lib/utils'

import {
  CAMERA_DISTANCE_MULTIPLIER,
  defaultConfig,
} from './constants'
import { LoadingFallback } from './LoadingFallback'
import { Scene } from './Scene'
import type { Globe3DConfig, Globe3DProps } from './types'

export type { Globe3DConfig }

export function Globe3D({
  className,
  config = {},
}: Globe3DProps) {
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config],
  )

  return (
    <div className={cn('relative h-[500px] w-full', className)}>
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        camera={{
          far: 1000,
          fov: 45,
          near: 0.1,
          position: [0, 0, mergedConfig.radius * CAMERA_DISTANCE_MULTIPLIER],
        }}
        style={{
          background: mergedConfig.backgroundColor || 'transparent',
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene config={mergedConfig} />
        </Suspense>
      </Canvas>
    </div>
  )
}
