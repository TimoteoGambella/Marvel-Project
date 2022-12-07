import React from "react";

const MenuHero = ({ categoryID }) => {
  return (
    <div className="menu-container-hero">
      <div className="menu-container-hero-text">
        <h1 className="font-family-marvel-principal" id="header">
          marvel {categoryID}
        </h1>
        <h2 className="font-family-marvel-roboto">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
    </div>
  );
};

export default MenuHero;
