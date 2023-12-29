import request from 'supertest'

import express from 'express'
import { routerAPI } from '../routes/index.route'

const testingApp = express()

describe('Testing router', () => {
  test('Returns nothing', () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const router = routerAPI(testingApp)
    expect(router).toBe(undefined)
  })

  test('All routes working', async () => {
    routerAPI(testingApp)

    const sales = await request(testingApp).get('/api/v1/ventas').send()
    const clients = await request(testingApp).get('/api/v1/clientes').send()
    const pets = await request(testingApp).get('/api/v1/mascotas').send()
    const saleType = await request(testingApp).get('/api/v1/tipo_venta').send()
    const procedure = await request(testingApp).get('/api/v1/procedimientos').send()
    const users = await request(testingApp).get('/api/v1/usuarios').send()

    expect(sales.statusCode).toBe(200)
    expect(sales.type).toBe('application/json')

    expect(clients.statusCode).toBe(200)
    expect(clients.type).toBe('application/json')

    expect(pets.statusCode).toBe(200)
    expect(pets.type).toBe('application/json')

    expect(saleType.statusCode).toBe(200)
    expect(saleType.type).toBe('application/json')

    expect(procedure.statusCode).toBe(200)
    expect(procedure.type).toBe('application/json')

    expect(users.statusCode).toBe(200)
    expect(users.type).toBe('application/json')
  })

  afterAll(() => {
    testingApp.listen().close()
  })
})
