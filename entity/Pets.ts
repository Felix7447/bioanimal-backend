import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Clients } from './Clients'

@Entity()
export class Pets {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  nombre: string

  @Column({ type: 'varchar', length: 18 })
  raza: string

  @Column({ type: 'varchar', length: 10 })
  sexo: string

  @Column({ type: 'varchar', length: 18 })
  color: string

  @ManyToOne(() => Clients, (client) => client.mascotas)
  cliente: Clients
}
