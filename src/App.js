import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }
  
  handleChange = e => {
    this.setState({ inputTerms: e.target.checked });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <h4>Formularios</h4>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="name">Nombre: </label>
              <input id="name"
                placeholder="Introduce tu nombre"
                onChange={e => this.setState({ inputName: e.target.value })}
                value={this.state.inputName} />
            </p>
            <p>
              <label htmlFor="twitter">Twitter: </label>
              <input id="twitter"
                placeholder="Introduce tu Twitter"
                onChange={e => this.setState({ inputTwitter: e.target.value })}
                value={this.state.inputTwitter} />
            </p>
            <p>
              <label htmlFor="terms">
                <input id="terms"
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.inputTerms} />
                 Acepto los terminos
              </label>
            </p>
            <button>Enviar</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
