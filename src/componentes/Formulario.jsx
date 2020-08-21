import React, { useState, Fragment } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ setBusqueda }) => {
	const [termino, setTermino] = useState('');
	const [error, setError] = useState(false);
	const buscarImagenes = (e) => {
		e.preventDefault();

		// validar
		if (termino.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
		// enviar el término de búsqueda hacia el componente principal
		setBusqueda(termino);
	};
	return (
		<Fragment>
			{error ? <Error mensaje="Agregue un términmo de búsqueda" /> : null}
			<form onSubmit={buscarImagenes}>
				<div className="row">
					<div className="form-group col-md-8">
						<input
							type="text"
							className="form-control bg-white"
							placeholder="Busca una imagen"
							onChange={(e) => setTermino(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									setTermino(e.target.value);
								}
							}}
						/>
					</div>
					<div className="form-group col-md-4">
						<input type="submit" className="btn btn-primary btn-block" value="Buscar" />
					</div>
				</div>
			</form>
		</Fragment>
	);
};

Formulario.propTypes = {
	setBusqueda: PropTypes.func.isRequired,
};

export default Formulario;
