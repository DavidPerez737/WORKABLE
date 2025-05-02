import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/MainPage/Main';
import Salary from './components/SalaryPage/Salary';
import Login from './components/LoginPage/Login';
import Page4 from './components/Page-4/Page4';
import SignUp from './components/SignUpPage/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Salary" element={<Salary />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
