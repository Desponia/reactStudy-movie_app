import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: 'Matrix',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg'
          },
          {
            title: 'Full Metal Jacket',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg'
          },
          {
            title: 'Oldboy',
            poster: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Archive/Search/2011/11/29/1322566607438/Oldboy-007.jpg?width=300&quality=85&auto=format&fit=max&s=3ac281a9bcd9fa4ee5ef845dfaa27728'
          },
          {
            title: 'Star Wars',
            poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'
          },
          {
            title: "World War Z",
            poster: "https://www.cinesite.com/wp-content/uploads/2015/04/world_war_z_xlg-528x787.jpg"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
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
