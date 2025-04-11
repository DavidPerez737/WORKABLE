import React from 'react';
import './Page1.css';

function CompSection() {
  return (
    <section className="comp-section">
      <h1 className="title">h1</h1>
      <p className="text">p</p>
      <div className="div-images">
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
      </div>
      <hr className="divider" />
      <div className="large-img-placeholder"></div>
      <div className="promo">
        <h2 className="title">h2</h2>
        <p className="text">p</p>
        <p className="text">p</p>
      </div>
    </section>
  );
}

export default CompSection;
