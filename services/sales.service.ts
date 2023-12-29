import salesInfo from '../local/sales.json'
import { type Sale } from 'local/types'

export default class SalesService {
  sales: Sale[]

  constructor() {
    this.sales = salesInfo
  }

  getAll() {
    return this.sales
  }

  getById(identifier: number) {
    const rta = this.sales.find(({ id }) => id === identifier)
    return rta
  }
}
