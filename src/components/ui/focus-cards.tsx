import {
  memo,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export type FocusCardItem = {
  title: string
  description?: string
  label?: string
  badge?: string
  src?: string
  className?: string
  decorationClassName?: string
  labelClassName?: string
  badgeClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  visual?: ReactNode
}

type FocusCardProps = {
  card: FocusCardItem
  index: number
  hovered: number | null
  setHovered: Dispatch<SetStateAction<number | null>>
  inactiveCardClassName?: string
  itemClassName?: string
}

const FocusCard = memo(function FocusCard({
  card,
  index,
  hovered,
  setHovered,
  inactiveCardClassName,
  itemClassName,
}: FocusCardProps) {
  const isActive = hovered === index

  return (
    <article
      className={cn(
        'group relative min-h-[11.5rem] w-full overflow-hidden rounded-[24px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(20,31,56,0.92)_0%,rgba(10,20,43,0.88)_100%)] p-4 shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_24px_60px_rgba(2,8,20,0.42)] backdrop-blur-xl transition-all duration-500 ease-out sm:min-h-[13rem] sm:rounded-[28px] sm:p-5 lg:min-h-[13.5rem] lg:p-5',
        isActive &&
          'border-[rgba(163,166,255,0.3)] shadow-[0_0_0_1px_rgba(163,166,255,0.08),0_0_36px_rgba(96,99,238,0.16),0_32px_80px_rgba(2,8,20,0.5)]',
        hovered !== null &&
          hovered !== index &&
          (inactiveCardClassName ?? 'scale-[0.985] blur-[1px] saturate-50'),
        itemClassName,
        card.className,
      )}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {card.src ? (
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover opacity-28 transition duration-500"
        />
      ) : null}

      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-80 transition duration-500',
          isActive ? 'opacity-100' : undefined,
          card.decorationClassName,
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.16)_0%,rgba(5,10,24,0.18)_36%,rgba(5,10,24,0.84)_100%)]" />
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_42%)] transition duration-500',
          isActive ? 'opacity-100' : 'opacity-0',
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,rgba(163,166,255,0)_0%,rgba(163,166,255,0.7)_50%,rgba(163,166,255,0)_100%)] transition duration-500',
          isActive ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div
        className={cn(
          'relative z-10 flex h-full flex-col',
        )}
      >
        <div>
          {(card.label || card.badge) && (
            <div className="flex items-center justify-between gap-4">
              <span
                className={cn(
                  'text-[9px] uppercase tracking-[0.18em] text-[color:var(--cognix-accent)]/82 sm:text-[10px] sm:tracking-[0.22em]',
                  card.labelClassName,
                )}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {card.label}
              </span>

              {card.badge ? (
                <span
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(163,166,255,0.18)] bg-[rgba(163,166,255,0.06)] text-[10px] uppercase tracking-[0.14em] text-[color:var(--cognix-text-strong)] transition duration-300 sm:h-9 sm:w-9 sm:text-[11px] sm:tracking-[0.18em]',
                    isActive &&
                      'border-[rgba(163,166,255,0.34)] bg-[rgba(163,166,255,0.12)] shadow-[0_0_24px_rgba(96,99,238,0.22)]',
                    card.badgeClassName,
                  )}
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {card.badge}
                </span>
              ) : null}
            </div>
          )}

          <div
            className={cn(
              'mt-auto',
            )}
          >
            <div>
              <h3
                className={cn(
                  'max-w-[16ch] text-[19px] font-normal leading-[1.24] text-[color:var(--cognix-text-strong)] transition duration-300 sm:max-w-[18ch] sm:text-[24px] lg:text-[22px]',
                  isActive ? 'translate-x-0.5' : undefined,
                  card.titleClassName,
                )}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {card.title}
              </h3>

              {card.description ? (
                <p
                  className={cn(
                    'mt-3 max-w-[28ch] text-[12px] leading-[1.6] text-[color:var(--cognix-muted-strong)]/82 transition duration-300 sm:max-w-[30ch] sm:text-[14px] sm:leading-[1.7]',
                    isActive
                      ? 'text-[color:var(--cognix-muted-strong)]/94'
                      : undefined,
                    card.descriptionClassName,
                  )}
                >
                  {card.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {card.visual ? (
          <div className="mt-3 h-[8.5rem] w-full max-w-[25rem] sm:mt-4 sm:h-[9rem]">
            {card.visual}
          </div>
        ) : null}
      </div>
    </article>
  )
})

export function FocusCards({
  cards,
  className,
  inactiveCardClassName,
  carouselOnTablet = false,
}: {
  cards: FocusCardItem[]
  className?: string
  inactiveCardClassName?: string
  carouselOnTablet?: boolean
}) {
  const [hovered, setHovered] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const cardWidth = container.firstElementChild?.clientWidth ?? 0
    const gap = 16
    const amount = cardWidth > 0 ? cardWidth + gap : 320

    container.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full">
      {carouselOnTablet ? (
        <div className="mb-3 hidden items-center justify-end gap-3 md:flex lg:hidden">
          <button
            type="button"
            aria-label="Voltar cards"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(163,166,255,0.16)] bg-[rgba(6,14,32,0.26)] text-[color:var(--cognix-accent)] transition hover:border-[rgba(163,166,255,0.3)] hover:bg-[rgba(20,31,56,0.48)]"
            onClick={() => scrollCarousel('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Avancar cards"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(163,166,255,0.16)] bg-[rgba(6,14,32,0.26)] text-[color:var(--cognix-accent)] transition hover:border-[rgba(163,166,255,0.3)] hover:bg-[rgba(20,31,56,0.48)]"
            onClick={() => scrollCarousel('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      <div
        ref={containerRef}
        className={cn(
          carouselOnTablet
            ? 'grid w-full grid-cols-1 gap-4 md:flex md:snap-x md:snap-mandatory md:gap-4 md:overflow-x-auto md:pb-2 md:pl-6 md:[-ms-overflow-style:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:pl-0'
            : 'grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {cards.map((card, index) => (
          <FocusCard
            key={`${card.title}-${index}`}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            inactiveCardClassName={inactiveCardClassName}
            itemClassName={
              carouselOnTablet
                ? 'md:w-[28rem] md:shrink-0 md:snap-center lg:w-full'
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}
