import React, { useState, useEffect } from 'react';
import "../../styles/style_cuenta.css";

export default function Cuenta() {
  const [cuentaData, setCuentaData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    telefono: '',
    contraseña: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCuentaData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    // Llamada a la API para obtener los datos de la cuenta
    fetch('URL_DE_TU_API_PARA_OBTENER_DATOS_DE_LA_CUENTA', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Aquí puedes incluir cualquier header necesario, como tokens de autenticación
      }
    })
    .then(response => response.json())
    .then(data => setCuentaData(data))
    .catch(error => console.error('Error fetching cuenta data:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('URL_DE_TU_API_PARA_ACTUALIZAR_DATOS_DE_LA_CUENTA', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Aquí puedes incluir cualquier header necesario, como tokens de autenticación
      },
      body: JSON.stringify(cuentaData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Datos de cuenta actualizados exitosamente');
      } else {
        throw new Error('Error al actualizar los datos de la cuenta');
      }
    })
    .catch(error => console.error('Error updating cuenta data:', error));
  };

  return (
    <div className="unique-container">
      <div className="unique-row">
        <div className="unique-col">
          <h2 className="unique-heading">Modificar Datos de Cuenta</h2>
          <form onSubmit={handleSubmit} className="unique-card unique-form m-auto">
            <div className="unique-floating-label">
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={cuentaData.nombre}
                onChange={handleChange}
                className="unique-input"
                placeholder=" "
              />
              <label htmlFor="nombre" className="unique-label">Nombre</label>
            </div>
            <div className="unique-floating-label">
              <input
                type="text"
                id="apellidoPaterno"
                name="apellidoPaterno"
                value={cuentaData.apellidoPaterno}
                onChange={handleChange}
                className="unique-input"
                placeholder=" "
              />
              <label htmlFor="apellidoPaterno" className="unique-label">Apellido Paterno</label>
            </div>
            <div className="unique-floating-label">
              <input
                type="text"
                id="apellidoMaterno"
                name="apellidoMaterno"
                value={cuentaData.apellidoMaterno}
                onChange={handleChange}
                className="unique-input"
                placeholder=" "
              />
              <label htmlFor="apellidoMaterno" className="unique-label">Apellido Materno</label>
            </div>
            <div className="unique-floating-label">
              <input
                type="email"
                id="correo"
                name="correo"
                value={cuentaData.correo}
                onChange={handleChange}
                className="unique-input"
                placeholder=" "
              />
              <label htmlFor="correo" className="unique-label">Correo</label>
            </div>
            <div className="unique-floating-label">
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={cuentaData.telefono}
                onChange={handleChange}
                className="unique-input"
                placeholder=" "
              />
              <label htmlFor="telefono" className="unique-label">Teléfono</label>
            </div>
            <div className="unique-floating-label">
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                value={cuentaData.contraseña}
                onChange={handleChange}
                className="unique-input"
                placeholder=" "
              />
              <label htmlFor="contraseña" className="unique-label">Contraseña</label>
            </div>
            <button type="submit" className="unique-button">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  );
}
