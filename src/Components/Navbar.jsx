import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Anime Films</Link>
                </nav>
            </div>
    )
}

export default Navbar