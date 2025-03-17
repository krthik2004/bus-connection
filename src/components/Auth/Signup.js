import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((u) => u.username === user.username);
    if (existingUser) {
      alert('Username already taken');
    } else {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful');
      navigate('/login');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ 
      backgroundImage: "url('https://source.unsplash.com/1600x900/?bus,travel')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="card p-5 shadow-lg" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
        <h2 className="text-center mb-4 text-primary">Signup</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Username"
            className="form-control"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary w-100" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;