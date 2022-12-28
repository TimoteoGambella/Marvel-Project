import React, { useEffect, useState } from "react";
import MenuListCard from "../MenuListCard/MenuListCard";

const MenuList = ({ categoryID, data }) => {
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
      <div className="menu-container-list-wallpaper"></div>
      <div className="menu-container-list-cards">
        {data.map((element) => (
          <MenuListCard
            key={element.id}
            heroImage={`${element.thumbnail.path}.${element.thumbnail.extension}`}
            heroName={categoryID === 'characters' ? element.name : element.title}
            categoryID={categoryID}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
