import supertest from 'supertest'
import { start } from '../app'

describe('server', () => {
  it('health check returns 200', async () => {
    await supertest(start())
      .get('/health')
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true)
      })
  })
})
