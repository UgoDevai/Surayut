const request = require('supertest');
const app = require('../src/index');

describe('Surayut API', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('ยินดีต้อนรับสู่ Surayut Project');
    expect(response.body.description).toBe('เริ่มต้นสร้างโปรเจ็ต - Welcome to Surayut Project');
    expect(response.body.version).toBe('1.0.0');
    expect(response.body.status).toBe('running');
  });

  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.timestamp).toBeDefined();
    expect(response.body.uptime).toBeDefined();
  });
});