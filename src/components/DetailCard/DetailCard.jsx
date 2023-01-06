import React from "react";

const DetailCard = ({ heroImage, heroName }) => {
  return (
    <div className="detail-card">
      <div className="detail-card-body">
        <img className="detail-card-image" src={heroImage} alt="" />
      </div>
      {/* <div className="detail-card-footer font-family-marvel-roboto">
        <p>{heroName}</p>
      </div> */}
    </div>
  );
};

export default DetailCard;
