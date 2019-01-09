import React from 'react'
import MovieWedit from './MovieWedit'
import { Link } from 'react-router-dom'

const MovieList = (props) => {
    return (
        <div className="movie-cont">
            <Link className="btn btn-secondary add-movie-main" to="/AddMovie" submitnewmovie={props.submitNewMovie}>Add Movie</Link>
            <div className="movie-cards">
            {props.movies.map(movie => <MovieWedit movie={movie} key={'movie'+movie.id} deleteMovie={props.deleteMovie}></MovieWedit>) }
            </div>
        </div>
    )
}

export default MovieList