import type { ISourceOptions } from '@tsparticles/engine'
import Particles from '@tsparticles/react'
import { memo, type CSSProperties } from 'react'

type HeroParticlesCanvasProps = {
  options: ISourceOptions
}

const HeroParticlesCanvas = memo(function HeroParticlesCanvas({
  options,
}: HeroParticlesCanvasProps) {
  return (
    <Particles
      id="hero-fireflies"
      className="pointer-events-none absolute inset-0 z-0"
      options={options}
    />
  )
})

type HeroParticlesProps = {
  options: ISourceOptions
  particlesReady: boolean
  style: CSSProperties
}

export function HeroParticles({
  options,
  particlesReady,
  style,
}: HeroParticlesProps) {
  return (
    <div className="absolute inset-0 z-0" style={style}>
      {particlesReady ? <HeroParticlesCanvas options={options} /> : null}
    </div>
  )
}
