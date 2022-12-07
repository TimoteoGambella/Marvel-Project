import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import logo from "../../assets/marvel.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  /* const { categoryID } = useParams();
  console.log(!categoryID);

  if(!categoryID){
    const links = document.getElementsByClassName('navbar-menu-links')     
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      link.classList.add('hidden')
    }
  } */
  
  return (
    <div className="navbar-container d-flex-row">
      <Link to={"/"}>
        <img src={logo} alt="LOGO" /> 
      </Link>
      <Link className="hidden navbar-menu-links" to={"/category/characters"}>
        <p>Characters</p> 
      </Link>      
      <Link className="hidden navbar-menu-links" to={"/category/comics"}>
        <p>Comics</p> 
      </Link>      
      <Link className="hidden navbar-menu-links" to={"/category/series"}>
        <p>Series</p> 
      </Link>      
      <TextField
        placeholder="Search"
        className="searchbar font-family-marvel-roboto"
        InputProps={{
          className: "searchbar font-family-marvel-roboto",
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          "&.Mui-focused": {
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default NavBar;
