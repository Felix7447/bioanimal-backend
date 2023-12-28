import { type Application, Router } from 'express'
import { salesRouter } from './sales.route'

export const routerAPI = (app: Application) => {
  const router = Router()
  app.use('/api/v1/', router)
  router.use('/ventas', salesRouter())
}
