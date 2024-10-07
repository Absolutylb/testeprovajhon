it('Deve logar corretamente', async () => {
const response = await request(app)
.post('/login')
.send({
email: 'teste@exemplo.com',
senha: '123456'
});

expect(response.status).toBe(200);
expect(response.body).toHaveProperty('token'); // Supondo que o login retorna um token JWT
});
