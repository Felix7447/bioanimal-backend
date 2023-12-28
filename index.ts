import express from 'express'
import { routerAPI } from './routes/index.route'

export const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Home')
})

routerAPI(app)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
