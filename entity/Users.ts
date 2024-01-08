import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  correo: string

  @Column()
  nombre: string

  @Column({ type: 'varchar', length: 25 })
  rol: string

  @Column({ type: 'varchar', length: 40 })
  clave: string
}
