import React, { Component } from 'react';

class ComponentA extends Component {
  render() {
    return (
      <p>Componente A</p>
    );
  }
}

class ComponentB extends Component {
  render() {
    return (
      <p>Componente B</p>
    );
  }
}

/* Función utilizada para el renderizado funcional */
function useConditionalRendering(mostrarA) {
  if (mostrarA) {
    return <ComponentA />
  }
  return <ComponentB />
}

class ConditionalSection extends Component {
  state = {
    mostrarA: true
  }

  render() {
    /*
    Usando interpolacion de una funcion para renderizar condicionalmente
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {useConditionalRendering(this.state.mostrarA)}
      </div>
    );
    */
    /*
    Usando una constante para renderizar condicionalmente
    
    const conditionalComponent = useConditionalRendering(this.state.mostrarA);
    return (
    <div>
      <h4>Conditional Rendering</h4>
      {conditionalComponent}
    </div>
    );
    */
    /*
    Usando el resultado de un operador ternario en una constante para renderizar condicionalmente
    
    const conditionalComponent = this.state.mostrarA ? <ComponentA /> : <ComponentB />;
    return (
    <div>
      <h4>Conditional Rendering</h4>
      {conditionalComponent}
    </div>
    );
    */
    /*
    Usando el resultado de un operador ternario en una constante para renderizar condicionalmente
    */
    return (
    <div>
      <h4>Conditional Rendering</h4>
      {this.state.mostrarA ? <ComponentA /> : <ComponentB />}
    </div>
    );
  }
}

export default ConditionalSection;