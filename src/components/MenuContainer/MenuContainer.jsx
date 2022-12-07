import React from "react";
import { useParams } from "react-router-dom";
import MenuHero from "../MenuHero/MenuHero";

const MenuContainer = () => {
  const { categoryID } = useParams();
  //console.log(categoryID);
  if (categoryID) {
    const links = document.getElementsByClassName("navbar-menu-links");
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      link.classList.remove("hidden");
    }
  }

  return (
    <div className="menu-container">
      <MenuHero categoryID={categoryID} />
    </div>
  );
};

export default MenuContainer;
