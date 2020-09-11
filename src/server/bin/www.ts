import { env } from "../lib/env"
import { createServer } from "../lib/server"

const exit = () => setTimeout(() => process.exit(1), 1000)
const { PORT = 9000 }: any = env.parsed

process.on("uncaughtException", (err) => {
  console.log("Uncaught exception", err)
  exit()
})

process.on("unhandledRejection", (reason) => {
  console.log("Unhandled rejection", reason)
  exit()
})
;(async function main() {
  try {
    const server = await createServer()
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  } catch (err) {
    console.log("An error occurred while starting up the server", err)
    exit()
  }
})()
