import type { V2_MetaFunction } from '@remix-run/node'
import { CounterButton, ExternalLink } from '@acme/ui'

export const meta: V2_MetaFunction = () => [{ title: 'Blog | FuelStack' }]

export default function Index() {
  return (
    <div className='flex min-h-screen flex-col bg-white pb-12 pt-16 dark:bg-black'>
      <main className='mx-auto flex w-full max-w-4xl grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <div className='text-center'>
            <h1 className='mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:invert sm:text-3xl lg:text-5xl'>
              Remix App
            </h1>
            <div className='mt-12 flex items-center justify-center space-x-3'>
              <CounterButton />
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center'>
          <p className='description'>
            Built With <ExternalLink href='https://turbo.build/repo'>Turborepo</ExternalLink> +{' '}
            <ExternalLink href='https://remix.run/'>Remix</ExternalLink>
          </p>
        </div>
      </main>
      <footer className='mx-auto w-full max-w-7xl shrink-0 px-4 sm:px-6 lg:px-8'>
        <p className='flex justify-center'>
          <span className='mr-1 text-gray-600 dark:text-gray-200'>Brought to you by</span>
          <ExternalLink
            href='https://github.com/riipandi?source=fuelstack'
            className='text-primary-800 dark:text-primary-500 dark:hover:text-primary-700 group inline-flex items-center space-x-0.5 hover:text-gray-600'
          >
            Aris Ripandi
          </ExternalLink>
        </p>
      </footer>
    </div>
  )
}
