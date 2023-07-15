'use client'

import { fontMono, fontSans } from '@/utils/fonts'
import { cn } from '@acme/ui'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        fontSans.className,
        fontMono.variable,
        'flex min-h-screen flex-col bg-white pb-12 pt-16 dark:bg-black'
      )}
    >
      {children}
    </div>
  )
}
