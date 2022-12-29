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
        <div className="detail-container">
          <DetailHero categoryID={categoryID} data={data} />
          <DetailFooter categoryID={categoryID} itemID={itemID} />
        </div>
      )}
    </div>
  );
};

export default DetailContainer;
