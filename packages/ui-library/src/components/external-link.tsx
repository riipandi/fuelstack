'use client'

interface ExternalLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export const ExternalLink = ({ children, href, className, ...rest }: ExternalLinkProps) => {
  return (
    <a target='_blank' rel='noreferrer noopener' className={className} href={href} {...rest}>
      {children}
    </a>
  )
}
