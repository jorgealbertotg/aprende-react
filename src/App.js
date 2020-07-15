import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Body extends Component {
  render() {
    const {
      encabezado,
      nombre,
      curso
    } = this.props;
    return (
      <main>
        <h1>{encabezado}</h1>
        <p>
          Bienvenido {nombre}
        </p>
        <p>
          Este es el curso de {curso.nombre} de {curso.autor}
        </p>
      </main>
    );
  }
}

Body.defaultProps = {
  encabezado : '¡Bienvenido! :)'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Body nombre="Jorge" curso={{autor: 'Udemy', nombre: "React"}}/>
    </div>
  );
}

export default App;
