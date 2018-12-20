import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
/*
class Movie extends Component{

    // TODO
    // yarn add prop-types
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <MoviePoster img={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
*/

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
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
}

/*
class MoviePoster extends Component{
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        return (
            <img src={this.props.img}/>
        )
    }
}
*/

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