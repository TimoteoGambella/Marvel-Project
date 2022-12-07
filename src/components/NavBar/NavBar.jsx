import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import logo from "../../assets/marvel.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container d-flex-row">
      <Link to={"/"}>
        <img src={logo} alt="LOGO" /> 
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
