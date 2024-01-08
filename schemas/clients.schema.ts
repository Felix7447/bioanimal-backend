import { type createBodyClient } from '../types'
import { z } from 'zod'

const client = z.object({
  cedula: z.number().int().min(1).max(999999999),
  nombre: z.string({
    required_error: 'nombre is required',
    invalid_type_error: 'nombre must be a String'
  }).min(3).max(255),
  telefono: z.string({
    required_error: 'telefono is required',
    invalid_type_error: 'telefono must be a String'
  }).length(11),
  primerContacto: z.string({
    required_error: 'primer contacto is required',
    invalid_type_error: 'primer contacto must be a String'
  })
})

export const createClientSchema = (input: createBodyClient) => client.safeParse(input)
export const updateClientSchema = (input: createBodyClient) => client.safeParse(input)
