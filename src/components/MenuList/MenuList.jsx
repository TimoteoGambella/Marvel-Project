import React, { useEffect, useState } from "react";
import MenuListCard from "../MenuListCard/MenuListCard";
import { Ping } from "@uiball/loaders";
import fetchData from "../../helpers/fetchData";
import Pagination from "../Pagination/Pagination";

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
  }, [categoryID]); // eslint-disable-line react-hooks/exhaustive-deps

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    fetchData(setData, setLoading, categoryID, 0);
  }, [categoryID]);

  
  const [cantidadPaginas, setCantidadPaginas] = useState(0);
  const [paginaActual, setPaginaActual] = useState(0);
  
  useEffect(() => {
    if(data.length!==0){
      if(data.total % 100 !== 0){
        let numberToString=(data.total/30).toString()
        let busqueda = numberToString.indexOf(".")

        if(busqueda!==-1){
         if(numberToString[busqueda+1]>=5){
          setCantidadPaginas(Math.round(data.total/30))
         }else{
          setCantidadPaginas(Math.round(data.total/30+1))
         }
        }
      }else{
        setCantidadPaginas((data.total/30))
      }
    }
  }, [data]);

  console.log(cantidadPaginas)

  return (
    <div className={wallpaperClasses}>
      <div className="menu-container-list-wallpaper"></div>
      <div className="menu-container-list-cards">
        {loading ? (
          <div className="menu-container-loader">
            <Ping size={60} speed={2} color="white" />
          </div>
        ) : (
          data.results.map((element) => (
            <MenuListCard
              elementData={element}
              key={element.id}
              image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
              name={categoryID === "characters" ? element.name : element.title}
              categoryID={categoryID}
            />
          ))
        )}
      </div>
      <Pagination
        cantidad={cantidadPaginas}
        pags={paginaActual}
        setPags={setPaginaActual}
        setData={setData}
        setLoading={setLoading}
        categoryID={categoryID}
      />
    </div>
  );
};

export default MenuList;
