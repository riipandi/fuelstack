import supertest from 'supertest'

import { start } from '../../src/app'

describe('health check', () => {
  it('health check returns 200', async () => {
    jest.useFakeTimers()
    await supertest(start())
      .get('/health')
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true)
      })
  })
})
