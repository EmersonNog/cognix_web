import { Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useCallback, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

import { cn } from '@/lib/utils'

import {
  MARKER_DISTANCE_FACTOR,
  MARKER_LINE_RADIUS,
  MARKER_PIN_HEIGHT,
  MARKER_PIN_RADIUS,
  MARKER_SURFACE_OFFSET,
  MARKER_TOP_OFFSET,
  MARKER_VISIBILITY_THRESHOLD,
} from './constants'
import { latLngToVector3 } from './math'
import type { MarkerProps } from './types'

export function Marker({
  defaultSize,
  marker,
  onClick,
  onHover,
  radius,
}: MarkerProps) {
  const [hovered, setHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const imageGroupRef = useRef<THREE.Group>(null)
  const isVisibleRef = useRef(true)
  const { camera } = useThree()

  const { lineCenter, lineHeight, lineQuaternion, surfacePosition, topPosition } =
    useMemo(() => {
      const nextSurfacePosition = latLngToVector3(
        marker.lat,
        marker.lng,
        radius * MARKER_SURFACE_OFFSET,
      )
      const nextTopPosition = latLngToVector3(
        marker.lat,
        marker.lng,
        radius * MARKER_TOP_OFFSET,
      )
      const direction = nextTopPosition.clone().sub(nextSurfacePosition).normalize()
      const quaternion = new THREE.Quaternion()
      quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)

      return {
        lineCenter: nextSurfacePosition.clone().lerp(nextTopPosition, 0.5),
        lineHeight: nextTopPosition.distanceTo(nextSurfacePosition),
        lineQuaternion: quaternion,
        surfacePosition: nextSurfacePosition,
        topPosition: nextTopPosition,
      }
    }, [marker.lat, marker.lng, radius])

  const markerPixelSize = Math.max(6, (marker.size ?? defaultSize) * 120)

  useFrame(() => {
    if (!imageGroupRef.current) {
      return
    }

    const markerWorldPosition = new THREE.Vector3()
    imageGroupRef.current.getWorldPosition(markerWorldPosition)

    const markerDirection = markerWorldPosition.clone().normalize()
    const cameraDirection = camera.position.clone().normalize()
    const nextIsVisible =
      markerDirection.dot(cameraDirection) > MARKER_VISIBILITY_THRESHOLD

    if (isVisibleRef.current === nextIsVisible) {
      return
    }

    isVisibleRef.current = nextIsVisible
    setIsVisible(nextIsVisible)
  })

  const handlePointerEnter = useCallback(() => {
    setHovered(true)
    onHover?.(marker)
  }, [marker, onHover])

  const handlePointerLeave = useCallback(() => {
    setHovered(false)
    onHover?.(null)
  }, [onHover])

  const handleClick = useCallback(() => {
    onClick?.(marker)
  }, [marker, onClick])

  return (
    <group visible={isVisible}>
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[MARKER_LINE_RADIUS, MARKER_LINE_RADIUS, lineHeight, 8]} />
        <meshBasicMaterial
          color={hovered ? '#ffffff' : '#94a3b8'}
          transparent
          opacity={hovered ? 0.9 : 0.6}
        />
      </mesh>

      <mesh position={surfacePosition} quaternion={lineQuaternion}>
        <coneGeometry args={[MARKER_PIN_RADIUS, MARKER_PIN_HEIGHT, 8]} />
        <meshBasicMaterial color={hovered ? '#f97316' : '#ef4444'} />
      </mesh>

      <group ref={imageGroupRef} position={topPosition}>
        <Html
          transform
          center
          sprite
          distanceFactor={MARKER_DISTANCE_FACTOR}
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            transition: 'opacity 0.15s ease-out',
          }}
        >
          <div style={{ transform: 'translate3d(0, 0, 0)' }}>
            <div
              className={cn(
                'cursor-pointer overflow-hidden rounded-full bg-neutral-900 shadow-lg transition-transform duration-200',
                hovered && 'scale-125 shadow-xl ring-1 ring-white/50',
              )}
              style={{
                height: `${markerPixelSize}px`,
                width: `${markerPixelSize}px`,
              }}
              onClick={handleClick}
              onMouseEnter={handlePointerEnter}
              onMouseLeave={handlePointerLeave}
            >
              <img
                src={marker.src}
                alt={marker.label || 'Marker'}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </Html>
      </group>
    </group>
  )
}
