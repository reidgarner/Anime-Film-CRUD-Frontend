import React from 'react'
import Movie from './Movie'

const EditMovie = (props) => {
    
    const movieToRender = props.movie.filter(movie => movie.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <div className="movie-card-1">
            <Movie movie={movieToRender}></Movie>
            </div>
            <form className="add-movie col-md-3">
                <input type="text" name="Title" placeholder="Title"/>
                <input type="text" name="Director" placeholder="Director"/>
                <input type="text" name="Release Year" placeholder="Release Year"/>
                <input type="text" name="Rating" placeholder="Rating out of 10"/>
                <input className="poster" type="url" name="Poster_url" placeholder="Poster URL"/>
                <input type="submit" value="Edit Movie" />
            </form>
        </div>
    )
}

export default EditMovie