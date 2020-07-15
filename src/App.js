import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import albums from './data/albums.json';

class AlbumItem extends Component {
  render() {
    const { id, album } = this.props;
    return (
      <li>
        <p>{id}</p>
        <p><strong>Nombre:</strong> {album.name}</p>
        <p><strong>Artista:</strong> {album.artist}</p>
      </li>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Albums</p>
          <ul>
            {
              albums.map(album => {
                return <AlbumItem key={album.id} id={album.id} album={album}/>
              })
            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
