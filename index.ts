import express from 'express'
import 'reflect-metadata'
import 'dotenv/config'
import { routerAPI } from './routes/index.route'
import { init } from './data-source'

init()
  .catch((error) => {
    console.log(error)
  })

export const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Home')
})

routerAPI(app)

export const server = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
