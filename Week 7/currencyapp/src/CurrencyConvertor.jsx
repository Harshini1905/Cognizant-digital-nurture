
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro');

  const handleSubmit = (e) => {
    e.preventDefault();

    let converted = 0;
    const rupee = parseFloat(amount);

    if (currency === 'Euro') {
      converted = rupee * 80; // Example: 1 Euro = 80 INR
    } else if (currency === 'USD') {
      converted = rupee * 75; // Example: 1 USD = 75 INR
    }

    alert(`Converting to ${currency} Amount is ${converted}`);
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount: 
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Currency: 
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Euro">Euro</option>
            <option value="USD">USD</option>
          </select>
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CurrencyConvertor;
