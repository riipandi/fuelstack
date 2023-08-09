describe('logger', () => {
  it('prints a message', () => {
    console.log('hello')
    expect(console.log).toBeCalled()
  })
})
