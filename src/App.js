import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  handleClick(e) {
    console.log(e);
    console.log(e.nativeEvent);
    alert('Click desde React');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Eventos</h4>
          <button onClick={() => alert('Click desde React!')}>Click me!</button>
          <button onClick={this.handleClick}>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
