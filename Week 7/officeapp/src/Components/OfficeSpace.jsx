
import React from 'react';

const OfficeSpace = ({ item }) => {
  const colorClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="office-card">
      <img src={item.Image} alt="Office Space" className="office-img" />
      <h2>{item.Name}, at Affordable Range</h2>
      <h3>Name: {item.Name}</h3>
      <h3 className={colorClass}>Rent: ₹{item.Rent}</h3>
      <h3>Address: {item.Address}</h3>
    </div>
  );
};

export default OfficeSpace;
