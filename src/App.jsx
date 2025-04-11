import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Page-1/Header';
import SearchSection from './components/Page-1/SearchSection';
import CompaniesSection from './components/Page-1/CompSection';
import BusinessSection from './components/Page-1/ApSection';
import Page2 from './components/Page-2/page2';
import IniSes from './components/Page-3/InicioSe';
import Page4 from './components/Page-4/Page4'; // Importación nueva
import './components/Page-1/Page1.css'; // Importación del CSS centralizado

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/page2" element={<Page2 />} />
        <Route path="/inisesion" element={<IniSes />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;
