import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Pets } from './Pets'

@Entity()
export class Clients {
  @PrimaryColumn('int')
  cedula: number

  @Column('varchar')
  nombre: string

  @OneToMany(() => Pets, (pet) => pet.cliente)
  mascotas: Pets[]

  @Column({ type: 'varchar', length: 20 })
  telefono: string

  @Column({ type: 'varchar', length: 40 })
  primer_contacto: string
}
