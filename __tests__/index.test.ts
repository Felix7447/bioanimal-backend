import request from 'supertest'
import { app } from '../index'

describe('testing index', () => {
  test('should first', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })
})
