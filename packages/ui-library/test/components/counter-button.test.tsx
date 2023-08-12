import { createRoot } from 'react-dom/client'

import { CounterButton } from '../../src/components/counter-button'

describe('CounterButton', () => {
  it('renders without crashing', () => {
    const container = createRoot(document.createElement('div'))
    container.render(<CounterButton />)
    container.unmount()
  })
})
