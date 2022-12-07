import React from "react";
// import { UseApiContext } from "../context/ApiContext";

const Home = ()=>{

    // const {apiFetch1}=useContext(UseApiContext)

    // useEffect(() => {
    //     apiFetch1("https://odshjfdsfñsldfdsfsdf").then((res)=>{
    //         console.log(res)
    //     })
    // }, []);

    return(
        <div className="home-container">
            <div className="font-family-marvel-roboto">
                <h1 className="hero-text-main">ARE YOU A MARVEL FAN?</h1>
                <h3 className="hero-text-mainsub">Get into the section that you are most interested, and enjoy the Marvel world</h3>
            </div>
        </div>
    )
}

export default Home