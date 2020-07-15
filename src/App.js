import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const numbers = [0, 1, 1, 2, 3, 5, 8];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Serie de Fibonacci</p>
          {
            numbers.map((number, index) => {
            return <p key={index}>{number}</p>
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
