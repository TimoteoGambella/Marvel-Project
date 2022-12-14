import React, { useEffect, useState } from "react";
import wallpaperCharacters from "../../assets/fondo1.png";
import wallpaperComics from "../../assets/fondo4.png";
import wallpaperSeries from "../../assets/fondo2.png";

const MenuHero = ({ categoryID }) => {
  const [menuHeroWallpaper, setMenuHeroWallpaper] = useState("");

  useEffect(() => {
    if (categoryID === "characters") {
      setMenuHeroWallpaper(wallpaperCharacters);
    } else if (categoryID === "comics") {
      setMenuHeroWallpaper(wallpaperComics);
    } else if (categoryID === "series") {
      setMenuHeroWallpaper(wallpaperSeries);
    }
  }, [categoryID]);

  return (
    <div id="menu-container" className="menu-container-hero">
      <img src={menuHeroWallpaper} alt="" />
      <div className="menu-container-hero-text">
        <h1 className="font-family-marvel-principal" id="header">
          marvel {categoryID}
        </h1>
        <h2 className="font-family-marvel-roboto">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
    </div>
  );
};

export default MenuHero;
