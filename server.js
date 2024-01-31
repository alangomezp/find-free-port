const http = require('node:http')
const findAvailablePort = require('./find-available-port.js')

const desiredPort = process.env.PORT ?? 4200

const httpServer = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello World')
});

(
  async () => {
    const availablePort = await findAvailablePort(desiredPort)
    httpServer.listen(availablePort, () => {
      console.log(`Server is listening on port http://localhost:${availablePort}`)
    })
  }
)()
