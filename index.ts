import type { Application } from 'express'
import express from 'express'

const app: Application = express()

const PORT = 3000

app.get('/', (_req, res) => {
  res.send('Home')
})

app.get('/about', (_req, res) => {
  res.send('<h1>About</h1>')
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
