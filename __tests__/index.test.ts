import request from 'supertest'
import { app, server } from '../index'
import { init } from '../data-source'

describe('testing index', () => {
  beforeAll(async () => {
    await init()
  })

  test('Is Listening', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })

  test('Not found', async () => {
    const response = await request(app).get('/random_url').send()
    expect(response.statusCode).toBe(404)
  })

  test('Access to sales', async () => {
    const response = await request(app).get('/api/v1/ventas').send()
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
  })

  test('Access to clients', async () => {
    const response = await request(app).get('/api/v1/clientes').send()
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
  })

  test('Access to pets', async () => {
    const response = await request(app).get('/api/v1/mascotas').send()
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
  })

  test('Access to sale types', async () => {
    const response = await request(app).get('/api/v1/tipo_venta').send()
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
  })

  test('Access to procedures', async () => {
    const response = await request(app).get('/api/v1/procedimientos').send()
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
  })

  afterAll(() => {
    server.close()
  })
})
