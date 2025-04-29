import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/MainPage/Header';
import SearchSection from './components/MainPage/SearchSection';
import CompaniesSection from './components/MainPage/CompSection';
import BusinessSection from './components/MainPage/ApSection';
import Page2 from './components/SalariosPage/page2';
import Login from './components/LoginPage/Login';
import Page4 from './components/Page-4/Page4';
import './components/MainPage/Page1.css';
import SignUp from './components/SignUpPage/SignUp';

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
        <Route path="/SalariosPage" element={<Page2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
