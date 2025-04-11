import React from 'react';
import './Page1.css';

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">
        <input id="search-input" type="text" placeholder="input" />
        <button className="search-btn">button</button>
      </div>
    </section>
  );
}

export default SearchSection;
