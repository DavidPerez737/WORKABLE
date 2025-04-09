import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Page-1/Header';
import SearchSection from './components/Page-1/SearchSection';
import CompaniesSection from './components/Page-1/CompaniesSection';
import BusinessSection from './components/Page-1/BusinessSection';
import Page2 from './components/Page-2/page2';
import IniSes from './components/Page-3/InicioSe';
import './components/Page-1/page1.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main id="main-content">
                <SearchSection />
                <CompaniesSection />
                <BusinessSection />
              </main>
            </>
          }
        />
        {/* Página Page2 */}
        <Route path="/page2" element={<Page2 />} />
        {/* Página de inicio de sesión */}
        <Route path="/inisesion" element={<IniSes />} />
      </Routes>
    </Router>
  );
}

export default App;