import { type createBodyProc } from 'types'
import { AppDataSource } from '../data-source'
import { Procedures } from '../entity/Procedures'

const getAll = async () => {
  const getProcs = await AppDataSource.getRepository(Procedures).find()
  return getProcs
}

const getById = async ({ id }: { id: number }) => {
  const getProc = await AppDataSource.getRepository(Procedures).findOneBy({
    id
  })
  return getProc
}

const getByName = async ({ name }: { name: string }) => {
  const getProc = await AppDataSource.getRepository(Procedures).findOneBy({
    nombre: name
  })
  return getProc
}

const createProc = async ({ body }: { body: createBodyProc }) => {
  const {
    nombre,
    tipoventa
  } = body

  const proc = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Procedures)
    .values({
      nombre,
      tipoventa
    })
    .execute()

  return proc
}

const editProc = async ({ id, body }: { id: number, body: createBodyProc }) => {
  const proc = await AppDataSource
    .createQueryBuilder()
    .update(Procedures)
    .set({
      nombre: body.nombre,
      tipoventa: body.tipoventa
    })
    .where('id = :id', { id })
    .execute()

  return proc
}

const deleteProc = async ({ id }: { id: number }) => {
  const proc = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Procedures)
    .where('id = :id', { id })
    .execute()

  return proc
}

export const ProcedureModel = {
  getAll,
  getById,
  getByName,
  createProc,
  editProc,
  deleteProc
}
