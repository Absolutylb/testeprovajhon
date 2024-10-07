const request = require('supertest');
const app = require('../app'); // Caminho para o arquivo principal da aplicação

describe('Registro de Usuários', () => {
it('Não deve registrar um usuário sem a senha', async () => {
const response = await request(app)
.post('/register')
.send({
email: 'teste@exemplo.com',
nome: 'Teste User'
});

expect(response.status).toBe(400); // Esperando erro (400 ou 422 conforme a API)
expect(response.body).toHaveProperty('error', 'Senha é obrigatória');
});
});
