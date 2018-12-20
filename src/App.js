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
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
        .then(response => response.json())
        // .then(res => console.log(res.data.movies))
        .then(res => res.data.movies)
        .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie) => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ?  this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
