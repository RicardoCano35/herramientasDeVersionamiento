// Simulación de base de datos
const users = [];

module.exports = {
  getAll: () => users,
  findByUsername: (username) => users.find(u => u.username === username),
  addUser: (user) => users.push(user)
};
