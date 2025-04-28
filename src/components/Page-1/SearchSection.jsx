import React from 'react';
import './Page1.css';

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">
        <input id="search-input" type="text" placeholder="Buscaro ofertas..." />
        <button className="search-btn">BUSCAR</button>
      </div>
    </section>
  );
}

export default SearchSection;
