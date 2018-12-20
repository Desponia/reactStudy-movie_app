import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    greeting: 'Hello!',
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
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
            ...this.state.movies,
          {
            title: "TrainsPotting",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg"
          }
        ]
      })
    }, 3000)
    /*
    setTimeout(() => {
      // 직접적으로 state를 변경하면 안됨 --> 직접적으로 변경하면 render가 작동하지 않음
      // this.state.greeting = 'somthing'

      this.setState({
        greeting: 'Hello again!'
      })
    }, 2000)
    */
  }

  render() {
    console.log('render~')
    return (
      <div className="App">
        {/*{this.state.greeting}*/}
        {this.state.movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
