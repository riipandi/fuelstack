'use client'

import { cn } from '@acme/helpers'

interface ExternalLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export const ExternalLink = ({ children, href, className, ...rest }: ExternalLinkProps) => {
  return (
    <a target='_blank' rel='noreferrer noopener' className={cn(className)} href={href} {...rest}>
      {children}
    </a>
  )
}
