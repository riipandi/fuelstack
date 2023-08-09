import { cn } from '@acme/helpers'

import { fontMono, fontSans } from '@/utils/fonts'

import '@/app/styles.css'

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' className={cn(fontSans.className, fontMono.variable)}>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='theme-color' content='#004AAD' />
        <meta name='msapplication-TileColor' content='#004AAD' />
        <meta name='msapplication-TileImage' content='/favicon.svg' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body>{children}</body>
    </html>
  )
}
