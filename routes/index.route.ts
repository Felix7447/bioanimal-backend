import { type Application, Router } from 'express'
import { salesRouter } from './sales.route'
import { clientsRouter } from './clients.route'
import { petsRouter } from './pets.route'
import { saletypeRouter } from './saleType.route'
import { procedureRouter } from './procedure.route'
import { usersRouter } from './users.route'

export const routerAPI = (app: Application) => {
  const router = Router()
  app.use('/api/v1/', router)
  router.use('/ventas', salesRouter())
  router.use('/clientes', clientsRouter())
  router.use('/mascotas', petsRouter())
  router.use('/tipo_venta', saletypeRouter())
  router.use('/procedimientos', procedureRouter())
  router.use('/usuarios', usersRouter())
}
