import express from 'express'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import 'dotenv/config'
import { routerAPI } from './routes/index.route'

export const app = express()

const PORT = process.env.PORT ?? 3000
const DB_PORT = (process.env.DB_PORT != null) ? parseInt(process.env.DB_PORT) : 3306

app.disable('x-powered-by')
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Home')
})

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [
    './entity/*.ts'
  ]
})

AppDataSource.initialize()
  .then(() => {
    console.log('Connected')
  })
  .catch(error => {
    console.log(error)
  })

routerAPI(app)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
