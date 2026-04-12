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
}

export type RotatingGlobeProps = {
  config: Required<Globe3DConfig>
}

export type AtmosphereProps = {
  blur: number
  color: string
  intensity: number
  radius: number
}

export type SceneProps = {
  config: Required<Globe3DConfig>
}
