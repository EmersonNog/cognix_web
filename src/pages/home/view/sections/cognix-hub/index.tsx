import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

import { SectionPattern } from '@/components/ui/section-pattern'
import type {
  HomeCognixHubSectionModel,
  HomeCognixHubTopicModel,
} from '@/pages/home/model/home-page.model'

type CognixHubSectionProps = {
  section: HomeCognixHubSectionModel
}

type TopicTheme = {
  accent: string
  accentSoft: string
  border: string
  glow: string
}

const topicThemes: TopicTheme[] = [
  {
    accent: '#7085F5',
    accentSoft: 'rgba(112,133,245,0.14)',
    border: 'rgba(112,133,245,0.22)',
    glow: 'rgba(112,133,245,0.30)',
  },
  {
    accent: '#44D1C2',
    accentSoft: 'rgba(68,209,194,0.14)',
    border: 'rgba(68,209,194,0.22)',
    glow: 'rgba(68,209,194,0.30)',
  },
  {
    accent: '#F5B74C',
    accentSoft: 'rgba(245,183,76,0.16)',
    border: 'rgba(245,183,76,0.24)',
    glow: 'rgba(245,183,76,0.28)',
  },
  {
    accent: '#FF7C68',
    accentSoft: 'rgba(255,124,104,0.15)',
    border: 'rgba(255,124,104,0.24)',
    glow: 'rgba(255,124,104,0.28)',
  },
]

function TopicImageStage({
  theme,
  topic,
}: {
  theme: TopicTheme
  topic: HomeCognixHubTopicModel
}) {
  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[19.5rem] md:max-w-[22rem] lg:max-w-[32rem] lg:translate-x-6 xl:max-w-[36rem] xl:translate-x-8">
      <div
        aria-hidden="true"
        className="absolute inset-[14%] rounded-full blur-3xl"
        style={{ backgroundColor: theme.glow }}
      />

      <img
        src={topic.imageSrc}
        alt={topic.imageAlt}
        loading="lazy"
        draggable={false}
        className="relative block h-auto w-full scale-[1.18] object-contain drop-shadow-[0_22px_54px_rgba(12,20,40,0.22)] sm:scale-[1.12] md:scale-100"
      />
    </div>
  )
}

function TopicCopy({
  theme,
  topic,
}: {
  theme: TopicTheme
  topic: HomeCognixHubTopicModel
}) {
  return (
    <div className="min-w-0 w-full max-w-[18rem] text-center sm:max-w-[22rem] md:max-w-[25rem] lg:max-w-[30rem] lg:text-left xl:max-w-[33rem]">
      <div
        className="mx-auto inline-flex rounded-md px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] uppercase sm:px-3 sm:py-1.5 sm:text-[0.68rem] lg:mx-0"
        style={{
          backgroundColor: theme.accentSoft,
          color: theme.accent,
        }}
      >
        {topic.eyebrow}
      </div>

      <h3 className="mx-auto mt-3 max-w-[11ch] text-[clamp(1.35rem,5vw,3.1rem)] font-semibold leading-[1.03] text-[#060E20] sm:max-w-[12ch] lg:mx-0 lg:max-w-[13ch]">
        {topic.title}
      </h3>

      <p className="mx-auto mt-3 max-w-[30rem] text-[0.83rem] leading-5 text-[#415168] sm:text-[0.92rem] sm:leading-6 lg:mx-0 lg:text-[0.98rem] lg:leading-7">
        {topic.description}
      </p>

      <div
        className="mx-auto mt-3 inline-flex rounded-md border px-2.5 py-1.5 text-[0.72rem] font-medium sm:px-3 sm:py-2 sm:text-[0.82rem] lg:mx-0"
        style={{
          backgroundColor: 'rgba(255,255,255,0.72)',
          borderColor: theme.border,
          color: '#06171A',
        }}
      >
        {topic.proof}
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
        {topic.points.map((point) => (
          <div
            key={point}
            className="rounded-md border px-2.5 py-1.5 text-[0.72rem] font-medium sm:px-3 sm:py-2 sm:text-[0.82rem]"
            style={{
              backgroundColor: 'rgba(255,255,255,0.78)',
              borderColor: theme.border,
              color: '#06171A',
            }}
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CognixHubSection({ section }: CognixHubSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const topicCount = Math.max(section.topics.length, 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const trackX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${Math.max(topicCount - 1, 0) * 100}vw`],
  )

  return (
    <section
      id="cognix-hub"
      ref={sectionRef}
      className="relative z-20 overflow-x-clip overflow-y-visible bg-[#EAF2FF] text-[#060E20] [--launch-banner-offset:5.5rem] sm:[--launch-banner-offset:6rem] lg:[--launch-banner-offset:6.5rem]"
      style={{
        height: `calc(${topicCount * 100}svh + var(--launch-banner-offset))`,
      }}
    >
      <SectionPattern variant="light" className="opacity-46" />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(234,242,255,0)_20%,rgba(234,242,255,0)_78%,rgba(214,228,255,0.42)_100%)]"
      />

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{
            width: `${topicCount * 100}vw`,
            x: trackX,
          }}
        >
          {section.topics.map((topic, index) => {
            const theme = topicThemes[index % topicThemes.length]

            return (
              <article
                key={topic.title}
                className="relative flex h-full w-screen shrink-0 items-center px-4 pb-6 pt-[calc(var(--launch-banner-offset)+0.75rem)] sm:px-5 sm:pb-7 sm:pt-[calc(var(--launch-banner-offset)+1rem)] md:px-8 md:pb-8 md:pt-[calc(var(--launch-banner-offset)+1.15rem)] lg:px-12 lg:pb-8 lg:pt-[calc(var(--launch-banner-offset)+1.35rem)] xl:px-16"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-[10%] top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full blur-3xl lg:block"
                  style={{ backgroundColor: theme.glow }}
                />

                <div className="mx-auto grid w-full max-w-[21rem] justify-items-center gap-4 sm:max-w-[24rem] sm:gap-5 md:max-w-[28rem] md:gap-7 lg:max-w-[82rem] lg:grid-cols-[minmax(0,0.72fr)_minmax(28rem,32rem)] lg:items-center lg:justify-items-stretch lg:gap-12 xl:grid-cols-[minmax(0,0.7fr)_minmax(32rem,36rem)] xl:gap-16">
                  <div className="order-2 lg:order-1">
                    <TopicCopy theme={theme} topic={topic} />
                  </div>

                  <div className="order-1 w-full lg:order-2 lg:justify-self-end lg:pl-4 xl:pl-6">
                    <TopicImageStage theme={theme} topic={topic} />
                  </div>
                </div>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
