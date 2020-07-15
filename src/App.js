import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sections/ConditionalSection';
import ConditionalSection from './sections/ConditionalSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ConditionalSection />
    </div>
  );
}

export default App;
