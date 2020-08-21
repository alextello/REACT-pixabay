import React from 'react';
import Formulario from './componentes/Formulario';
function App() {
  return (
    <div className="container my-5">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
