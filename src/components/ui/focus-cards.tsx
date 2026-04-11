import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'

import { cn } from '@/lib/utils'

type FocusCardItem = {
  className?: string
  content: ReactNode
  key: string
}

type FocusCardProps = {
  hovered: number | null
  index: number
  item: FocusCardItem
  setHovered: Dispatch<SetStateAction<number | null>>
}

function FocusCard({ hovered, index, item, setHovered }: FocusCardProps) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'relative h-full w-full transition-all duration-300 ease-out',
        hovered !== null && hovered !== index && 'scale-[0.985] blur-[2px] opacity-65',
        hovered === index && 'z-10',
        item.className,
      )}
    >
      {item.content}
    </div>
  )
}

type FocusCardsProps = {
  cards: FocusCardItem[]
  className?: string
}

export function FocusCards({ cards, className }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className={cn('w-full', className)}>
      {cards.map((card, index) => (
        <FocusCard
          key={card.key}
          hovered={hovered}
          index={index}
          item={card}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
