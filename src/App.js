import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import EditMovie from './Components/EditMovie'
import { Route, BrowserRouter as Router } from 'react-router-dom'

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

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  onSubmitMovie = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    let newMovie = {
      title: formData.get('Title'),
      director: formData.get('Director'),
      year: formData.get('Release_Year'),
      your_rating: formData.get('Rating'),
      poster_url: formData.get('Poster_url')
    }
    console.log(newMovie)
    return fetch("https://anime-movie-database.herokuapp.com/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMovie)
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        movies: [...this.state.movies, response[0]]
      })
    })
  }

  deleteMovie = (event) => {
    console.log(typeof event.target.id)
    fetch(`https://anime-movie-database.herokuapp.com/movies/${Number(event.target.id)}`, {
      method: "DELETE",
    })
    let movies = this.state.movies.filter(movie => {
      return movie.id !== Number(event.target.id)
    })
    this.setState({
      movies: movies
    })
  }
  
  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Route path="/AddMovie" render ={() => (<AddMovie onSubmitMovie={this.onSubmitMovie}/>)} />
            {this.state.movies ? <Route exact path="/" render={() => <MovieList movies={ this.state.movies } deleteMovie={this.deleteMovie}/>}/> : null}
            {this.state.movies ? <Route path="/EditMovie/:id" render={({match}) => <EditMovie movie={ this.state.movies } match={match}/>}/> : null}
            <Footer />
          </header>
        </div>
      </Router>
    )
  }
}

export default App
