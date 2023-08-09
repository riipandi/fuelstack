import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CounterButton } from '../src/components/counter-button'

/**
 * @jest-environment jsdom
 */
describe('CounterButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CounterButton />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
