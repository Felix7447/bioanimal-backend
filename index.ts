import express from 'express'
import 'reflect-metadata'
import 'dotenv/config'
import { routerAPI } from './routes/index.route'
import { AppDataSource } from './data-source'

export const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Home')
})

AppDataSource.initialize()
  .then(() => {
    console.log('Connected')

    routerAPI(app)

    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })
