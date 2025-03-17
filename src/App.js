import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import StudentRegistration from './components/Dashboard/StudentRegistration';
import Renewal from './components/Dashboard/Renewal';
import Dashboard from './components/Dashboard/Dashboard';
import StudentSearch from './components/Dashboard/StudentSearch';
import RenewalHistory from './components/Dashboard/RenewalHistory';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ 
      backgroundImage: "url('https://img-mm.manoramaonline.com/content/dam/mm/mo/news/sunday/images/2022/5/15/ksrtc-bus-service-1938-7.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    }}>
      <h1 className="mb-4">Welcome to the Bus Connection System</h1>
      <div>
        <Link to="/login" className="btn btn-primary me-3">Login</Link>
        <Link to="/signup" className="btn btn-outline-light">Signup</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/student-concession-renewal" element={<Renewal />} />
        <Route path="/student-search" element={<StudentSearch />} />
        <Route path="/renewal-history" element={<RenewalHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
