'use client'

import { useState } from 'react'

export const CounterButton = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='space-y-8 rounded-md bg-gray-100 p-12'>
      <p>
        This component is from <code className='rounded-md bg-gray-300 px-2 py-1'>@acme/ui</code>
      </p>
      <button
        type='button'
        className='inline-block w-full cursor-pointer rounded-md bg-black px-4 py-2 text-white'
        onClick={() => setCount((c) => c + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}
