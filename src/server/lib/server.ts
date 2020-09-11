import express from 'express'
import http from 'http'
import path from 'path'
import fallback from 'express-history-api-fallback'

export async function createServer() {
  const app = express()
  const server = new http.Server(app)

  const dist = path.resolve(__dirname, 'dist')

  app.use(express.static(dist))

  app.use(fallback('index.html', { dist }))

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve('index.html'))
  // })

  // console.log(path.resolve(__dirname))

  return server
}
