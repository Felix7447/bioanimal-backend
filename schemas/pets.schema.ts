import { type createBodyPets } from '../types'
import { z } from 'zod'

const pet = z.object({
  nombre: z.string({
    required_error: 'nombre is required',
    invalid_type_error: 'nombre must be a String'
  }).min(3).max(255),
  raza: z.string({
    required_error: 'raza is required',
    invalid_type_error: 'raza must be a String'
  }).min(3),
  sexo: z.enum(['Macho', 'Hembra']),
  color: z.string({
    required_error: 'color is required',
    invalid_type_error: 'color must be a String'
  }),
  cliente: z.number().int().min(1).max(999999999)
})

export const createPetSchema = (input: createBodyPets) => pet.safeParse(input)
export const updatePetSchema = (input: createBodyPets) => pet.safeParse(input)
