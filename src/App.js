import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // TODO for test >> cors
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json())
        // .then(res => console.log(res.data.movies))
        .then(res => res.data.movies)
        .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie) => {
      console.log(movie)
        return <Movie title={movie.title_english}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      synopsis={movie.synopsis}
                      key={movie.id}
        />
    })
    return movies
  }

  render() {
    const {movies} = this.state
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
