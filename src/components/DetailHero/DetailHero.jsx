import React from "react";

const DetailHero = ({categoryID, data }) => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            illum excepturi nesciunt. Aut odit et numquam sunt quam laudantium
            necessitatibus corporis. Quibusdam quasi aliquid, ad, rerum
            exercitationem iure minus obcaecati cumque, culpa sapiente eveniet
            esse. Facere saepe eum distinctio, molestias laboriosam nostrum ab
            assumenda modi iure itaque fuga quas veritatis?
          </p>
          <h2 className="font-family-marvel-principal detail-container-body-text-subheader">
            Subheader
          </h2>
          <p className="font-family-marvel-roboto detail-container-body-text-subbody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad.
          </p>
          <h2 className="font-family-marvel-principal detail-container-body-text-subheader">
            Subheader
          </h2>
          <p className="font-family-marvel-roboto detail-container-body-text-subbody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in.
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
    </div>
  );
};

export default DetailHero;
