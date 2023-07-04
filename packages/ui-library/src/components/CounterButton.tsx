import * as React from 'react'

export const CounterButton = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className='rounded-md bg-gray-100 p-12'>
      <p className='mb-8'>
        This component is from <code className='rounded-md bg-gray-300 px-2 py-1'>ui</code>
      </p>
      <div>
        <button
          type='button'
          className='inline-block cursor-pointer rounded-md bg-black px-4 py-2 text-white'
          onClick={() => setCount((c) => c + 1)}
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}
