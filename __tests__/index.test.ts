import request from 'supertest'
import { app } from '../index'

describe('testing index', () => {
  test('Is Listening', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })

  test('Not found', async () => {
    const response = await request(app).get('/random_url').send()
    expect(response.statusCode).toBe(404)
  })

  test('Access to router', async () => {
    const response = await request(app).get('/api/v1/ventas').send()
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
  })

  afterEach(() => {
    app.listen().close()
  })
})
