export interface createBodyClient {
  cedula: number
  nombre: string
  telefono: string
  primerContacto: string
}

export interface createBodyPets {
  nombre: string
  raza: string
  sexo: string
  color: string
  cliente: _QueryDeepPartialEntity<Clients>
}

export interface createBodyProc {
  nombre: string
  tipoventa: _QueryDeepPartialEntity<SaleType>
}

export interface createBodySaletype {
  nombre: string
}
