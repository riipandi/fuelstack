import { createServer } from './server'
import { log } from '@acme/logger'

const port = process.env.PORT || 9090
const server = createServer()

server.listen(port, () => {
  log(`api running on ${port}`)
})
