import request from 'supertest'
import app from '../src/server'

test('Should get 404 response', async () => {
    await request(app)
        .get('')
        .expect(404)
})

