import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page4.css';

const Page4 = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="bg-page">
      <div className="cont-main">
        <div className="header-p4">
          <span className="brand-name">WORKABLE</span>
          <span className="plan-name">Enterprise Plus 1000</span>
          <button className="btn-exit" onClick={handleExit}>
            🡨
          </button>
        </div>
        <div className="nav-p4">
          <div className="nav-item">
            <div className="icon-nav icon-home"></div>
            <span className="link-nav">Inicio</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-recruit"></div>
            <span className="link-nav">Reclutamiento</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-review"></div>
            <span className="link-nav">Reviews</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-employer"></div>
            <span className="link-nav">Employer Branding</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-report"></div>
            <span className="link-nav">Informes</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-setting"></div>
            <span className="link-nav">Configuración</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-support"></div>
            <span className="link-nav">Soporte</span>
          </div>
        </div>
        <div className="main-cont">
          <div className="col-left">
            <div className="info-company">
              <div className="logo-company"></div>
              <div>
                <h2 className="name-company">Empresa genérica</h2>
                <p>Usuario administrador</p>
              </div>
            </div>
            <div className="section-recruit">
              <div className="header-recruit">
                <h3 className="title-section">Reclutamiento</h3>
                <span className="link-manage">Gestionar avisos</span>
              </div>
              <div className="cards-recruit">
                <div className="card-recruit">
                  <div className="circle-placeholder"></div>
                  <p>Avisos publicados</p>
                </div>
                <div className="card-recruit">
                  <div className="circle-placeholder"></div>
                  <p>Avisos destacados</p>
                </div>
                <div className="card-recruit">
                  <div className="circle-placeholder"></div>
                  <p>Avisos urgentes</p>
                </div>
              </div>
              <div className="cont-btn-publish">
                <button className="btn-publish">Publicar oferta</button>
              </div>
            </div>
            <div className="section-stats">
              <div className="header-stats">
                <h3 className="title-section">Estadística</h3>
                <span className="link-more">Ver más estadísticas</span>
              </div>
              <div className="graphs-stats">
                <div className="card-graph">
                  <div className="graph-placeholder"></div>
                  <p>Avisos Activos</p>
                </div>
                <div className="card-graph">
                  <div className="graph-placeholder"></div>
                  <p>Postulantes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="img-placeholder"></div>
            <div className="section-review">
              <div className="header-review">
                <h3 className="title-section">Reviews</h3>
                <span className="link-review">Ver reviews</span>
              </div>
              <div className="cont-review">
                <p>Evaluación general</p>
                <div className="stars-review">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p>Evaluaciones</p>
                <div className="users-review">
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                </div>
                <p>Comentarios</p>
                <div className="comments-review">
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                </div>
              </div>
            </div>
            <div className="section-branding">
              <h3 className="title-section">Employer Branding</h3>
              <p>Mejora la reputación de tu empresa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
