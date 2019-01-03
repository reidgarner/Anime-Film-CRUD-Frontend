import React from 'react'

const Movie = (props) => {
    return (
        <div class="buttons">
            <div class="card">
                <div>Movie: {props.movie.title}</div>
                <div>Director: {props.movie.director}</div>
                <div>Released: {props.movie.year}</div>
                <div>Rating: {props.movie.your_rating}</div>
                <img class="poster col-sm-12" src={props.movie.poster_url} alt=""></img>
            </div>
            <button>Edit Movie</button>
            <button>Delete Movie</button>
        </div>
    )
}

export default Movie