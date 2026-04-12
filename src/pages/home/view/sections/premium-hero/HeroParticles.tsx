import type { ISourceOptions } from '@tsparticles/engine'
import Particles from '@tsparticles/react'
import { memo, type CSSProperties } from 'react'

type HeroParticlesCanvasProps = {
  id: string
  options: ISourceOptions
}

const HeroParticlesCanvas = memo(function HeroParticlesCanvas({
  id,
  options,
}: HeroParticlesCanvasProps) {
  return (
    <Particles
      id={id}
      className="pointer-events-none absolute inset-0 z-0"
      options={options}
    />
  )
})

type HeroParticlesProps = {
  id?: string
  options: ISourceOptions
  particlesReady: boolean
  style: CSSProperties
}

export function HeroParticles({
  id = 'premium-hero-particles',
  options,
  particlesReady,
  style,
}: HeroParticlesProps) {
  return (
    <div className="absolute inset-0 z-0" style={style}>
      {particlesReady ? <HeroParticlesCanvas id={id} options={options} /> : null}
    </div>
  )
}
