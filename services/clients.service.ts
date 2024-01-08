import { type RequestHandler } from 'express'
import clientsInfo from '../local/clients.json'
import { type Client } from 'local/types'
import { ClientModel } from '../models/clients.model'

export default class SalesService {
  clients: Client[]

  constructor() {
    this.clients = clientsInfo
  }

  getAll: RequestHandler = async (_req, res) => {
    try {
      const getClients = await ClientModel.getAll()
      res.json(getClients)
    } catch (error) {
      console.error(error)
    }
  }

  getById: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const getClient = await ClientModel.getById({ id })
      res.json(getClient)
    } catch (error) {
      console.error(error)
    }
  }

  getByName: RequestHandler = async (req, res) => {
    try {
      const { name } = req.params
      const getClientsByName = await ClientModel.getByName({ name })
      res.json(getClientsByName)
    } catch (error) {
      console.error(error)
    }
  }

  createNewClient: RequestHandler = async (req, res) => {
    try {
      const body = req.body
      const newClient = await ClientModel.create({ body })
      res.json(newClient)
    } catch (error) {
      console.error(error)
    }
  }

  editClient: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const body = req.body
      const client = await ClientModel.update({ id, body })
      res.json(client)
    } catch (error) {
      console.error(error)
    }
  }

  deleteClient: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const deletedClient = await ClientModel.deleteClient({ id })
      res.json(deletedClient)
    } catch (error) {
      console.error(error)
    }
  }
}
