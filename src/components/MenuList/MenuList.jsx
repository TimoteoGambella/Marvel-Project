import React, { useEffect, useState } from "react";
import MenuListCard from "../MenuListCard/MenuListCard";
import wallpaperCharactersList from "../../assets/fondoListCharacters.png";
import wallpaperComicsList from "../../assets/fondoListComics.png";
import wallpaperSeriesList from "../../assets/fondoListSeries.png";

const MenuList = ({ categoryID }) => {
  const [menuListWallpaper, setMenuListWallpaper] = useState("");

  useEffect(() => {
    if (categoryID === "characters") {
      setMenuListWallpaper(wallpaperCharactersList);
    } else if (categoryID === "comics") {
      setMenuListWallpaper(wallpaperComicsList);
    } else if (categoryID === "series") {
      setMenuListWallpaper(wallpaperSeriesList);
    }
  }, [categoryID]);

  return (
    <div className="menu-list-container">
      <div className="menu-container-list-wallpaper">
        <img
          id="menu-list-wallpaper"
          src={menuListWallpaper}
          alt="listWallpaper"
        />
      </div>
      <div className="menu-container-list-cards">
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
        <MenuListCard
          heroImage={
            "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          }
          heroName={"Smash"}
          categoryID={categoryID}
        />
      </div>
    </div>
  );
};

export default MenuList;
