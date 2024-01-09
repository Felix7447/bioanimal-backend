import { type RequestHandler } from 'express'
import salesInfo from '../local/sales.json'
import { type Sale } from 'local/types'
import { SalesModel } from '../models/sales.model'

export default class SalesService {
  sales: Sale[]

  constructor() {
    this.sales = salesInfo
  }

  getAll: RequestHandler = async (_req, res) => {
    try {
      const getSales = await SalesModel.getAll()
      res.json(getSales)
    } catch (error) {
      console.error(error)
    }
  }

  getById: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const getSale = await SalesModel.getById({ id })
      res.json(getSale)
    } catch (error) {
      console.error(error)
    }
  }

  createSale: RequestHandler = async (req, res) => {
    try {
      const body = req.body
      const createSale = await SalesModel.createSale({ body })
      res.json(createSale)
    } catch (error) {
      console.error(error)
    }
  }

  editSale: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body
      const sale = await SalesModel.editSale({ id, body })
      res.json(sale)
    } catch (error) {
      console.error(error)
    }
  }

  deleteSale: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const deleteSale = await SalesModel.deleteSale({ id })
      res.json(deleteSale)
    } catch (error) {
      console.error(error)
    }
  }
}
