import React, { useState } from 'react';

const Renewal = () => {
  const [studentId, setStudentId] = useState('');
  const [month, setMonth] = useState('');
  const [isPaid, setIsPaid] = useState(false); // Track payment status
  const [paymentAmount, setPaymentAmount] = useState(0); // Payment amount based on selected month

  // Handle payment
  const handlePayment = () => {
    if (!isPaid) {
      alert('Please confirm your payment');
      return;
    }

    alert('Payment successful and Concession Renewed!');
  };

  // Handle month change and update payment amount accordingly
  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setMonth(selectedMonth);

    // Set payment amount based on selected month
    if (selectedMonth === 'January') {
      setPaymentAmount(100); // Example amount for January
    } else if (selectedMonth === 'February') {
      setPaymentAmount(150); // Example amount for February
    } else {
      setPaymentAmount(200); // Default or any other month amount
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Concession Renewal</h2>
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

          <div className="col-md-12 mt-3">
            <label className="form-label">Select Course End Month</label>
            <select
              className="form-select"
              value={month}
              onChange={handleMonthChange}
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          <div className="col-md-12 mt-3">
            <h5>Payment Amount: ${paymentAmount}</h5>
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isPaid}
                onChange={() => setIsPaid(!isPaid)} // Toggle payment status
              />
              Confirm Payment
            </label>
          </div>

          <div className="col-md-12 text-center mt-4">
            <button className="btn btn-success" onClick={handlePayment}>
              Renew Concession and Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renewal;
