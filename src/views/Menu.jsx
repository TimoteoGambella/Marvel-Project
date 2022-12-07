import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import wallpaperCharacters from "../assets/fondo1.png";
import wallpaperSeries from "../assets/fondo2.png";
import wallpaperComics from "../assets/fondo4.png";
// import { UseApiContext } from "../context/ApiContext";

const Menu = () => {
  // const {apiFetch1}=useContext(UseApiContext)

  // useEffect(() => {
  //     apiFetch1("https://odshjfdsfñsldfdsfsdf").then((res)=>{
  //         console.log(res)
  //     })
  // }, []);

  const [wallpaper, setWallpaper] = useState("");

  const { categoryID } = useParams();
  //console.log(categoryID);
  if (categoryID) {
    const links = document.getElementsByClassName("navbar-menu-links");
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      link.classList.remove("hidden");
    }
  }

  useEffect(() => {
    switch (categoryID) {
      case "characters":
        setWallpaper(wallpaperCharacters);
        //console.log(`The selected category is: ${categoryID}`);
        break;
      case "comics":
        setWallpaper(wallpaperComics);
        //console.log(`The selected category is: ${categoryID}`);
        break;
      case "series":
        setWallpaper(wallpaperSeries);
        //console.log(`The selected category is: ${categoryID}`);
        break;
      default:
        setWallpaper(wallpaperCharacters);
        break;
    }
  }, [categoryID]);

  return (
    <div className="menu-container">
      <img className="menu-container-wallpaper" src={wallpaper} alt="" />
      <h1>{categoryID}</h1>
    </div>
  );
};

export default Menu;
