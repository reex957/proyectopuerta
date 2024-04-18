import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import "../../styles/style_registro.css";

const Registro = () => {
  const [datos, setDatos] = useState('Personales');

  const changeDatos = (newDatos) => {
    setDatos(newDatos);
  };

  return (
    <div className="unique-container d-flex flex-column ">
      <h1 className='d-flex justify-content-center mt-5'>Regístrate en plantech</h1>
      <div className="unique-container" style={{ width: '30rem' }}>
        <div className="unique-card p-4">
          <form className="unique-form">
            {datos === 'Personales' && (
              <>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="name">Nombre</label>
                  <input className="unique-input" type="text" id="name" placeholder="Ingrese su nombre" />
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="apP">Apellido paterno</label>
                  <input className="unique-input" type="text" id="apP" placeholder="Ingrese su apellido paterno" />
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="apM">Apellido Materno</label>
                  <input className="unique-input" type="text" id="apM" placeholder="Ingrese su apellido Materno" />
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="tel">Teléfono</label>
                  <input className="unique-input" type="number" id="tel" placeholder="Ingrese su teléfono" />
                </div>
                <button className="unique-button btn-block mb-4" onClick={() => changeDatos('Cuenta')}>
                  Siguiente
                </button>
              </>
            )}

            {datos === 'Cuenta' && (
              <>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="email">E-mail</label>
                  <input className="unique-input" type="email" id="email" placeholder="Ingrese su e-mail" />
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="password">Password</label>
                  <input className="unique-input" type="password" id="password" placeholder="Ingrese su password" />
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="repPass">Repetir password</label>
                  <input className="unique-input" type="password" id="repPass" placeholder="Repita su password" />
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="pregunta">Pregunta Secreta</label>
                  <select className="unique-select" id="pregunta">
                    <option value="">Elija su pregunta secreta...</option>
                    <option value="1">Pregunta 1</option>
                    <option value="2">Pregunta 2</option>
                    <option value="3">Pregunta 3</option>
                  </select>
                </div>
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="respuesta">Respuesta</label>
                  <input className="unique-input" type="text" id="respuesta" placeholder="Ingrese su respuesta" />
                </div>
                <button className="unique-button btn-block mb-4" onClick={() => changeDatos('Personales')}>
                  Regresar
                </button>
              </>
            )}

            <button className="unique-button btn-block" type="submit">Registrarse</button>
          </form>
          <div className="unique-text-center mt-3">
            <p>¿Ya tiene una cuenta? <Link className="unique-link" to={routes.login}>Inicie sesión aquí</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
