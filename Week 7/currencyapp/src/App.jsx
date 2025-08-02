
import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello(); 
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const sayWelcome = (msg) => {
    alert(`Welcome message: ${msg}`);
  };

  const handleClick = (e) => {
    alert('I was clicked!');
  };

  return (
    <div style={{ margin: '20px' }}>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome('Welcome to Event Examples App!')}>Say welcome</button>
      <br /><br />
      <button onClick={handleClick}>Click on me</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
