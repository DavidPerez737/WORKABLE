import React from 'react';
import './InicioSe.css';

function IniSes() {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" placeholder="Ingresa tu usuario" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default IniSes;