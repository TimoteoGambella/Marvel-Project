import React from "react";
import { useParams } from "react-router-dom";
import MenuHero from "../MenuHero/MenuHero";
import MenuList from "../MenuList/MenuList";

const MenuContainer = () => {
  const { categoryID } = useParams();
  console.log(categoryID);

  return (
    <div className="menu-container">
      <MenuHero categoryID={categoryID} />
      <MenuList />
    </div>
  );
};

export default MenuContainer;
