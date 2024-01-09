import { Users } from '../entity/Users'
import { AppDataSource } from '../data-source'

const getByEmail = async ({ mail }: { mail: string }) => {
  const user = await AppDataSource.getRepository(Users).findOneBy({
    correo: mail
  })
  return user
}

export const UserModel = {
  getByEmail
}
