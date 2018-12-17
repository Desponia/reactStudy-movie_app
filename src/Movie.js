import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

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
export default Movie