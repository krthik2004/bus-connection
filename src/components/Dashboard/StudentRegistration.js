import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentRegistration = () => {
  const [student, setStudent] = useState({
    name: '',
    dob: '',
    email: '',
    phone: '',
    class: '',
    address: '',
    pinCode: '',
    state: '',
    city: '',
    institution: '',
    photo: ''
  });
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    if (!student.name || !student.dob || !student.email || !student.phone || !student.class || !student.address || !student.pinCode || !student.state || !student.city || !student.institution) {
      setMessage('All fields are required!');
      return false;
    }
    if (!/^\d{10}$/.test(student.phone)) {
      setMessage('Enter a valid 10-digit phone number!');
      return false;
    }
    if (!/^\d{6}$/.test(student.pinCode)) {
      setMessage('Enter a valid 6-digit pin code!');
      return false;
    }
    setMessage('');
    return true;
  };

  const handleRegister = () => {
    if (!validateForm()) return;

    const uniqueId = Math.random().toString(36).substr(2, 9);
    const studentData = { ...student, id: uniqueId };
    setQrCodeValue(JSON.stringify(studentData));
    setMessage('Student registered successfully. QR Code generated!');
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setStudent({ ...student, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?education,school')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="card p-4 shadow-lg" style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
        <h2 className="text-center mb-4">Student Registration</h2>
        {message && <div className="alert alert-info text-center">{message}</div>}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Photo</label>
            <input type="file" className="form-control" onChange={handlePhotoUpload} />
            {student.photo && (
              <img src={student.photo} alt="Uploaded" className="img-thumbnail mt-2" style={{ width: '100px', height: '100px' }} />
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={student.dob}
              onChange={(e) => setStudent({ ...student, dob: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={student.email}
              onChange={(e) => setStudent({ ...student, email: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone Number"
              value={student.phone}
              onChange={(e) => setStudent({ ...student, phone: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Class</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Class"
              value={student.class}
              onChange={(e) => setStudent({ ...student, class: e.target.value })}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              rows="2"
              placeholder="Enter Address"
              value={student.address}
              onChange={(e) => setStudent({ ...student, address: e.target.value })}
            ></textarea>
          </div>
          <div className="col-md-4">
            <label className="form-label">Pin Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pin Code"
              value={student.pinCode}
              onChange={(e) => setStudent({ ...student, pinCode: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter State"
              value={student.state}
              onChange={(e) => setStudent({ ...student, state: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={student.city}
              onChange={(e) => setStudent({ ...student, city: e.target.value })}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">College/School Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Institution Name"
              value={student.institution}
              onChange={(e) => setStudent({ ...student, institution: e.target.value })}
            />
          </div>
          {qrCodeValue && (
            <div className="col-md-12 text-center mt-4">
              <div className="card p-3 shadow">
                <h4>QR Code for Bus Permission</h4>
                <QRCodeCanvas value={qrCodeValue} size={200} />
              </div>
            </div>
          )}
          <div className="col-md-12 text-center mt-4">
            <button className="btn btn-primary" onClick={handleRegister}>
              Register and Generate QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
