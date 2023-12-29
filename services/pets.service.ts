import petsInfo from '../local/pets.json'
import { type Pet } from 'local/types'

export default class SalesService {
  pets: Pet[]

  constructor() {
    this.pets = petsInfo
  }

  getAll() {
    return this.pets
  }

  getById(identifier: string) {
    const rta = this.pets.find(({ id }) => id === identifier)
    return rta
  }
}
