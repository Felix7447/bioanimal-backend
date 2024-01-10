import { type RequestHandler } from 'express'
import petsInfo from '../local/pets.json'
import { type Pet } from 'local/types'
import { PetModel } from '../models/pets.model'
import { type createBodyPets } from '../types'
import { createPetSchema, updatePetSchema } from '../schemas/pets.schema'

export default class SalesService {
  pets: Pet[]

  constructor() {
    this.pets = petsInfo
  }

  getAll: RequestHandler = async (_req, res) => {
    try {
      const pets = await PetModel.getAll()
      res.json(pets)
    } catch (error) {
      res.json(error)
    }
  }

  getById: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const pet = await PetModel.getById({ id })
      res.json(pet)
    } catch (error) {
      res.json(error)
    }
  }

  getByName: RequestHandler = async (req, res) => {
    try {
      const { name } = req.params
      const pet = await PetModel.getByName({ name })
      res.json(pet)
    } catch (error) {
      res.json(error)
    }
  }

  createPet: RequestHandler = async (req, res) => {
    try {
      const body: createBodyPets = req.body

      const result = createPetSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const pet = await PetModel.createPet({ body: result.data })
      res.status(200).json(pet)
    } catch (error) {
      console.error(error)
    }
  }

  editPet: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const body: createBodyPets = req.body

      const result = updatePetSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const pet = await PetModel.editPet({ id, body })
      res.status(200).json(pet)
    } catch (error) {
      res.json(error)
    }
  }

  deletePet: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const pet = await PetModel.deletePet({ id })
      res.status(200).json(pet)
    } catch (error) {
      res.json(error)
    }
  }
}
