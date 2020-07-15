import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Componente funcional
function Hello(props) {
  return <h2>{props.title}</h2>
}

// Componente funcional con arrow function
const Welcome = props => <h3>{props.name} bienvenido al curso de React</h3>

// Componente de clase
class Description extends Component {
  render() {
    return (
      <div>
        {this.props.showLabel ? <span>Descripción: </span>: ''}
        <span>{this.props.text}</span>

        <div>
          <p>Temas:</p>
          {
            this.props.themes.map(element => {
              console.log(element)
              return <p key={element}>{element}</p>
            })
          }
        </div>
        <div>
          <p>Autor</p>
          <p><span>Nombre: {this.props.autor.nombre}</span></p>
          <p><span>Curso: {this.props.autor.curso}</span></p>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hola desde React"/>
        <Welcome name="Jorge"/>
      </header>
      <Description text="Curso de ReactJS" showLabel themes={[0, 1, 2, 3]} autor={{nombre: 'Tolentino', curso: 'React'}}/>
    </div>
  );
}

export default App;
