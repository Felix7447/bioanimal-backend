import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Clients } from './Clients'
import { Pets } from './Pets'
import { SaleType } from './SaleTypes'
import { Procedures } from './Procedures'

@Entity()
export class Sales {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Clients, { eager: true })
  cliente: Clients

  @ManyToOne(() => Pets, { eager: true })
  mascota: Pets

  @ManyToOne(() => SaleType, { eager: true })
  tipoventa: SaleType

  @ManyToOne(() => Procedures, { eager: true })
  procedimiento: Procedures

  @Column({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
  fecha: string

  @Column('int')
  ingreso: number
}
