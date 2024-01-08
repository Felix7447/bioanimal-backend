import { type RequestHandler } from 'express'
import clientsInfo from '../local/clients.json'
import { type Client } from 'local/types'
import { AppDataSource } from '../data-source'
import { Clients } from '../entity/Clients'

export default class SalesService {
  clients: Client[]

  constructor() {
    this.clients = clientsInfo
  }

  getAll: RequestHandler = async (_req, res) => {
    const getClients = await AppDataSource.getRepository(Clients).find()
    res.json(getClients)
  }

  getById(identifier: number) {
    const rta = this.clients.find(({ cedula }) => cedula === identifier)
    return rta
  }
}
