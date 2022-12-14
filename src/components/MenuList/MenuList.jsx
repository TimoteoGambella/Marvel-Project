import React, { useEffect, useState } from "react";
import MenuListCard from "../MenuListCard/MenuListCard";
import wallpaperCharactersList from "../../assets/fondoListCharacters.png";
import wallpaperComicsList from "../../assets/fondoListComics.png";
import wallpaperSeriesList from "../../assets/fondoListSeries.png";

const MenuList = ({categoryID}) => {

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
        <img id="menu-list-wallpaper" src={menuListWallpaper} alt="listWallpaper" />
      </div>
      <div className="menu-container-list-cards">
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
        <MenuListCard
          heroImage={
            "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
          }
          heroName={"Smash"}
        />
      </div>
    </div>
  );
};

export default MenuList;
