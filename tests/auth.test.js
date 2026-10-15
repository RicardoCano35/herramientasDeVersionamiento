const authService = require('../services/authService');

test('Registro exitoso', async () => {
  const result = await authService.register('ricardo', '1234');
  expect(result.message).toBe('Registro exitoso');
});

test('Login correcto', async () => {
  await authService.register('ricardo', '1234');
  const result = await authService.login('ricardo', '1234');
  expect(result.message).toBe('Autenticación satisfactoria');
});
