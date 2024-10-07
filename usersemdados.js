it('Não deve registrar um usuário sem os dados', async () => {
const response = await request(app)
.post('/register')
.send({});

expect(response.status).toBe(400);
expect(response.body).toHaveProperty('error', 'Dados incompletos');
});
