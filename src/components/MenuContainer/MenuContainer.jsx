import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuHero from "../MenuHero/MenuHero";
import MenuList from "../MenuList/MenuList";
import { UseApiContext } from "../../context/ApiContext";

const MenuContainer = () => {
  const { categoryID } = useParams();
  const { setDisplayCategories } = useContext(UseApiContext);
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/${categoryID}?ts=1&limit=15&apikey=816f4bd5bdc9f3c4d9b678553dc6abf6&hash=2d18d7e777e04191c3ebe81d0dfb6485`)
    const data = await response.json()
    setData(data.data.results)
  }

  useEffect(() => {
    categoryID !== undefined && setDisplayCategories(true);
  });

  useEffect(()=>{
    getData()
  },[categoryID])

  return (
    <div className="menu-container">
      <MenuHero categoryID={categoryID} />
      <MenuList categoryID={categoryID} data={data}/>
    </div>
  );
};

export default MenuContainer;
