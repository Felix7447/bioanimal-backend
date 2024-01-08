import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { SaleType } from './SaleTypes'

@Entity()
export class Procedures {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  nombre: string

  @ManyToOne(() => SaleType)
  tipoventa: SaleType
}
