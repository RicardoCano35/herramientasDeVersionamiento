import React, { useState } from 'react';

function ClienteForm() {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState({ nombre: '', email: '', telefono: '' });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setNuevoCliente({ ...nuevoCliente, [e.target.name]: e.target.value });
  };

  // Registrar cliente
  const handleSubmit = (e) => {
    e.preventDefault();
    setClientes([...clientes, nuevoCliente]);
    setNuevoCliente({ nombre: '', email: '', telefono: '' });
  };

  return (
    <div>
      <h2>Gestión de Clientes</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={nuevoCliente.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={nuevoCliente.email} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={nuevoCliente.telefono} onChange={handleChange} required />
        <button type="submit">Registrar Cliente</button>
      </form>

      <h3>Lista de Clientes</h3>
      <ul>
        {clientes.map((c, index) => (
          <li key={index}>{c.nombre} - {c.email} - {c.telefono}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClienteForm;

