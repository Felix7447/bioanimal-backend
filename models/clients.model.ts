import { AppDataSource } from '../data-source'
import { Clients } from '../entity/Clients'

const getAll = async () => {
  const getClients = await AppDataSource.getRepository(Clients).find()
  return getClients
}

const getById = async ({ id }: { id: number }) => {
  const client = await AppDataSource.getRepository(Clients).findOneBy({
    cedula: id
  })
  return client
}

const getByName = async ({ name }: { name: string }) => {
  const client = await AppDataSource.getRepository(Clients).find({
    where: {
      nombre: name
    }
  })
  return client
}

interface createBodyClient {
  cedula: number
  nombre: string
  telefono: string
  primerContacto: string
}

const create = async ({ body }: { body: createBodyClient }) => {
  const {
    cedula,
    nombre,
    telefono,
    primerContacto
  } = body

  const client = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Clients)
    .values({
      cedula,
      nombre,
      telefono,
      primer_contacto: primerContacto
    })
    .execute()

  return client
}

const update = async ({ id, body }: { id: number, body: createBodyClient }) => {
  const client = await AppDataSource
    .createQueryBuilder()
    .update(Clients)
    .set({
      cedula: body.cedula,
      nombre: body.nombre,
      telefono: body.telefono,
      primer_contacto: body.primerContacto
    })
    .where('cedula = :id', { id })
    .execute()

  return client
}

const deleteClient = async ({ id }: { id: number }) => {
  const client = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Clients)
    .where('cedula = :id', { id })
    .execute()

  return client
}

export const ClientModel = {
  getAll,
  getById,
  getByName,
  create,
  update,
  deleteClient
}
