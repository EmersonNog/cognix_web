import { startTransition, useState, type ReactNode } from 'react'

import { GridDotBackground } from '@/components/ui/grid-dot-background'
import { cn } from '@/lib/utils'
import type {
  OverviewSectionModel,
  OverviewTrainingAreaStatus,
} from '@/pages/home/model/overview-section.model'
import {
  Activity,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Target,
  Waypoints,
  type LucideIcon,
} from 'lucide-react'

type Tone = 'violet' | 'mint' | 'amber' | 'sky'

type CarouselCard = {
  label: string
  tabLabel: string
  title: string
  description: string
  accent: Tone
  icon: LucideIcon
  content: ReactNode
}

type FeaturePill = {
  label: string
  accent: Tone
}

const supportCopyClass =
  'text-sm font-medium leading-5 tracking-[-0.02em] text-[#16233F]'
const helperCopyClass = 'text-[13px] leading-5 text-[#5B6888]'

function toneClasses(tone: Tone) {
  switch (tone) {
    case 'mint':
      return {
        text: 'text-[#2E8F79]',
        border: 'border-[#89E6CB]/28',
        softBg: 'bg-[#E7FBF4]',
        strongBg: 'bg-[#89E6CB]',
        glowBg: 'bg-[#89E6CB]/18',
      }
    case 'amber':
      return {
        text: 'text-[#A36B11]',
        border: 'border-[#FFD07E]/30',
        softBg: 'bg-[#FFF5E1]',
        strongBg: 'bg-[#FFD07E]',
        glowBg: 'bg-[#FFD07E]/18',
      }
    case 'sky':
      return {
        text: 'text-[#2A78AA]',
        border: 'border-[#8FD4FF]/28',
        softBg: 'bg-[#E8F6FF]',
        strongBg: 'bg-[#8FD4FF]',
        glowBg: 'bg-[#8FD4FF]/18',
      }
    case 'violet':
    default:
      return {
        text: 'text-[#5459D8]',
        border: 'border-[#A3A6FF]/28',
        softBg: 'bg-[#EFF0FF]',
        strongBg: 'bg-[#A3A6FF]',
        glowBg: 'bg-[#A3A6FF]/18',
      }
  }
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#B9C7E0] bg-[#EAF0FA]/96 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#40516F] sm:text-[11px] sm:tracking-[0.28em]">
      <Icon className="h-3.5 w-3.5 text-[#6063EE]" strokeWidth={2} />
      <span className="truncate">{children}</span>
    </div>
  )
}

function CarouselNavButton({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
}) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-[#B7C5DF] bg-[#EAF0FA]/96 text-[#364461] transition hover:border-[#8D98E0]/60 hover:bg-[#DDE6F8] hover:text-[#1F2B45] sm:h-9 sm:w-9"
      aria-label={direction === 'prev' ? 'Card anterior' : 'Proximo card'}
    >
      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
    </button>
  )
}

function FeaturePillTag({
  pill,
  className,
}: {
  pill: FeaturePill
  className?: string
}) {
  const tone = toneClasses(pill.accent)

  return (
    <span
      className={cn(
        'inline-flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[8.5px] font-medium uppercase tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em]',
        tone.border,
        tone.softBg,
        tone.text,
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tone.strongBg)} />
      <span className="min-w-0 truncate">{pill.label}</span>
    </span>
  )
}

function CompactFeatureCard({
  title,
  detail,
  accent,
}: {
  title: string
  detail: string
  accent: Tone
}) {
  const tone = toneClasses(accent)

  return (
    <div className={cn('rounded-[16px] border bg-[#DCE5F2]/96 px-3 py-3', tone.border)}>
      <div className="flex items-center gap-2">
        <span className={cn('h-2 w-2 rounded-full', tone.strongBg)} />
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6A789B]">
          {title}
        </p>
      </div>
      <p className={cn('mt-2', supportCopyClass)}>{detail}</p>
    </div>
  )
}

function PerformanceFeatureCard({
  title,
  detail,
  accent,
}: {
  title: string
  detail: string
  accent: Tone
}) {
  const tone = toneClasses(accent)

  return (
    <div
      className={cn(
        'flex flex-col rounded-[18px] border bg-[linear-gradient(180deg,rgba(221,231,243,0.98)_0%,rgba(211,223,239,0.96)_100%)] px-4 py-3.5',
        tone.border,
      )}
    >
      <div className="flex items-center gap-2">
        <span className={cn('h-2.5 w-2.5 rounded-full', tone.strongBg)} />
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6A789B]">
          {title}
        </p>
      </div>
      <p className={cn('mt-2.5', supportCopyClass)}>{detail}</p>
    </div>
  )
}

function PerformanceSignalTag({
  label,
  accent,
}: FeaturePill) {
  const tone = toneClasses(accent)

  return (
    <div
      className={cn(
        'inline-flex min-w-0 w-full items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] sm:text-[9.5px]',
        tone.border,
        tone.softBg,
        tone.text,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tone.strongBg)} />
      <span className="min-w-0 truncate">{label}</span>
    </div>
  )
}

function trainingStatusDot(status: OverviewTrainingAreaStatus) {
  switch (status) {
    case 'completed':
      return 'bg-[#89E6CB]'
    case 'resume':
      return 'bg-[#FFD07E]'
    case 'inProgress':
    default:
      return 'bg-[#8FD4FF]'
  }
}

function MiniArea({
  title,
  accent,
  subtitle,
  status,
}: {
  title: string
  accent: Tone
  subtitle: string
  status: OverviewTrainingAreaStatus
}) {
  const tone = toneClasses(accent)

  return (
    <div className={cn('rounded-[16px] border bg-[#DCE5F2]/96 px-3 py-3', tone.border)}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold leading-5 text-[#16233F]">{title}</p>
        <span className={cn('h-2.5 w-2.5 rounded-full', trainingStatusDot(status))} />
      </div>
      <p className={cn('mt-1.5', helperCopyClass)}>{subtitle}</p>
    </div>
  )
}

function CarouselStageCard({
  card,
}: {
  card: CarouselCard
}) {
  const tone = toneClasses(card.accent)
  const Icon = card.icon

  return (
    <article className="relative mx-auto w-full min-w-0 max-w-[24rem] overflow-hidden rounded-[24px] border border-[#BCCBE1] bg-[linear-gradient(180deg,rgba(239,244,251,0.99)_0%,rgba(228,236,247,0.97)_100%)] p-3.5 backdrop-blur-xl min-h-[17.5rem] sm:rounded-[26px] sm:p-4 sm:min-h-[18.75rem]">
      <div className={cn('pointer-events-none absolute -right-10 top-3 h-28 w-28 rounded-full blur-3xl', tone.glowBg)} />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FFFFFF]/80 to-transparent" />

      <div className="relative z-10">
        <div className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1.5', tone.border, tone.softBg)}>
          <Icon className={cn('h-3.5 w-3.5', tone.text)} />
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#556482] sm:text-[10px] sm:tracking-[0.2em]">
            {card.label}
          </span>
        </div>

        <h3 className="mt-3 text-[0.96rem] font-medium leading-tight tracking-[-0.05em] text-[#16233F] sm:text-[1.16rem]">
          {card.title}
        </h3>
        <p className="mt-2 w-full break-words text-[0.86rem] leading-6 text-[#5B6888] sm:text-[0.9rem]">
          {card.description}
        </p>
        <div className="mt-3.5">{card.content}</div>
      </div>
    </article>
  )
}

export function OverviewSectionView({
  model,
}: {
  model: OverviewSectionModel
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const featuredAreas = model.training.areas.slice(0, 4)
  const sellingPoints: FeaturePill[] = [
    { label: 'inteligencia artificial', accent: 'sky' },
    { label: 'rotina guiada', accent: 'violet' },
    { label: 'mapa mental', accent: 'mint' },
  ]

  const carouselCards: CarouselCard[] = [
    {
      label: model.training.label,
      tabLabel: 'Treino',
      title: 'Escolha uma area e continue de onde parou',
      description: 'Entre por frentes reais do ENEM e continue de onde parou.',
      accent: 'sky',
      icon: Waypoints,
      content: (
        <>
          <div className="grid w-full grid-cols-3 gap-2">
            <FeaturePillTag
              pill={{ label: 'em andamento', accent: 'sky' }}
              className="w-full justify-center"
            />
            <FeaturePillTag
              pill={{ label: 'concluido', accent: 'mint' }}
              className="w-full justify-center"
            />
            <FeaturePillTag
              pill={{ label: 'retomar', accent: 'amber' }}
              className="w-full justify-center"
            />
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {featuredAreas.map((area) => (
              <MiniArea
                key={area.title}
                title={area.title}
                accent={area.tone}
                subtitle={area.subtitle}
                status={area.status}
              />
            ))}
          </div>
        </>
      ),
    },
    {
      label: model.plan.label,
      tabLabel: 'Plano',
      title: 'Organize a semana em minutos',
      description: 'Monte o plano da semana antes de entrar no simulado.',
      accent: 'violet',
      icon: Target,
      content: (
        <>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <CompactFeatureCard
              title="ritmo semanal"
              detail="Ritmo, carga e meta definidos em minutos."
              accent="violet"
            />
            <CompactFeatureCard
              title="prioridades"
              detail="Materias e melhor horario entram juntos."
              accent="sky"
            />
          </div>

          <div className="mt-3 inline-flex max-w-full flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <FeaturePillTag pill={{ label: 'ritmo', accent: 'violet' }} />
              <FeaturePillTag pill={{ label: 'carga diaria', accent: 'sky' }} />
              <FeaturePillTag pill={{ label: 'meta semanal', accent: 'amber' }} />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <FeaturePillTag pill={{ label: 'revisao', accent: 'violet' }} />
              <FeaturePillTag pill={{ label: 'cobertura', accent: 'sky' }} />
              <FeaturePillTag pill={{ label: 'prioridade', accent: 'amber' }} />
            </div>
          </div>
        </>
      ),
    },
    {
      label: model.recommendations.label,
      tabLabel: 'Recomendacoes',
      title: 'Saiba o que estudar agora',
      description: 'As recomendacoes mudam conforme o momento real do estudo.',
      accent: 'mint',
      icon: BrainCircuit,
      content: (
        <>
          <div className="rounded-[18px] border border-[#BBC9DE] bg-[#DCE5F2]/96 px-4 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#89E6CB]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6A789B]">
                Leitura automatica
              </p>
            </div>
            <p className={cn('mt-2', supportCopyClass)}>
              O app entende o momento do estudo antes de sugerir o proximo passo.
            </p>
            <p className={cn('mt-1.5', helperCopyClass)}>
              Desempenho recente, prioridades do plano e cobertura de questoes entram juntos nessa decisao.
            </p>
          </div>

          <div className="mt-3 grid w-full grid-cols-2 gap-2">
            <FeaturePillTag
              pill={{ label: 'desempenho', accent: 'mint' }}
              className="w-full justify-start"
            />
            <FeaturePillTag
              pill={{ label: 'pontos de atencao', accent: 'amber' }}
              className="w-full justify-start"
            />
            <FeaturePillTag
              pill={{ label: 'prioridades salvas', accent: 'violet' }}
              className="w-full justify-start"
            />
            <FeaturePillTag
              pill={{ label: 'pouca cobertura', accent: 'sky' }}
              className="w-full justify-start"
            />
          </div>
        </>
      ),
    },
    {
      label: model.performance.label,
      tabLabel: 'Painel',
      title: 'Entenda o que melhorar sem planilha',
      description: 'O app organiza acerto, ritmo e cobertura sem consolidacao manual.',
      accent: 'amber',
      icon: Activity,
      content: (
        <>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <PerformanceFeatureCard
              title="leitura pronta"
              detail="Disciplina, ritmo e alertas prontos."
              accent="amber"
            />
            <PerformanceFeatureCard
              title="decisao rapida"
              detail="Voce sabe o que ajustar sem planilha."
              accent="violet"
            />
          </div>

          <div className="mt-3 rounded-[20px] border border-[#BBC9DE] bg-[linear-gradient(180deg,rgba(221,231,243,0.98)_0%,rgba(210,222,238,0.96)_100%)] px-4 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD07E]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6A789B]">
                O painel ja mostra
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <PerformanceSignalTag label="acerto atual" accent="violet" />
              <PerformanceSignalTag label="tempo medio" accent="amber" />
              <PerformanceSignalTag label="cobertura ativa" accent="sky" />
              <PerformanceSignalTag label="foco imediato" accent="mint" />
            </div>
          </div>
        </>
      ),
    },
  ]

  const activeCard = carouselCards[activeIndex]

  const goToIndex = (index: number) => {
    startTransition(() => {
      setActiveIndex(index)
    })
  }

  const goToPrevious = () => {
    goToIndex((activeIndex - 1 + carouselCards.length) % carouselCards.length)
  }

  const goToNext = () => {
    goToIndex((activeIndex + 1) % carouselCards.length)
  }

  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F9FBFF_0%,#F3F6FD_24%,#EEF2FA_100%)] text-[#060E20] xl:min-h-[100svh]"
    >
      <GridDotBackground className="opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(249,251,255,0.48)_0%,rgba(243,246,253,0.6)_24%,rgba(238,242,250,0.78)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center px-4 py-12 sm:px-8 md:px-10 md:py-16 lg:px-14 xl:min-h-[100svh] xl:py-8">
        <div className="grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(16rem,0.9fr)_minmax(20rem,1.1fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(18rem,0.92fr)_minmax(22rem,1.08fr)]">
          <div className="min-w-0 lg:self-center lg:pr-4">
            <SectionLabel icon={Sparkles}>{model.eyebrow}</SectionLabel>
            <h2
              className="mt-4 max-w-[12ch] text-[clamp(1.95rem,9vw,3.85rem)] leading-[0.94] tracking-[-0.06em] text-[#081225] sm:max-w-[11ch] sm:text-[clamp(2.2rem,10vw,3.85rem)]"
              style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 400 }}
            >
              {model.title}
            </h2>
            <p className="mt-4 max-w-[30rem] break-words text-[0.92rem] leading-7 text-[#4F5D80] sm:text-[0.96rem]">
              Cognix monta a semana, sugere o proximo treino, organiza o mapa mental com IA
              e traduz desempenho em decisao. Tecnologia aplicada ao estudo torna a aprendizagem mais eficiente e eficaz.
            </p>

            <div className="mt-6 flex max-w-[32rem] flex-wrap gap-2">
              {sellingPoints.map((point) => (
                <FeaturePillTag key={point.label} pill={point} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start lg:items-end lg:justify-center xl:items-center">
            <div className="flex w-full min-w-0 max-w-[24rem] flex-col gap-1 rounded-[16px] border border-[#BAC9E0]/95 bg-[#E7EDF8]/92 px-2.5 py-1.5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[18px] sm:px-4 sm:py-3 lg:max-w-[22rem] xl:max-w-[24rem]">
              <div className="min-w-0">
                <SectionLabel icon={activeCard.icon}>{activeCard.label}</SectionLabel>
                <p className="mt-0.5 text-[0.82rem] leading-5 text-[#3E4E6D] sm:mt-2 sm:text-sm sm:leading-6">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(carouselCards.length).padStart(2, '0')}
                </p>
              </div>

              <div className="flex items-center gap-1 self-end sm:gap-2 sm:self-auto">
                <CarouselNavButton direction="prev" onClick={goToPrevious} />
                <CarouselNavButton direction="next" onClick={goToNext} />
              </div>
            </div>

            <div className="mt-1.5 flex w-full min-w-0 max-w-[24rem] gap-1.5 sm:mt-3 sm:gap-2 lg:max-w-[22rem] xl:max-w-[24rem]">
              {carouselCards.map((card, index) => {
                const tone = toneClasses(card.accent)

                return (
                  <button
                    key={card.tabLabel}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={cn(
                      'h-1.5 flex-1 rounded-full transition',
                      index === activeIndex ? tone.strongBg : 'bg-[#C7D3E6] hover:bg-[#B4C4DE]',
                    )}
                    aria-label={`Ir para ${card.label}`}
                  />
                )
              })}
            </div>

            <div className="mt-2 w-full min-w-0 max-w-[24rem] overflow-hidden sm:mt-4 lg:max-w-[22rem] xl:max-w-[24rem]">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {carouselCards.map((card) => (
                  <div key={card.label} className="min-w-full">
                    <CarouselStageCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
