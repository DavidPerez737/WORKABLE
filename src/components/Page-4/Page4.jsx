import React from 'react';
import './Page4.css';

const Page4 = () => {
  return (
    <div className="page-bg">
      <div className="container">
        <div className="branding">
          <span className="brand">WORKABLE</span>
          <span className="plan">Enterprise Plus 1000</span>
        </div>
        <div className="nav-bar">
          <div className="nav-item">
            <div className="nav-icon icon-home"></div>
            <span className="nav-link">Inicio</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon icon-recruitment"></div>
            <span className="nav-link">Reclutamiento</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon icon-reviews"></div>
            <span className="nav-link">Reviews</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon icon-employer"></div>
            <span className="nav-link">Employer branding</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon icon-reports"></div>
            <span className="nav-link">Informes</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon icon-settings"></div>
            <span className="nav-link">Configuración</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon icon-support"></div>
            <span className="nav-link">Soporte</span>
          </div>
        </div>
        <div className="main-content">
          <div className="left-column">
            <div className="company-info">
              <div className="company-logo"></div>
              <div>
                <h2 className="company-name">Empresa genérica</h2>
                <p>Usuario administrador</p>
              </div>
            </div>
            <div className="recruitment">
              <div className="recruitment-header">
                <h3 className="section-title">Reclutamiento</h3>
                <span className="manage-link">Gestionar avisos</span>
              </div>
              <div className="recruitment-cards">
                <div className="card">
                  <div className="circle-placeholder"></div>
                  <p>Avisos publicados</p>
                </div>
                <div className="card">
                  <div className="circle-placeholder"></div>
                  <p>Avisos destacados</p>
                </div>
                <div className="card">
                  <div className="circle-placeholder"></div>
                  <p>Avisos urgentes</p>
                </div>
              </div>
              <div className="publish-button">
                <button className="btn">Publicar oferta</button>
              </div>
            </div>
            <div className="statistics">
              <div className="statistics-header">
                <h3 className="section-title">Estadística</h3>
                <span className="more-link">Ver más estadísticas</span>
              </div>
              <div className="statistics-graphs">
                <div className="graph-card">
                  <div className="graph-placeholder"></div>
                  <p>Avisos Activos</p>
                </div>
                <div className="graph-card">
                  <div className="graph-placeholder"></div>
                  <p>Postulantes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="image-placeholder"></div>
            <div className="reviews">
              <div className="reviews-header">
                <h3 className="section-title">Reviews</h3>
                <span className="reviews-link">Ver reviews</span>
              </div>
              <div className="reviews-content">
                <p>Evaluación general</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p>Evaluaciones</p>
                <div className="users">
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                </div>
                <p>Comentarios</p>
                <div className="comments">
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                </div>
              </div>
            </div>
            <div className="employer-branding">
              <h3 className="section-title">Employer Branding</h3>
              <p>Mejora la reputación de tu empresa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
