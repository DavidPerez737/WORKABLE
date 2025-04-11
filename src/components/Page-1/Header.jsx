import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css'; // Importación del CSS centralizado

function Header() {
  return (
    <header id="header">
      <h2>WORKABLE</h2>
      <div id="nav-links">
        <nav>nav1</nav>
        <nav>
          <Link to="/page2">nav2</Link>
        </nav>
        <nav>
          <Link to="/page2">nav3</Link>
        </nav>
      </div>
      <div id="user-actions">
        <div className="dropdown">
          <span className="dropdown-toggle">nav4</span>
          <div className="dropdown-menu">
            <a href="#">a1</a>
            <a href="#">a2</a>
            <a href="#">a3</a>
          </div>
        </div>
        <Link to="/inisesion" className="button">Iniciar Sesión</Link>
        <Link to="/inisesion" className="button">Registrarse</Link>
      </div>
    </header>
  );
}

export default Header;
