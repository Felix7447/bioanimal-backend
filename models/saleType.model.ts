import { type createBodySaletype } from '../types'
import { AppDataSource } from '../data-source'
import { SaleType } from '../entity/SaleTypes'

const getAll = async () => {
  const getType = await AppDataSource.getRepository(SaleType).find()
  return getType
}

const getById = async ({ id }: { id: number }) => {
  const getType = await AppDataSource.getRepository(SaleType).findOneBy({
    id
  })
  return getType
}

const getByName = async ({ name }: { name: string }) => {
  const getType = await AppDataSource.getRepository(SaleType).findOneBy({
    nombre: name
  })
  return getType
}

const createSaletype = async ({ body }: { body: createBodySaletype }) => {
  const {
    nombre
  } = body

  const type = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(SaleType)
    .values({
      nombre
    })
    .execute()

  return type
}

const editSaletype = async ({ id, body }: { id: number, body: createBodySaletype }) => {
  const type = await AppDataSource
    .createQueryBuilder()
    .update(SaleType)
    .set({
      nombre: body.nombre
    })
    .where('id = :id', { id })
    .execute()

  return type
}

const deleteSaletype = async ({ id }: { id: number }) => {
  const type = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(SaleType)
    .where('id = :id', { id })
    .execute()

  return type
}

export const SaleTypeModel = {
  getAll,
  getById,
  getByName,
  createSaletype,
  editSaletype,
  deleteSaletype
}
