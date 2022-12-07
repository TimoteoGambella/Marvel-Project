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
  console.log(categoryID);

  return <div className="menu-container"></div>;
};

export default Menu;
