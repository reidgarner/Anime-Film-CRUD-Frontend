import React from 'react'
import { Link } from 'react-router-dom'

const AddMovie = (props) => {
    return (
        <div>
            <form className="add-movie col-md-3" onSubmit={props.onSubmitMovie}>
                <input type="text" name="Title" placeholder="Title"/>
                <input type="text" name="Director" placeholder="Director"/>
                <input type="text" name="Release_Year" placeholder="Release Year"/>
                <input type="text" name="Rating" placeholder="Rating out of 10"/>
                <input type="url" name="Poster_url" placeholder="Poster URL"/>
                <input value="Submit" type="submit"/>
                <Link to='/'>
                    <button className="return-button" type="button" value="Return to Movie List">Return to Movie List</button>
                </Link>
            </form>
        </div>
    )
}

export default AddMovie