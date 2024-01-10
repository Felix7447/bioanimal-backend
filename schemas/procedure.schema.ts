import { type createBodyProc } from '../types'
import { z } from 'zod'

const proc = z.object({
  nombre: z.string({
    required_error: 'nombre is required',
    invalid_type_error: 'nombre must be a String'
  }).min(3).max(255)
})

export const createProcSchema = (input: createBodyProc) => proc.safeParse(input)
export const updateProcSchema = (input: createBodyProc) => proc.safeParse(input)
