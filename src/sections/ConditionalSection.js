import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return (
      <button>Iniciar Sesión</button>
    );
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido, usuario</p>
        <button>Cerrar sesión</button>
      </div>
    );
  }
}

class ConditionalSection extends Component {
  state = {
    isUserLogged: false
  }

  render() {
    return (
    <div>
      {this.state.isUserLogged ? <LogoutButton /> : <LoginButton />}
    </div>
    );
  }
}

export default ConditionalSection;