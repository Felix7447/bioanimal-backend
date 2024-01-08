import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class SaleType {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column('varchar')
  nombre: string
}
