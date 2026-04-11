import { useTexture } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import * as THREE from 'three'

import { Marker } from './Marker'
import type { RotatingGlobeProps } from './types'

export function RotatingGlobe({
  config,
  markers,
  onMarkerClick,
  onMarkerHover,
}: RotatingGlobeProps) {
  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ])

  const earthMap = useMemo(() => {
    const texture = earthTexture.clone()
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 16
    texture.needsUpdate = true
    return texture
  }, [earthTexture])

  const bumpMap = useMemo(() => {
    const texture = bumpTexture.clone()
    texture.anisotropy = 8
    texture.needsUpdate = true
    return texture
  }, [bumpTexture])

  useEffect(() => {
    return () => {
      earthMap.dispose()
      bumpMap.dispose()
    }
  }, [bumpMap, earthMap])

  const geometry = useMemo(
    () => new THREE.SphereGeometry(config.radius, 64, 64),
    [config.radius],
  )

  const wireframeGeometry = useMemo(
    () => new THREE.SphereGeometry(config.radius * 1.002, 32, 16),
    [config.radius],
  )

  return (
    <group rotation={[config.initialRotation.x, config.initialRotation.y, 0]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          map={earthMap}
          bumpMap={bumpMap}
          color={config.globeColor}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.7}
          metalness={0}
        />
      </mesh>

      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial
            color={config.wireframeColor}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      )}

      {markers.map((marker) => (
        <Marker
          key={marker.id ?? `${marker.lat}-${marker.lng}`}
          defaultSize={config.markerSize}
          marker={marker}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
          radius={config.radius}
        />
      ))}
    </group>
  )
}
