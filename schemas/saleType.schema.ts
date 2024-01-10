import { type createBodySaletype } from '../types'
import { z } from 'zod'

const saleType = z.object({
  nombre: z.string({
    required_error: 'nombre is required',
    invalid_type_error: 'nombre must be a String'
  }).min(3).max(255)
})

export const createSaletypeSchema = (input: createBodySaletype) => saleType.safeParse(input)
export const updateSaletypeSchema = (input: createBodySaletype) => saleType.safeParse(input)
