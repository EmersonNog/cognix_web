import type { ReactNode } from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

type StickyBannerProps = {
  children: ReactNode
  className?: string
}

export function StickyBanner({
  children,
  className,
}: StickyBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={cn('fixed inset-x-0 top-0 z-[60] px-3 pt-3 sm:px-4 sm:pt-4', className)}
    >
      {children}
    </motion.div>
  )
}
