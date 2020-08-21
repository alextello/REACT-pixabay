import React, { Fragment } from 'react';
import Imagen from './Imagen';
import PropTypes from 'prop-types';

const ListadoImagenes = ({ imagenes }) => {
	return (
		<Fragment>
			<div className="card-columns">
				{imagenes.map((imagen, idx) => (
					<Imagen key={idx} imagen={imagen} />
				))}
			</div>
		</Fragment>
	);
};

ListadoImagenes.propTypes = {};

export default ListadoImagenes;
