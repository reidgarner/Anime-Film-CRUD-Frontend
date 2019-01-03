import React from 'react'

const AddMovie = () => {
    return (
        <div>
            <form class="add-movie col-md-3">
                <input type="text" name="Title" placeholder="Title"/>
                <input type="text" name="Director" placeholder="Director"/>
                <input type="text" name="Release Year" placeholder="Release Year"/>
                <input type="text" name="Rating" placeholder="Rating out of 10"/>
                <input type="url" name="Poster_url" placeholder="Poster URL"/>
                <input type="submit" value="Add Movie" />
            </form>
        </div>
    )
}

export default AddMovie