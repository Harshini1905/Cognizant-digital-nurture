// src/App.js
import React from 'react';
import './App.css';
import OfficeSpace from './Components/OfficeSpace';

function App() {
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=60"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=60"
    },
    {
      Name: "Smartworks",
      Rent: 58000,
      Address: "Mumbai",
      Image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60"
    },
    {
      Name: "91Springboard",
      Rent: 90000,
      Address: "Delhi",
      Image: "https://images.unsplash.com/photo-1573164574396-9d9446a579a4?auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental Listings</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {officeList.map((office, index) => (
          <OfficeSpace key={index} item={office} />
        ))}
      </div>
    </div>
  );
}

export default App;
