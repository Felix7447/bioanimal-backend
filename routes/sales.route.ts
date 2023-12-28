import SalesService from '../services/sales.service'
import { Router } from 'express'

const services = new SalesService()

export const salesRouter = () => {
  const router = Router()

  router.get('/', (_req, res) => {
    res.json(services.getAll())
  })

  router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(services.getById(id))
  })

  return router
}
