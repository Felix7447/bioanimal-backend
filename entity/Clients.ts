import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Clients {
  @PrimaryColumn('int')
  cedula: number

  @Column('varchar')
  nombre: string

  @Column({ type: 'varchar', length: 20 })
  telefono: string

  @Column({ type: 'varchar', length: 40 })
  primer_contacto: string
}
