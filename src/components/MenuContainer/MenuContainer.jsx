import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuHero from "../MenuHero/MenuHero";
import MenuList from "../MenuList/MenuList";
import { UseApiContext } from "../../context/ApiContext";

const MenuContainer = () => {
  const { categoryID } = useParams();
  const { setDisplayCategories } = useContext(UseApiContext);

  useEffect(() => {
    categoryID !== undefined && setDisplayCategories(true);
  });

  return (
    <div className="menu-container">
      <MenuHero categoryID={categoryID} />
      <MenuList />
    </div>
  );
};

export default MenuContainer;
