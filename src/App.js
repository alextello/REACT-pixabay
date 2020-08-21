import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Spinner from './componentes/Spinner';
import ListadoImagenes from './componentes/ListadoImagenes';

function App() {
  // state de la app
  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setpaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const buscar = async () => {
      if (busqueda === '') return;
      setCargando(true);
      const imagenesPorPag = 15;
      const key = '17993986-a0a50a1cbc5895e450229bf6d';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPag}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenes(resultado.hits);

      // calcular total de páginas
      const totalPaginas = Math.ceil(resultado.totalHits / imagenesPorPag);
      setTotalPaginas(totalPaginas);
      setTimeout(() => {
        setCargando(false);
      }, 1000);

      // mover pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
    }
    buscar();
  }, [busqueda, paginaActual])

  // definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) return;
    setpaginaActual(nuevaPaginaActual);
  }

  // definir la página siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas) return;
    setpaginaActual(nuevaPaginaActual);
  }
  return (
    <div className="container my-5">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      {cargando ?
        <Spinner /> :

        <div className="row justify-content center">
          <ListadoImagenes imagenes={imagenes} />
          <div className="mx-auto">
            {paginaActual === 1 ? null :
              <button
                type="button"
                className="btn btn-info mr-1"
                onClick={paginaAnterior}
              >&laquo; Anterior</button>
            }
            {paginaActual === totalPaginas ?
              null
              : <button
                type="button"
                className="btn btn-info mr-1"
                onClick={paginaSiguiente}
              >Siguiente &raquo;</button>
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
