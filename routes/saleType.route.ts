import SaletypeService from '../services/saleType.service'
import { Router } from 'express'

const services = new SaletypeService()

export const saletypeRouter = () => {
  const router = Router()

  router.get('/', services.getAll)
  router.get('/:id', services.getById)

  return router
}
