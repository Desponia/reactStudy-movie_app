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

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster img={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
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

function MoviePoster({img}) {
    return (
        <img src={img} alt="Movie Poster"/>
    )
}

MoviePoster.prototypes = {
    img: PropTypes.string.isRequired
}

export default Movie