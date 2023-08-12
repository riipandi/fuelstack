import { log } from '../src/logger'

jest.spyOn(global.console, 'info')

describe('logger', () => {
  it('should prints a message', () => {
    log('hello')
    expect(console.info).toBeCalled()
  })
})
