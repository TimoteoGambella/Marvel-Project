import React from "react";

const HeroOptionCard = ({ title }) => {
  return (
    <div className="option-card">
      <p className="font-family-marvel-principal option-card-text">{title}</p>
    </div>
  );
};

export default HeroOptionCard;
