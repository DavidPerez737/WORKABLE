import React from 'react';
import './Page1.css'; // Importación del CSS centralizado

function CompSection() {
  return (
    <section id="companies-section">
      <h1 className="section-title">h1</h1>
      <p className="section-text">p</p>
      <div id="companies-images">
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
      </div>
      <hr className="section-divider" />
      <div className="large-image-placeholder"></div>
      <div className="promo-text">
        <h2 className="section-title">h2</h2>
        <p className="section-text">p</p>
        <p className="section-text">p</p>
      </div>
    </section>
  );
}

export default CompSection;
