import { type Request, type Response } from 'express'
import salesInfo from '../local/sales.json'
import { type Sale } from 'local/types'

export default class SalesService {
  sales: Sale[]

  constructor() {
    this.sales = salesInfo
  }

  getAll = (_req: Request, res: Response) => {
    try {
      res.json(this.sales)
    } catch (error) {
      console.log(error)
    }
  }

  getById = (req: Request, res: Response) => {
    const identifier = parseInt(req.params.id)
    const rta = this.sales.find(({ id }) => id === identifier)
    res.json(rta)
  }
}
