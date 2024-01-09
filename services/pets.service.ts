import { type RequestHandler } from 'express'
import petsInfo from '../local/pets.json'
import { type Pet } from 'local/types'
import { PetModel } from '../models/pets.model'

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
      const body = req.body
      const pet = await PetModel.createPet({ body })
      res.json(pet)
    } catch (error) {
      res.json(error)
    }
  }

  editPet: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body
      const pet = await PetModel.editPet({ id, body })
      res.json(pet)
    } catch (error) {
      res.json(error)
    }
  }

  deletePet: RequestHandler = async (req, res) => {
    try {
      const { id } = req.params
      const pet = await PetModel.deletePet({ id })
      res.json(pet)
    } catch (error) {
      res.json(error)
    }
  }
}
