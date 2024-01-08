import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { SaleType } from './SaleTypes'

@Entity()
export class Procedures {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @ManyToOne(() => SaleType)
  tipoventa: SaleType
}
