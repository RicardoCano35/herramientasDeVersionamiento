const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

exports.register = async (username, password) => {
  const existingUser = userModel.findByUsername(username);
  if (existingUser) return { message: 'El usuario ya existe' };

  const hashedPassword = await bcrypt.hash(password, 10);
  userModel.addUser({ username, password: hashedPassword });
  return { message: 'Registro exitoso' };
};

exports.login = async (username, password) => {
  const user = userModel.findByUsername(username);
  if (!user) return { message: 'Usuario no encontrado' };

  const match = await bcrypt.compare(password, user.password);
  return match
    ? { message: 'Autenticación satisfactoria' }
    : { message: 'Error en la autenticación' };
};
