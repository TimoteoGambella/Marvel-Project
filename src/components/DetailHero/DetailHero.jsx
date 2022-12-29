import React from "react";
import DetailBodysub from "../DetailBodysub/DetailBodysub";

const DetailHero = ({ categoryID, data }) => {
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
        <DetailBodysub subtitle={'Writer'} subtext={'Pepe'} />
        <DetailBodysub subtitle={'Writer'} subtext={'Pepe'} />
        <DetailBodysub subtitle={'Writer'} subtext={'Pepe'} />
        <DetailBodysub subtitle={'Writer'} subtext={'Pepe'} />
        <DetailBodysub subtitle={'Writer'} subtext={'Pepe'} />
        <DetailBodysub subtitle={'Writer'} subtext={'Pepe'} />
      </div>
    </div>
  );
};

export default DetailHero;
