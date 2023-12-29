import ProcedureService from '../services/procedure.service'
import { Router } from 'express'

const services = new ProcedureService()

export const procedureRouter = () => {
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
