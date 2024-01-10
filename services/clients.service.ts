import { type RequestHandler } from 'express'
import clientsInfo from '../local/clients.json'
import { type Client } from 'local/types'
import { ClientModel } from '../models/clients.model'
import { createClientSchema, updateClientSchema } from '../schemas/clients.schema'
import { type createBodyClient } from 'types'

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
      const body: createBodyClient = req.body

      const result = createClientSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const newClient = await ClientModel.create({ body })
      res.status(201).json(newClient)
    } catch (error) {
      console.error(error)
    }
  }

  editClient: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const body: createBodyClient = req.body

      const result = updateClientSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const client = await ClientModel.update({ id, body })
      res.status(200).json(client)
    } catch (error) {
      console.error(error)
    }
  }

  deleteClient: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const deletedClient = await ClientModel.deleteClient({ id })
      res.status(200).json(deletedClient)
    } catch (error) {
      console.error(error)
    }
  }
}
