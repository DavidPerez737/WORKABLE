import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioSe.css';

function InicioSe() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/page4');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default InicioSe;