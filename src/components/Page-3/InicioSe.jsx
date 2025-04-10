import React from 'react';
import './InicioSe.css';

function IniSes() {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <div className="form-group">
          <button type="submit">Iniciar Sesión</button>
        </div>

        <div className="separator">
          <span>O</span>
        </div>

        <div className="google-login">
          <span className="google-icon">G</span>
          Ingresar con Google
        </div>
      </form>
    </div>
  );
}

export default IniSes;