import React from 'react';
import PropTypes from 'prop-types';

const Imagen = ({ imagen }) => {
	const { largeImageURL, likes, previewURL, tags, views } = imagen;
	return (
		<div className="card">
			<img className="card-img-top" src={previewURL} alt={tags} />
			<div className="card-body">
				<h5 className="card-title">{tags}</h5>
				<p className="card-text">{likes} Me Gusta</p>
				<p className="card-text">
					<small className="text-muted">{views} Vistas</small>
				</p>
			</div>
			<div className="card-footer">
				<a
					className="btn btn-block btn-info"
					href={largeImageURL}
					rel="noopener noreferrer"
					target="_blank"
				>
					Ver imagen
				</a>
			</div>
		</div>
	);
};

Imagen.propTypes = {};

export default Imagen;
