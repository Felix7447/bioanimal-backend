import usersInfo from '../local/users.json'
import { type Users } from 'local/types'

export default class UsersService {
  users: Users[]

  constructor() {
    this.users = usersInfo
  }

  getAll() {
    return this.users
  }

  getById(identifier: string) {
    const rta = this.users.find(({ id }) => id === identifier)
    return rta
  }
}
