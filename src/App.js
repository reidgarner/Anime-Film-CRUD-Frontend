import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'

class App extends Component {

  constructor (props) {
    super();
    this.state ={
      movies: null,
      title: '',
      director: '',
      year: '',
      rating: '',
      poster_url: ''
    }
  }
  
  componentDidMount(){
    fetch('https://anime-movie-database.herokuapp.com/movies')
    .then((response) => response.json())
    .then(movies => {this.setState(movies)})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          {this.state.movies ? <MovieList movies={ this.state.movies }/> : null}
          <AddMovie />
          <Footer />
        </header>
      </div>
    )
  }
}

export default App
