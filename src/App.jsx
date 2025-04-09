import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Page-1/Header';
import SearchSection from './components/Page-1/SearchSection';
import CompaniesSection from './components/Page-1/CompaniesSection';
import BusinessSection from './components/Page-1/BusinessSection';
import Page2 from './components/Page-2/page2';
import IniSes from './components/Page-3/InicioSe';
import Page4 from './components/Page-4/Page4';
import './components/Page-1/page1.css'; // Mantenemos esta importación, pero los estilos se aplicarán solo a .page1-container

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="page1-container">
              <Header />
              <main id="main-content">
                <SearchSection />
                <CompaniesSection />
                <BusinessSection />
              </main>
            </div>
          }
        />
        <Route
          path="/page2"
          element={
            <div className="page2-container">
              <Page2 />
            </div>
          }
        />
        <Route
          path="/inisesion"
          element={
            <div className="page3-container">
              <IniSes />
            </div>
          }
        />
        <Route
          path="/page4"
          element={
            <div className="page4-container">
              <Page4 />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;