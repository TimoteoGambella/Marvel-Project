import React from "react";
import { useParams } from "react-router-dom";
// import { UseApiContext } from "../context/ApiContext";

const Menu = () => {
  // const {apiFetch1}=useContext(UseApiContext)

  // useEffect(() => {
  //     apiFetch1("https://odshjfdsfñsldfdsfsdf").then((res)=>{
  //         console.log(res)
  //     })
  // }, []);

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
      <div className="menu-container-hero">
        <div className="menu-container-hero-text">
          <h1 className="font-family-marvel-principal">marvel {categoryID}</h1>
          <h2 className="font-family-marvel-roboto">Lorem ipsum dolor sit amet.</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
