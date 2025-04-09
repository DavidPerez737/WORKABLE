import React from 'react';
import './Page1.css';

function SearchSection() {
  return (
    <section id="search-section">
      <div id="search-container">
        <input id="search-input" type="text" placeholder="input" />
        <button id="search-button">button</button>
      </div>
    </section>
  );
}

export default SearchSection;