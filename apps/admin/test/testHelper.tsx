import { cleanup, render as rtlRender } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

export const render = (ui: React.ReactElement, options = {}) =>
  rtlRender(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
