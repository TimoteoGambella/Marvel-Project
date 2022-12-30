import React from "react";
import DetailBodysub from "../DetailBodysub/DetailBodysub";

const DetailHero = ({ categoryID, data }) => {
  console.log(data);
  return (
    <div className="detail-container-hero">
      <div className="detail-container-body">
        <div className="detail-container-body-text">
          <h1
            className="font-family-marvel-principal"
            id="detail-container-body-text-header"
          >
            {categoryID === "characters" ? data.name : data.title}
          </h1>
          <p
            id="detail-container-body-text-body"
            className="font-family-marvel-roboto"
          >
            {data.description}
          </p>
        </div>
        <div className="detail-container-picture">
          <img
            id="detail-picture"
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt="detailPicture"
          />
        </div>
      </div>
      <div className="detail-container-bodysub">
        {data.creators && data.creators.items.splice(0,7).map((element)=>{
          return <DetailBodysub subtitle={element.role} subtext={element.name} />
        })}
        {data.rating && <DetailBodysub subtitle={'Rating'} subtext={data.rating} />}
      </div>
    </div>
  );
};

export default DetailHero;
