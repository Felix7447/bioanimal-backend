import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Clients } from './Clients'
import { Pets } from './Pets'
import { SaleType } from './SaleTypes'
import { Procedures } from './Procedures'

@Entity()
export class Sales {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Clients)
  cliente: Clients

  @ManyToOne(() => Pets)
  mascota: Pets

  @ManyToOne(() => SaleType)
  tipoventa: SaleType

  @ManyToOne(() => Procedures)
  procedimiento: Procedures

  @Column({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
  fecha: string

  @Column('int')
  ingreso: number
}
