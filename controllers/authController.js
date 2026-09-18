// controllers/authController.js
// Controlador de autenticación

const users = []; // Simulación de base de datos

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña requeridos' });
  }
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'Registro exitoso' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Autenticación satisfactoria' });
  } else {
    res.status(401).json({ message: 'Error en la autenticación' });
  }
};
