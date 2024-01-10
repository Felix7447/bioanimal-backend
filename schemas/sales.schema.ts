import { type createBodySales } from '../types'
import { z } from 'zod'

const sale = z.object({
  cliente: z.number().int().min(1).max(999999999),
  mascota: z.string().uuid(),
  tipoventa: z.number({
    required_error: 'tipoventa is required'
  }),
  procedimiento: z.number({
    required_error: 'procedimiento is required',
    invalid_type_error: 'procedimiento must be a Number'
  }).min(3),
  ingreso: z.number({
    required_error: 'ingreso is required',
    invalid_type_error: 'ingreso must be a Number'
  })
})

export const createSaleSchema = (input: createBodySales) => sale.safeParse(input)
export const updateSaleSchema = (input: createBodySales) => sale.safeParse(input)
