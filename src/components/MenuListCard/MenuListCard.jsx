import React from "react";

const MenuListCard = ({ heroImage, heroName }) => {
  return (
    <div className="menu-list-card">
      <div className="menu-list-card-body">
        <img className="menu-list-card-image" src={heroImage} alt="" />
      </div>
      <div className="menu-list-card-footer font-family-marvel-roboto">
        <p>{heroName}</p>
      </div>
    </div>
  );
};

export default MenuListCard;
