import { type RequestHandler } from 'express'
import usersInfo from '../local/users.json'
import { type Users } from 'local/types'
import { UserModel } from 'models/users.model'

export default class UsersService {
  users: Users[]

  constructor() {
    this.users = usersInfo
  }

  getByEmail: RequestHandler = async (req, res) => {
    try {
      const { mail } = req.params
      const user = await UserModel.getByEmail({ mail })
      res.json(user)
    } catch (error) {
      res.json(error)
    }
  }
}
