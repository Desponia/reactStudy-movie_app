import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = ['Matrix', 'Full Metal Jacket', 'Oldboy', 'Star Wars']
const movieImages = [
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg',
    'https://i.guim.co.uk/img/static/sys-images/Guardian/Archive/Search/2011/11/29/1322566607438/Oldboy-007.jpg?width=300&quality=85&auto=format&fit=max&s=3ac281a9bcd9fa4ee5ef845dfaa27728',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
