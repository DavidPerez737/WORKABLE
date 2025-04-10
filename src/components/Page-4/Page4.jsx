import React from 'react';
import './Page4.css';

// Componente de Ícono Reutilizable
const NavIcon = ({ path, width = 24, text }) => (
  <div className="page4-nav-item">
    <svg className="page4-svg-icon" viewBox="0 0 16 16" width={width}>
      <path d={path} />
    </svg>
    <li className="page4-nav-text">{text}</li>
  </div>
);

// Componente Principal
function Page4() {
  // Datos para navegación
  const navData = [
    { path: "M8.354 1.146a...", text: "Inicio" },
    { path: "M0 0h1v15...", text: "Reclutamiento", width: 100 },
    { path: "M2.866 14.85c...", text: "Reviews", width: 60 },
    // ... Agregar todos los items aquí
  ];

  // Datos para gráficos
  const chartData = [
    { type: 'pie', labels: ['Publicados', 'Destacados', 'Urgentes'] },
    { type: 'line', points: ["0,80 30,60...", "0,90 30,70..."], titles: ['Activos', 'Postulados'] }
  ];

  return (
    <div id="page4-container">
      {/* Header */}
      <header className="page4-header">
        <h1 className="page4-main-title">WORKABLE</h1>
        <div className="page4-header-group">
          <h2 className="page4-subtitle">Enterprise plus 1000</h2>
          <button className="page4-support-btn">Soporte</button>
        </div>
      </header>

      {/* Navegación */}
      <nav className="page4-navigation">
        <ul className="page4-nav-list">
          {navData.map((item, i) => (
            <NavIcon key={i} {...item} />
          ))}
        </ul>
      </nav>

      {/* Contenido Principal */}
      <main className="page4-content">
        {/* Sección Empresa */}
        <section className="page4-company-section">
          <div className="page4-company-info">
            <h2>Empresa genérica</h2>
            <p>Usuario administrador</p>
          </div>
          <div className="page4-company-graphic">
            {/* SVG simplificado */}
            <svg className="page4-graphic">
              <rect width="100%" height="100%" />
              <line x1="0" y1="0" x2="100%" y2="100%" />
              <line x1="0" y1="100%" x2="100%" y2="0" />
            </svg>
          </div>
        </section>

        {/* Sección Estadísticas */}
        <section className="page4-stats-section">
          <div className="page4-stats-header">
            <h3>Reclutamiento</h3>
            <a href="#gest">Gestionar avisos</a>
          </div>

          <div className="page4-charts">
            {/* Gráficos de Pastel */}
            <div className="page4-pie-charts">
              {chartData[0].labels.map((label, i) => (
                <div key={i} className="page4-pie-group">
                  <div className={`page4-pie chart-${i+1}`} />
                  <p>{label}</p>
                </div>
              ))}
            </div>

            {/* Gráficos de Línea */}
            <div className="page4-line-charts">
              {chartData[1].points.map((points, i) => (
                <div key={i} className="page4-line-group">
                  <h4>{chartData[1].titles[i]}</h4>
                  <svg className="page4-line">
                    <polyline points={points} />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="page4-sidebar">
          <div className="page4-reviews">
            <h3>Reviews</h3>
            {/* Contenido reviews */}
          </div>
          
          <div className="page4-branding">
            <h3>Employer Branding</h3>
            <p>Mejora tu reputación</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Page4;