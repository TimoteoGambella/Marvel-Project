import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseApiContext } from "../../context/ApiContext";
import DetailFooter from "../DetailFooter.jsx/DetailFooter";
import DetailHero from "../DetailHero/DetailHero";

const DetailContainer = () => {
  const { categoryID, itemID } = useParams();
  const { setDisplayCategories } = useContext(UseApiContext);

  console.log(itemID);

  useEffect(() => {
    categoryID !== undefined && setDisplayCategories(true);
  });

  return (
    <div className="detail-container">
      <DetailHero categoryID={categoryID} itemID={itemID} />
      <DetailFooter categoryID={categoryID} itemID={itemID} />
    </div>
  );
};

export default DetailContainer;
