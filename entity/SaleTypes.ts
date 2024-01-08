import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class SaleType {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string
}
