import React, { useState } from 'react';
import useAuth from '../../auth/useAuth';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../helpers/routes';
import { loginRequest } from '../../api/auth';
import "../../styles/style_login.css";

export default function Login() {
  const { login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    try {
      const response = await loginRequest(userCredentials);
      const responseData = response.data;
      login(responseData, location.state?.from);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  return (
    <div className="unique-container">
      <div className="unique-row justify-content-md-center">
        <div className="unique-col" style={{ marginTop: window.innerWidth < 576 ? '-250px' : '0px' }}>
          <h1 className='d-flex justify-content-center mt-5'>Inicia sesion en plantech</h1>
          <div className="unique-container" style={{ width: '30rem' }}>
            <div className="unique-card p-4">
              <form className="unique-form" onSubmit={handleLogin} autoComplete="off">
                {/* Username input */}
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="email">Correo Electronico</label>
                  <input
                    className="unique-input"
                    type="email"
                    id="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password input */}
                <div className="unique-floating-label mb-4">
                  <label className="unique-label" htmlFor="password">Contraseña</label>
                  <input
                    className="unique-input"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* 2 column grid layout for inline styling */}
                <div className="unique-row mb-4">
                  <div className="unique-col d-flex justify-content-center">
                    {/* Checkbox */}
                    <input className="unique-checkbox" type="checkbox" id="remember" defaultChecked />
                    <label className="unique-label-checkbox" htmlFor="remember">Recuérdame</label>
                  </div>
                  <div className="unique-col">
                    {/* Simple link */}
                    <Link className="unique-link" to={routes.home}>¿Olvidó su contraseña?</Link>
                  </div>
                </div>

                <div className="unique-d-grid gap-2">
                  {/* Submit button */}
                  <button className="unique-button btn-block mb-4" type="submit">Iniciar sesión</button>
                </div>

                {/* Register buttons */}
                <div className="unique-text-center">
                  <p>¿No tiene una cuenta? <Link className="unique-link" to={routes.registro}>Regístrate</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
