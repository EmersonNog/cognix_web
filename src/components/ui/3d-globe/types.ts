export interface GlobeMarker {
  id?: string
  label?: string
  lat: number
  lng: number
  size?: number
  src: string
}

export interface Globe3DConfig {
  ambientIntensity?: number
  atmosphereBlur?: number
  atmosphereColor?: string
  atmosphereIntensity?: number
  autoRotateSpeed?: number
  backgroundColor?: string | null
  bumpMapUrl?: string
  bumpScale?: number
  enablePan?: boolean
  enableZoom?: boolean
  globeColor?: string
  initialRotation?: { x: number; y: number }
  markerSize?: number
  maxDistance?: number
  minDistance?: number
  pointLightIntensity?: number
  radius?: number
  showAtmosphere?: boolean
  showWireframe?: boolean
  textureUrl?: string
  wireframeColor?: string
}

export type Globe3DProps = {
  className?: string
  config?: Globe3DConfig
  markers?: GlobeMarker[]
  onMarkerClick?: (marker: GlobeMarker) => void
  onMarkerHover?: (marker: GlobeMarker | null) => void
}

export type MarkerProps = {
  defaultSize: number
  marker: GlobeMarker
  onClick?: (marker: GlobeMarker) => void
  onHover?: (marker: GlobeMarker | null) => void
  radius: number
}

export type RotatingGlobeProps = {
  config: Required<Globe3DConfig>
  markers: GlobeMarker[]
  onMarkerClick?: (marker: GlobeMarker) => void
  onMarkerHover?: (marker: GlobeMarker | null) => void
}

export type AtmosphereProps = {
  blur: number
  color: string
  intensity: number
  radius: number
}

export type SceneProps = {
  config: Required<Globe3DConfig>
  markers: GlobeMarker[]
  onMarkerClick?: (marker: GlobeMarker) => void
  onMarkerHover?: (marker: GlobeMarker | null) => void
}
