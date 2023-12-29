import SaletypeService from '../services/saleType.service'
import { Router } from 'express'

const services = new SaletypeService()

export const saletypeRouter = () => {
  const router = Router()

  router.get('/', (_req, res) => {
    res.json(services.getAll())
  })

  router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(services.getById(id))
  })

  return router
}
