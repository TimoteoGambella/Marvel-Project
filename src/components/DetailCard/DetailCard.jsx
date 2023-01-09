import React from "react";
import { Link } from "react-router-dom";

const DetailCard = ({categoryID, heroImage, heroName, elementData }) => {
  return (
    <Link
      to={`/category/${categoryID}/${elementData.id}`}
    >
      <div className="detail-card">
        <div className="detail-card-body">
          <img className="detail-card-image" src={heroImage} alt="" />
        </div>
        {/* <div className="detail-card-footer font-family-marvel-roboto">
          <p>{heroName}</p>
        </div> */}
      </div>
    </Link>
  );
};

export default DetailCard;
