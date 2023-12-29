import { type uuid } from 'crypto'

export interface Sale {
  id: uuid
  cedula_cliente: number
  mascota_id: number
  tipoventa_id: number
  procedimiento_id: number
  fecha: string
  ingreso: number
}

export interface Client {
  cedula: number
  nombre: string
  mascota_id: uuid
  telefono: string
  primer_contacto: string
}

export interface Pet {
  id: uuid
  nombre: string
  raza: string
  sexo: string
  color: string
}

export interface Saletype {
  id: uuid
  nombre: string
}

export interface Procedure {
  id: uuid
  nombre: string
  tipoventa_id: uuid
}

export interface Users {
  id: uuid
  correo: string
  nombre: string
  rol: string
  contraseña: string
}
