import procedureInfo from '../local/procedure.json'
import { type Procedure } from 'local/types'

export default class ProcedureService {
  procedure: Procedure[]

  constructor() {
    this.procedure = procedureInfo
  }

  getAll() {
    return this.procedure
  }

  getById(identifier: string) {
    const rta = this.procedure.find(({ id }) => id === identifier)
    return rta
  }
}
