import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class BoxDate extends Component {
  render() {
    return (
      <div
        style={{border: "1px solid #fff", padding: 10, margin: 10}}>
          {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render() {
    const { title, author, date, children } = this.props;
    return (
      <article>
        <h3>{title}</h3>
        <p><em>Escrito por: {author}</em></p>
        <BoxDate>{date}</BoxDate>
        <div>
          {children}
        </div>
      </article>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Children props
        </p>
        <BoxDate>
          Layout BoxDate 1
        </BoxDate>
        <BoxDate>
          Layout BoxDate 2
        </BoxDate>
        <Article
          title="Articulo sobre la prop children"
          author="Tolentino"
          date={new Date().toLocaleDateString()}>
          <p>El contenido que envolvemos dentro del componente Article. Article sera enviado al componente como this.props.children</p>
          <p><strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong></p>
        </Article>
      </header>
    </div>
  );
}

export default App;
