import { DataSource } from 'typeorm'

const DB_PORT = (process.env.DB_PORT != null) ? parseInt(process.env.DB_PORT) : 3306

export const AppDataSource = new DataSource({
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

export const init = async () => {
  try {
    await AppDataSource.initialize()
  } catch (error) {
    console.error(error)
  }
}
