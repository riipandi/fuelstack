import Image from 'next/image'
import { Metadata } from 'next/types'
import { CounterButton, ExternalLink } from '@acme/ui'
import NextLogo from '~/next.svg'

export const metadata: Metadata = {
  title: 'Website | FuelStack',
}

export default function Page() {
  return (
    <>
      <main className='mx-auto flex w-full max-w-4xl grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <div className='text-center'>
            <h1 className='mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:invert sm:text-3xl lg:text-5xl'>
              Next.js App
            </h1>
            <div className='mt-12 flex items-center justify-center space-x-3'>
              <CounterButton />
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center'>
          <ExternalLink
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://nextjs.org'
          >
            <span className='font-medium tracking-wide dark:invert'>Powered by</span>
            <Image src={NextLogo} alt='Vercel Logo' className='h-4 w-auto dark:invert' priority />
          </ExternalLink>
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
    </>
  )
}
