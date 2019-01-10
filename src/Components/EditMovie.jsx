import React from 'react'
import Movie from './Movie'

const EditMovie = (props) => {
    
    const movieToRender = props.movie.filter(movie => movie.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <div className="movie-card-1">
            <Movie movie={movieToRender}></Movie>
            </div>
            <form className="add-movie col-md-3" onSubmit={props.onEditMovie}>
                <input type="hidden" name="id" defaultValue={movieToRender.id}/>
                <input type="text" name="Title" defaultValue={movieToRender.title}/>
                <input type="text" name="Director" defaultValue={movieToRender.director}/>
                <input type="text" name="Release_Year" defaultValue={movieToRender.year}/>
                <input type="text" name="Rating" defaultValue={movieToRender.your_rating}/>
                <input className="poster col-sm-12" type="url" name="Poster_url" defaultValue={movieToRender.poster_url}/>
                <input type="submit" value="Edit Movie" />
            </form>
        </div>
    )
}

export default EditMovie