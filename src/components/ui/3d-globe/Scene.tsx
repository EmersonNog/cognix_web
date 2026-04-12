import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

import { Atmosphere } from './Atmosphere'
import { CAMERA_DISTANCE_MULTIPLIER } from './constants'
import { RotatingGlobe } from './RotatingGlobe'
import type { SceneProps } from './types'

export function Scene({ config }: SceneProps) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, config.radius * CAMERA_DISTANCE_MULTIPLIER)
    camera.lookAt(0, 0, 0)
  }, [camera, config.radius])

  return (
    <>
      <ambientLight intensity={config.ambientIntensity} />
      <hemisphereLight
        args={['#ffffff', '#2a2d30', config.ambientIntensity * 1.05]}
      />

      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />

      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.42}
        color="#ffffff"
      />

      <directionalLight
        position={[config.radius * 4, config.radius * 0.8, -config.radius * 4]}
        intensity={config.pointLightIntensity * 0.28}
        color="#ffffff"
      />

      <directionalLight
        position={[-config.radius * 4, config.radius * 0.75, config.radius * 4]}
        intensity={config.pointLightIntensity * 0.24}
        color="#ffffff"
      />

      <RotatingGlobe config={config} />

      {config.showAtmosphere && (
        <Atmosphere
          blur={config.atmosphereBlur}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          radius={config.radius}
        />
      )}

      <OrbitControls
        makeDefault
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        dampingFactor={0.1}
        enableDamping
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        maxDistance={config.maxDistance}
        minDistance={config.minDistance}
        rotateSpeed={0.4}
      />
    </>
  )
}
