// src/tests/integration/api.test.js
const request = require('supertest');
const app = require('../../app'); // Importamos la app express

describe('Pruebas de Integración - API', () => {

    test('GET / debe responder con estado 200 y mensaje de bienvenida', async () => {
        const respuesta = await request(app).get('/');
        
        // Verificaciones
        expect(respuesta.statusCode).toBe(200);
        expect(respuesta.headers['content-type']).toMatch(/json/);
        expect(respuesta.body.mensaje).toBeDefined();
    });

    test('GET /ruta-inexistente debe responder con 404', async () => {
        const respuesta = await request(app).get('/api/no-existe');
        expect(respuesta.statusCode).toBe(404);
    });
});