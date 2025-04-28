import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css';

function Header() {
  return (
    <header className="header-p1">
      <h2>WORKABLE</h2>
      <div className="bt-list">
        <button>
          Buscar Ofertas
        </button>
        <button>
          <Link to="/page2">Perfil Profesional</Link>
        </button>
        <button>
          <Link to="/page2">Salarios</Link>
        </button>
      </div>
      <div className="user-menu">
        <div className="dropdown">
          <span className="dropdown-btn">Reclutadores</span>
          <div className="dropdown-menu">
            <a href="#">a1</a>
            <a href="#">a2</a>
            <a href="#">a3</a>
          </div>
        </div>
        <Link to="/inisesion" className="btn-link">Iniciar Sesión</Link>
        <Link to="/inisesion" className="btn-link">Registrarse</Link>
      </div>
    </header>
  );
}

export default Header;
