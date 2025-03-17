import React, { useState } from 'react';

const StudentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const results = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Search</h2>
      <div className="card p-4 shadow">
        <div className="row g-3">
          <div className="col-md-12">
            <input
              type="text"
              placeholder="Enter Student Name or Email"
              className="form-control"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-md-12 text-center mt-4">
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="mt-4">
            <h5>Search Results:</h5>
            <ul>
              {searchResults.map((student) => (
                <li key={student.id}>
                  {student.name} ({student.email})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentSearch;
