import React, { useEffect, useState } from "react";
import MenuListCard from "../MenuListCard/MenuListCard";
import { Ping } from "@uiball/loaders";
import fetchData from "../../helpers/fetchData";

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

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetchData(setData, setLoading, categoryID);
  }, [categoryID]);

  return (
    <div className={wallpaperClasses}>
      <div className="menu-container-list-wallpaper"></div>
      <div className="menu-container-list-cards">
        {loading ? (
          <div className="menu-container-loader">
            <Ping size={60} speed={2} color="white" />
          </div>
        ) : (
          data.map((element) => (
            <MenuListCard
              key={element.id}
              heroImage={`${element.thumbnail.path}.${element.thumbnail.extension}`}
              heroName={
                categoryID === "characters" ? element.name : element.title
              }
              categoryID={categoryID}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MenuList;
