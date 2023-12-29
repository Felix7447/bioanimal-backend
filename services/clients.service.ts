import clientsInfo from '../local/clients.json'
import { type Client } from 'local/types'

export default class SalesService {
  clients: Client[]

  constructor() {
    this.clients = clientsInfo
  }

  getAll() {
    return this.clients
  }

  getById(identifier: number) {
    const rta = this.clients.find(({ cedula }) => cedula === identifier)
    return rta
  }
}
