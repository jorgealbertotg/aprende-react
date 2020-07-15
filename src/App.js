import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends Component {
  /*
  Inicializacion del state dentro del constructor

  constructor() {
    super();
    this.state = { contador: 1 };
  }
  */

  /* Inicializacion del state mediante Class Fields*/
  state = { contador: this.props.contadorInicial };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>
          Contador: <ContadorNumero numero={this.state.contador} />
        </p>
      </div>
    );
  }
}

Contador.defaultProps = {
  contadorInicial : 0
}

class ContadorNumero extends Component {
  render() {
    return (
      <span>{this.props.numero}</span>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador contadorInicial={100}/>
      </header>
    </div>
  );
}

export default App;
