import SalesService from '../services/sales.service'
import { Router } from 'express'

const services = new SalesService()

export const salesRouter = () => {
  const router = Router()

  router.get('/', services.getAll)
  router.get('/:id', services.getById)
  router.post('/', services.createSale)
  router.patch('/:id', services.editSale)
  router.delete('/:id', services.deleteSale)

  return router
}
