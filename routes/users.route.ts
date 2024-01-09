import UsersService from '../services/users.service'
import { Router } from 'express'

const services = new UsersService()

export const usersRouter = () => {
  const router = Router()

  router.get('/:mail', services.getByEmail)

  return router
}
