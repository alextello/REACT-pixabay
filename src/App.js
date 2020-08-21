import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
function App() {
  // state de la app
  const [busqueda, setBusqueda] = useState('');
  useEffect(() => {
    const buscar = async () => {
      if (busqueda === '') return;
      const imagenesPorPag = 10;
      const key = '17993986-a0a50a1cbc5895e450229bf6d';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPag}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setBusqueda(resultado);
    }
    buscar();
  }, [busqueda])
  return (
    <div className="container my-5">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
    </div>
  );
}

export default App;
