import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    return (
        <div className="buttons">
            <div className="card">
                <div>Movie: {props.movie.title}</div>
                <div>Director: {props.movie.director}</div>
                <div>Released: {props.movie.year}</div>
                <div>Rating: {props.movie.your_rating}</div>
                <img className="poster col-sm-12" src={props.movie.poster_url} alt=""></img>
            </div>
            <div className="button-container">
            <Link className="btn btn-secondary edit-movie" to={`/EditMovie/${props.movie.id}`}>Edit</Link>
            <button onClick={(event) => props.deleteMovie(event)} className="btn btn-secondary delete-movie" id={props.movie.id}>Delete</button>
            </div>
        </div>
    )
}

export default Movie