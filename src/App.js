import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenidos a este curso</h2>
      </header>
      <h3>Vamos a aprender React</h3>
      <p>Hola mundo, estoy aprendiendo React</p>
      <strong>Hola mundo con JSX</strong>
    </div>
  );
}

export default App;
