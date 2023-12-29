import UsersService from '../services/users.service'
import { Router } from 'express'

const services = new UsersService()

export const usersRouter = () => {
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
