import React, { useState } from 'react';

const RenewalHistory = () => {
  const [studentId, setStudentId] = useState('');
  const [history, setHistory] = useState([]);

  const handleFetchHistory = () => {
    const allHistory = JSON.parse(localStorage.getItem('renewalHistory')) || [];
    const studentHistory = allHistory.filter((entry) => entry.studentId === studentId);
    setHistory(studentHistory);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Concession Renewal History</h2>
      <div className="card p-4 shadow">
        <div className="row g-3">
          <div className="col-md-12">
            <input
              type="text"
              placeholder="Enter Student ID"
              className="form-control"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="col-md-12 text-center mt-4">
            <button className="btn btn-primary" onClick={handleFetchHistory}>
              Fetch History
            </button>
          </div>
        </div>

        {history.length > 0 && (
          <div className="mt-4">
            <h5>Renewal History:</h5>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>
                  <div>
                    <strong>Month:</strong> {entry.month} | 
                    <strong> Payment Status:</strong> {entry.paymentStatus} | 
                    <strong> Payment Amount:</strong> ${entry.amount}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenewalHistory;
