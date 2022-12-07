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
  if(categoryID){
    const links = document.getElementsByClassName('navbar-menu-links')     
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      link.classList.remove('hidden')
    }
  }

  switch (categoryID) {
    case "characters":
      console.log(`The selected category is: ${categoryID}`)
      break;
    case "comics":
      console.log(`The selected category is: ${categoryID}`)
      break;
    case "series":
      console.log(`The selected category is: ${categoryID}`)
      break;
    default:
      console.log(`No category selected`)
      break;
  }

  return <div className="menu-container"></div>;
};

export default Menu;
