import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseApiContext } from "../../context/ApiContext";
import { Ping } from "@uiball/loaders";
import DetailFooter from "../DetailFooter.jsx/DetailFooter";
import DetailHero from "../DetailHero/DetailHero";
import fetchElement from "../../helpers/fetchElement";

const DetailContainer = () => {
  const { categoryID, itemID } = useParams();
  const { setDisplayCategories } = useContext(UseApiContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const wallpaperColor = {
    character: "detail-container detail-container-red",
    comic: "detail-container detail-container-yellow",
    serie: "detail-container detail-container-orange",
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

  useEffect(() => {
    categoryID !== undefined && setDisplayCategories(true);
  });
  
  useEffect(() => {
    setLoading(true);
    fetchElement(setData, setLoading, categoryID, itemID);
  }, [categoryID, itemID]);

  return (
    <div>
      {loading ? (
        <div className="menu-container-loader">
          <Ping size={60} speed={2} color="white" />
        </div>
      ) : (
        <div className={wallpaperClasses}>
          <DetailHero categoryID={categoryID} data={data} />
          <DetailFooter categoryID={categoryID} itemID={itemID} />
        </div>
      )}
    </div>
  );
};

export default DetailContainer;
