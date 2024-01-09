import { Sales } from '../entity/Sales'
import { AppDataSource } from '../data-source'
import { type createBodySales } from '../types'

const getAll = async () => {
  const getSales = await AppDataSource.getRepository(Sales).find()
  return getSales
}

const getById = async ({ id }: { id: string }) => {
  const sale = await AppDataSource.getRepository(Sales).findOneBy({
    id
  })
  return sale
}

const createSale = async ({ body }: { body: createBodySales }) => {
  const {
    ingreso,
    cliente,
    mascota,
    tipoventa,
    procedimiento
  } = body

  const client = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Sales)
    .values({
      ingreso,
      cliente,
      mascota,
      tipoventa,
      procedimiento
    })
    .execute()

  return client
}

const editSale = async ({ id, body }: { id: string, body: createBodySales }) => {
  const client = await AppDataSource
    .createQueryBuilder()
    .update(Sales)
    .set({
      ingreso: body.ingreso,
      cliente: body.cliente,
      mascota: body.mascota,
      tipoventa: body.tipoventa,
      procedimiento: body.procedimiento
    })
    .where('id = :id', { id })
    .execute()

  return client
}

const deleteSale = async ({ id }: { id: number }) => {
  const client = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Sales)
    .where('id = :id', { id })
    .execute()

  return client
}

export const SalesModel = {
  getAll,
  getById,
  createSale,
  editSale,
  deleteSale
}
