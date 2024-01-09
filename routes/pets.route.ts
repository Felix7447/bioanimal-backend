import PetsService from '../services/pets.service'
import { Router } from 'express'

const services = new PetsService()

export const petsRouter = () => {
  const router = Router()

  router.get('/', services.getAll)
  router.get('/:id', services.getById)
  router.get('/:name', services.getByName)
  router.post('/', services.createPet)
  router.patch('/:id', services.editPet)
  router.delete('/:id', services.deletePet)

  return router
}
