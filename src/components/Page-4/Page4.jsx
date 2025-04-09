import React from 'react';
import './Page4.css';

function Page4() {
  return (
    <>
      <div className='header'>
        <h1>WORKABLE</h1>
        <h2>Enterprise plus 1000</h2>
        <button className='button'>Soporte</button>
      </div>

      <div className='seccion'>
        <ul>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="17" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
            </svg>
            <li>Inicio</li>
          </div>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="17" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
            </svg>
            <li>Reclutamiento</li>
          </div>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="17" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
            <li>Reviews</li>
          </div>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="17" fill="currentColor" className="bi bi-suitcase-lg" viewBox="0 0 16 16">
              <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"/>
            </svg>
            <li>Marca del empleador</li>
          </div>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="17" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0z"/>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
            </svg>
            <li>Informes</li>
          </div>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="17" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
              <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
            </svg>
            <li>Configuración</li>
          </div>
          <div className='Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="17" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a.1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            <li>Soporte</li>
          </div>
        </ul>
      </div>

      <div className='EmprGen-Container'>
        <section className='TitEmpresa'>
          <h2>Empresa genérica</h2>
          <p>Usuario administrador</p>
        </section>
        <div className="RightColumn">
          <div className='Rectangulo'>
            <svg width="140" height="80" viewBox="0 0 140 80">
              <rect x="0" y="0" width="140" height="80" fill="whitesmoke" stroke="black" strokeWidth="1"/>
              <line x1="0" y1="0" x2="140" y2="80" stroke="black" strokeWidth="1" />
              <line x1="0" y1="80" x2="140" y2="0" stroke="black" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      <div className='RowContainer'>
        <section className='SecciReclutador'>
          <div className="header-reclutador">
            <h3>Reclutamiento</h3>
            <a href="Gest">Gestionar avisos</a>
          </div>
          <div className="graficos-container">
            <div className="container">
              <div className="pie-chart pie-chart-1"></div>
              <p className="PieChart">Avisos publicados</p>
            </div>
            <div className="container">
              <div className="pie-chart pie-chart-2"></div>
              <p className="PieChart">Avisos destacados</p>
            </div>
            <div className="container">
              <div className="pie-chart pie-chart-3"></div>
              <p className="PieChart">Avisos urgentes</p>
            </div>
          </div>
          <button className="ButtonOfer">Publicar oferta</button>
          <div className='EditText'>
            <h4>Estadísticas</h4>
            <h5>Últimos 30 días</h5>
          </div>
          <div className="line-charts-container">
            <div className='EditChart'>
              <h6>Avisos activos</h6>
              <svg width="150" height="100" viewBox="0 0 150 100">
                <polyline points="0,80 30,60 60,70 90,50 120,60 150,20" fill="none" stroke="#666" strokeWidth="2" />
                <line x1="0" y1="100" x2="150" y2="100" stroke="#e0e0e0" strokeWidth="1" />
              </svg>
              <p>Total: 8</p>
            </div>
            <div className='EditChart'>
              <h6>Postulados</h6>
              <svg width="150" height="100" viewBox="0 0 150 100">
                <polyline points="0,90 30,70 60,80 90,60 120,40 150,20" fill="none" stroke="#666" strokeWidth="2" />
                <line x1="0" y1="100" x2="150" y2="100" stroke="#e0e0e0" strokeWidth="1" />
              </svg>
              <p>Total: 8</p>
            </div>
          </div>
          <a href="Gest" className="ver-mas-estadisticas">Ver más estadísticas</a>
        </section>

        <div className="RightColumn">
          <div className="ContainerReviews">
            <div className="ReviewHeader">
              <h3>Reviews</h3>
              <a href="Reviews">Ver reviews</a>
            </div>
            <div className="EstadsReviews">
              <div className="stat">
                <p>Evaluación general</p>
                <p>## Evaluaciones</p>
                <div className="Iconos">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="stat">
                <p>Evaluaciones ## personas</p>
                <div className="Iconos">
                  <span>##%</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="green" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                      <path d="M6.956 1.742C7.666.677 8.725 0 10 0c.206 0 .412.018.614.055.644.116 1.242.463 1.691.982.454.524.695 1.185.695 1.895 0 .51-.143.983-.386 1.395-.234.396-.548.73-.943.976-.405.252-.868.428-1.367.521l-.008 2.433c0 .414-.336.75-.75.75h-.008l-1.35.3c-.413.091-.688.45-.688.863v2.57c0 .546-.406.984-.937 1.045-.22.025-.445.038-.672.038-1.58 0-2.982-.73-3.902-1.86l-.695-.975H1.5A1.5 1.5 0 0 1 0 10.5V5a1.5 1.5 0 0 1 1.5-1.5h1.508l1.687-1.897c.633-.712 1.57-1.105 2.261-.861zm-2.12 2.59L3.15 6.228c-.19.213-.378.424-.563.638H1.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5h1.508c.326.615.848 1.13 1.48 1.465.856.453 1.854.585 2.854.585.227 0 .453-.013.672-.038.16-.018.284-.143.284-.295v-2.57c0-.863.563-1.62 1.413-1.88l1.35-.3h.008c.966 0 1.75-.784 1.75-1.75V5.71c.567-.11 1.098-.34 1.558-.67.498-.357.892-.86.892-1.49 0-.876-.314-1.67-.82-2.25-.515-.593-1.237-1.003-2.017-1.14C11.588.136 10.806 0 10 0c-1.588 0-2.873.854-3.584 2.15-.26.472-.64.86-1.08 1.082z"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="stat">
                <p>Evaluación de la gerencia</p>
                <p>## Evaluaciones</p>
                <div className="Iconos">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="stat">
                <p>Followers</p>
                <p>###</p>
                <div className="Iconos">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="EmployerBranding">
            <h3>Employer Branding</h3>
            <p>Mejora la reputación de tu empresa</p>
            <p>01/01/2023 - 01/01/2024</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page4;