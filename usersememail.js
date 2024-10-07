it('Não deve registrar um usuário sem o email', async () => {
const response = await request(app)
.post('/register')
.send({
senha: '123456',
nome: 'Teste User'
});

expect(response.status).toBe(400); 
expect(response.body).toHaveProperty('error', 'Email é obrigatório');
});
