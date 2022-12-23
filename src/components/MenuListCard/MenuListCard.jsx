import React, { useEffect, useState } from "react";

const MenuListCard = ({ heroImage, heroName, categoryID }) => {
  const cardsShadow = {
    characterCard: "menu-list-card menu-list-card-red",
    comicCard: "menu-list-card menu-list-card-yellow",
    serieCard: "menu-list-card menu-list-card-orange",
  };

  const [cardClasses, setCardClasses] = useState("");

  useEffect(() => {
    if (categoryID === "characters") {
      setCardClasses(cardsShadow.characterCard);
    } else if (categoryID === "comics") {
      setCardClasses(cardsShadow.comicCard);
    } else if (categoryID === "series") {
      setCardClasses(cardsShadow.serieCard);
    }
  }, [categoryID]);

  return (
    <div className={cardClasses}>
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
