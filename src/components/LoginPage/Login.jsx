import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const hSubmit = (e) => {
    e.preventDefault();
    navigate('/page4');
  };

  const Exit = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <button className="exit-button" onClick={Exit}>
        🡨
      </button>
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={hSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit">Iniciar Sesión</button>
        </div>

        <div className="separator">
          <span>O</span>
        </div>

        <div className="google-login">
          <span className="google-icon"></span>
          Ingresar con Google
        </div>
      </form>
    </div>
  );
}

export default Login;
