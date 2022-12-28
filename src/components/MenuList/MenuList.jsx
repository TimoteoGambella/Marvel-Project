import React, { useEffect, useState } from "react";
import MenuListCard from "../MenuListCard/MenuListCard";

const MenuList = ({ categoryID }) => {
  const wallpaperColor = {
    character: "menu-list-container menu-container-red",
    comic: "menu-list-container menu-container-yellow",
    serie: "menu-list-container menu-container-orange",
  };

  const [wallpaperClasses, setWallpaperClasses] = useState("");

  useEffect(() => {
    if (categoryID === "characters") {
      setWallpaperClasses(wallpaperColor.character);
    } else if (categoryID === "comics") {
      setWallpaperClasses(wallpaperColor.comic);
    } else if (categoryID === "series") {
      setWallpaperClasses(wallpaperColor.serie);
    }
  }, [categoryID]);

  return (
    <div className={wallpaperClasses}>
      <div className="menu-container-list-wallpaper">
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
