import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, year, summary, poster, rating }) {
    return (
        <div>
            <h1>{title} <span>{rating}</span></h1>
            <h2>{year} </h2>
            <h4>{summary}</h4>
            <h5>{poster}</h5>
            <br></br>
        </div>
    );
}

Movie.propTypes = { 
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;