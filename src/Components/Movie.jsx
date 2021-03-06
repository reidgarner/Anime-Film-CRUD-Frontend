import React from 'react'

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
            </div>
    )
}

export default Movie