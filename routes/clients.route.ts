import ClientsService from '../services/clients.service'
import { Router } from 'express'

const services = new ClientsService()

export const clientsRouter = () => {
  const router = Router()

  router.get('/', services.getAll)
  router.get('/:id', services.getById)
  router.get('/:name', services.getByName)
  router.post('/', services.createNewClient)
  router.patch('/:id', services.editClient)
  router.delete('/:id', services.deleteClient)

  return router
}
