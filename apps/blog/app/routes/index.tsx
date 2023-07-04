import { CounterButton, ExternalLink } from '@acme/ui'

export default function Index() {
  return (
    <div className='flex min-h-screen flex-col bg-white pb-12 pt-16 dark:bg-black'>
      <h1 className='title'>
        Blog <br />
        <span>FuelStack</span>
      </h1>
      <CounterButton />
      <p className='description'>
        Built With <ExternalLink href='https://turbo.build/repo'>Turborepo</ExternalLink> +{' '}
        <ExternalLink href='https://remix.run/'>Remix</ExternalLink>
      </p>
    </div>
  )
}
