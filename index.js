// index.js
// Evidencia GA7-220501096-AA5-EV01
// Autor: Ricardo Cano
// Servidor principal con Express

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authController = require('./controllers/authController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas del servicio web
app.post('/register', authController.register);
app.post('/login', authController.login);

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
