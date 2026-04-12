import type { Globe3DConfig } from './types'

export const DEFAULT_EARTH_TEXTURE =
  'https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg'
export const DEFAULT_BUMP_TEXTURE =
  'https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png'

export const CAMERA_DISTANCE_MULTIPLIER = 3.5

export const defaultConfig: Required<Globe3DConfig> = {
  ambientIntensity: 0.6,
  atmosphereBlur: 2,
  atmosphereColor: '#4da6ff',
  atmosphereIntensity: 0.5,
  autoRotateSpeed: 0.3,
  backgroundColor: null,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  bumpScale: 1,
  enablePan: false,
  enableZoom: false,
  globeColor: '#1a1a2e',
  initialRotation: { x: 0, y: 0 },
  maxDistance: 15,
  minDistance: 5,
  pointLightIntensity: 1.5,
  radius: 2,
  showAtmosphere: false,
  showWireframe: false,
  textureUrl: DEFAULT_EARTH_TEXTURE,
  wireframeColor: '#4a9eff',
}
