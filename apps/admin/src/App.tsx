import * as React from 'react'
import { CounterButton, ExternalLink } from '@acme/ui'

function App() {
  return (
    <div className='container'>
      <h1 className='title'>
        Admin <br />
        <span>FuelStack</span>
      </h1>
      <CounterButton />
      <p className='description'>
        Built With <ExternalLink href='https://turbo.build/repo'>Turborepo</ExternalLink> +{' '}
        <ExternalLink href='https://vitejs.dev/'>Vite</ExternalLink>
      </p>
    </div>
  )
}

export default App
