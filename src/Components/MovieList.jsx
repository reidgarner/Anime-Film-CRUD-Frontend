import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    console.log(props)
    return (
        <div class="movie-cards">
        {props.movies.map(movie => <Movie movie={movie}></Movie>)}
        </div>
    )
}

export default MovieList
