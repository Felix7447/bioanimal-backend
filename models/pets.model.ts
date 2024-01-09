import { type createBodyPets } from 'types'
import { AppDataSource } from '../data-source'
import { Pets } from '../entity/Pets'

const getAll = async () => {
  const getPets = await AppDataSource.getRepository(Pets).find()
  return getPets
}

const getById = async ({ id }: { id: string }) => {
  const getPet = await AppDataSource.getRepository(Pets).findOneBy({
    id
  })
  return getPet
}

const getByName = async ({ name }: { name: string }) => {
  const getPet = await AppDataSource.getRepository(Pets).findOneBy({
    nombre: name
  })
  return getPet
}

const createPet = async ({ body }: { body: createBodyPets }) => {
  const {
    nombre,
    raza,
    sexo,
    color,
    cliente
  } = body

  const pet = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Pets)
    .values({
      nombre,
      raza,
      sexo,
      color,
      cliente
    })
    .execute()

  return pet
}

const editPet = async ({ id, body }: { id: string, body: createBodyPets }) => {
  const pet = await AppDataSource
    .createQueryBuilder()
    .update(Pets)
    .set({
      nombre: body.nombre,
      raza: body.raza,
      sexo: body.sexo,
      color: body.color,
      cliente: body.cliente
    })
    .where('id = :id', { id })
    .execute()

  return pet
}

const deletePet = async ({ id }: { id: string }) => {
  const pet = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Pets)
    .where('id = :id', { id })
    .execute()

  return pet
}

export const PetModel = {
  getAll,
  getById,
  getByName,
  createPet,
  editPet,
  deletePet
}
