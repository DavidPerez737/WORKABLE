import React from 'react';
import './Page1.css'; // Importación del CSS centralizado

function ApSection() {
  return (
    <section id="business-section">
      <hr className="section-divider" />
      <h1 className="section-title">h1</h1>
      <p className="section-text">p</p>
      <div id="business-images">
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
      </div>
      <div id="business-text">
        <p className="business-T">p</p>
        <p className="business-T">p</p>
        <p className="business-T">p</p>
      </div>
    </section>
  );
}

export default ApSection;
