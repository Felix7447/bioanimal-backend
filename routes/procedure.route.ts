import ProcedureService from '../services/procedure.service'
import { Router } from 'express'

const services = new ProcedureService()

export const procedureRouter = () => {
  const router = Router()

  router.get('/', services.getAll)
  router.get('/:id', services.getById)
  router.post('/', services.createProc)
  router.patch('/:id', services.editProc)
  router.delete('/:id', services.deleteProc)

  return router
}
