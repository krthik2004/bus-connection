// Correct the import here
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ 
      backgroundImage: "url('https://cdn.dribbble.com/userupload/28826579/file/original-06b8ab714abe2554d870aa41182c04e2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 className="mb-4 fw-bold" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px', borderRadius: '10px' }}>
        Welcome to the Dashboard
      </h1>
      <div className="d-flex flex-column gap-3">
        <Link to="/student-registration">
          <button className="btn btn-light w-100">Student Registration</button>
        </Link>
        <Link to="/student-concession-renewal">
          <button className="btn btn-light w-100">Student Concession Renewal</button>
        </Link>
        <Link to="/student-search">
          <button className="btn btn-light w-100">Student Search</button>
        </Link>
        <Link to="/renewal-history">
          <button className="btn btn-light w-100">Renewal History</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
