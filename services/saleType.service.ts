import saletypeInfo from '../local/saletype.json'
import { type Saletype } from 'local/types'

export default class SalesService {
  saleType: Saletype[]

  constructor() {
    this.saleType = saletypeInfo
  }

  getAll() {
    return this.saleType
  }

  getById(identifier: string) {
    const rta = this.saleType.find(({ id }) => id === identifier)
    return rta
  }
}
