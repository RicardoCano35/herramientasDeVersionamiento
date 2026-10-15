const authService = require('../services/authService');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const result = await authService.register(username, password);
  res.json(result);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const result = await authService.login(username, password);
  res.json(result);
};
