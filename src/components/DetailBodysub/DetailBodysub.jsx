import React from "react";

const DetailBodysub = ({subtitle, subtext}) => {
  return (
    <div>
      <h2 className="font-family-marvel-principal detail-container-bodysub-text-subheader">
        {subtitle}
      </h2>
      <p className="font-family-marvel-roboto detail-container-bodysub-text-subbody">
        {subtext}
      </p>
    </div>
  );
};

export default DetailBodysub;
