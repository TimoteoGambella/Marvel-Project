import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuListCard = ({ image, name, categoryID, elementData }) => {
  const cardsShadow = {
    characterCard: "menu-list-card menu-list-card-red",
    comicCard: "menu-list-card menu-list-card-yellow",
    serieCard: "menu-list-card menu-list-card-orange",
  };

  const [cardClasses, setCardClasses] = useState("");
  const [nameSliced, setNameSliced] = useState(name);

  //const nameSliced = categoryID === "characters" ? name.slice(0, 35) : elementData.title.slice(0, 35)

  useEffect(() => {
    if (categoryID === "characters") {
      setCardClasses(cardsShadow.characterCard);
    } else if (categoryID === "comics") {
      setCardClasses(cardsShadow.comicCard);
    } else if (categoryID === "series") {
      setCardClasses(cardsShadow.serieCard);
    }
  }, [categoryID]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setNameSliced(categoryID !== undefined && nameSliced.slice(0, 35));
  }, [categoryID]); // eslint-disable-line react-hooks/exhaustive-deps


  console.log(nameSliced.length > 25);
  return (
    <div className={cardClasses}>
      <Link
        to={`/category/${categoryID}/${elementData.id}`}
        className="menu-list-card-anchor"
      >
        <div className="menu-list-card-body">
          <img className="menu-list-card-image" src={image} alt="" />
        </div>
        <div className="menu-list-card-footer font-family-marvel-roboto">
          <p className="menu-list-card-footer-title">
            {nameSliced.length > 25 ? `${nameSliced}...` : nameSliced}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MenuListCard;
