import React from "react";
import HeroOptionCard from "../HeroOptionCard/HeroOptionCard";
import { Link } from "react-router-dom";

const HeroOptions = () => {
  return (
    <div className="option-containers d-flex-row">
      <Link to={"/category/characters"}>
        <HeroOptionCard title={"CHARACTERS"} />
      </Link>
      <HeroOptionCard title={"COMICS"} />
      <HeroOptionCard title={"SERIES"} />
    </div>
  );
};

export default HeroOptions;
