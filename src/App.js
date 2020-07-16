import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { mouseX:0, mouseY: 0 };
  }

  handleMouseMove = e => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div onMouseMove={this.handleMouseMove}
            style={{border: '1px solid red', margin: 20, padding: 20}}>
            <p>{this.state.mouseX}, {this.state.mouseY}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
