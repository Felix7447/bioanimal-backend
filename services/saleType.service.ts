import { type RequestHandler } from 'express'
import saletypeInfo from '../local/saletype.json'
import { type Saletype } from '../local/types'
import { SaleTypeModel } from '../models/saleType.model'
import { type createBodySaletype } from '../types'
import { createSaletypeSchema } from '../schemas/saleType.schema'

export default class SalesService {
  saleType: Saletype[]

  constructor() {
    this.saleType = saletypeInfo
  }

  getAll: RequestHandler = async (_req, res) => {
    try {
      const getProcedures = await SaleTypeModel.getAll()
      res.json(getProcedures)
    } catch (error) {
      res.json(error)
    }
  }

  getById: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const getProcedure = await SaleTypeModel.getById({ id })
      res.json(getProcedure)
    } catch (error) {
      res.json(error)
    }
  }

  getByName: RequestHandler = async (req, res) => {
    try {
      const { name } = req.params
      const getProcedure = await SaleTypeModel.getByName({ name })
      res.json(getProcedure)
    } catch (error) {
      res.json(error)
    }
  }

  createSaletype: RequestHandler = async (req, res) => {
    try {
      const body: createBodySaletype = req.body

      const result = createSaletypeSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const createSaletype = await SaleTypeModel.createSaletype({ body })
      res.json(createSaletype)
    } catch (error) {
      res.json(error)
    }
  }

  editSaletype: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const body: createBodySaletype = req.body

      const result = createSaletypeSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const editSaletype = await SaleTypeModel.editSaletype({ id, body })
      res.json(editSaletype)
    } catch (error) {
      res.json(error)
    }
  }

  deleteSaletype: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const deleteSaletype = await SaleTypeModel.deleteSaletype({ id })
      res.json(deleteSaletype)
    } catch (error) {
      res.json(error)
    }
  }
}
