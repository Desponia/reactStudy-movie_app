import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// TODO
// yarn add react-lines-ellipsis
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__columns">
                <MoviePoster img={poster} alt={title}/>
            </div>
            <div className="Movie__columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

// TODO
// yarn add prop-types
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
}


function MoviePoster({img, alt}) {
    return (
        <img src={img} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

MoviePoster.prototypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.prototypes = {
    genres: PropTypes.array.isRequired
}

export default Movie