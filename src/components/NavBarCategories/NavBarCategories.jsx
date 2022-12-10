import React from 'react'
import { Link } from 'react-router-dom'

const NavBarCategories = () => {
  return (
    <div className="d-flex-row navbar-menu">
        <Link className="navbar-menu-links" to={"/category/characters"}>
          <p>Characters</p> 
        </Link>      
        <Link className="navbar-menu-links" to={"/category/comics"}>
          <p>Comics</p> 
        </Link>      
        <Link className="navbar-menu-links" to={"/category/series"}>
          <p>Series</p> 
        </Link>      
    </div>
  )
}

export default NavBarCategories