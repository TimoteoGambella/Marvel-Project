import React from "react";
import HeroOptions from "../components/HeroOptions/HeroOptions";
import HeroText from "../components/HeroText/HeroText";
// import { UseApiContext } from "../context/ApiContext";

const Home = () => {
  // const {apiFetch1}=useContext(UseApiContext)

  // useEffect(() => {
  //     apiFetch1("https://odshjfdsfñsldfdsfsdf").then((res)=>{
  //         console.log(res)
  //     })
  // }, []);

  return (
    <div className="home-container">
      <HeroText />
      <HeroOptions />
    </div>
  );
};

export default Home;
