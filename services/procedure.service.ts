import { type RequestHandler } from 'express'
import procedureInfo from '../local/procedure.json'
import { type Procedure } from 'local/types'
import { ProcedureModel } from '../models/procedures.model'
import { type createBodyProc } from '../types'
import { createProcSchema } from '../schemas/procedure.schema'

export default class ProcedureService {
  procedure: Procedure[]

  constructor() {
    this.procedure = procedureInfo
  }

  getAll: RequestHandler = async (_req, res) => {
    try {
      const getProcedures = await ProcedureModel.getAll()
      res.json(getProcedures)
    } catch (error) {
      res.json(error)
    }
  }

  getById: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const getProcedure = await ProcedureModel.getById({ id })
      res.json(getProcedure)
    } catch (error) {
      res.json(error)
    }
  }

  getByName: RequestHandler = async (req, res) => {
    try {
      const { name } = req.params
      const getProcedure = await ProcedureModel.getByName({ name })
      res.json(getProcedure)
    } catch (error) {
      res.json(error)
    }
  }

  createProc: RequestHandler = async (req, res) => {
    try {
      const body: createBodyProc = req.body

      const result = createProcSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const createProc = await ProcedureModel.createProc({ body })
      res.json(createProc)
    } catch (error) {
      res.json(error)
    }
  }

  editProc: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const body: createBodyProc = req.body

      const result = createProcSchema(body)

      if (!result.success) {
        res.status(400).json({ error: JSON.parse(result.error.message) })
        return
      }

      const editProc = await ProcedureModel.editProc({ id, body })
      res.json(editProc)
    } catch (error) {
      res.json(error)
    }
  }

  deleteProc: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const deleteProc = await ProcedureModel.deleteProc({ id })
      res.json(deleteProc)
    } catch (error) {
      res.json(error)
    }
  }
}
