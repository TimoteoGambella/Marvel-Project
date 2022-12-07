import React from "react";
import HeroOptionCard from "../HeroOptionCard/HeroOptionCard";
import { Link } from "react-router-dom";

const HeroOptions = () => {
  return (
    <div className="option-containers d-flex-row">
      <Link to={"/category/characters"}>
        <HeroOptionCard title={"CHARACTERS"} />
      </Link>
      <Link to={"/category/comics"}>
        <HeroOptionCard title={"COMICS"} />
      </Link>
      <Link to={"/category/series"}>
        <HeroOptionCard title={"SERIES"} />
      </Link>
    </div>
  );
};

export default HeroOptions;
