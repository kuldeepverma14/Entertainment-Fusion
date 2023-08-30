import React from "react";
// import stbg from "../../assets/stbg.jpg"
// import "./Home.css"
import First from "./first/first";
import Second from "./second/Second";
import Third from "./third/Third";
import Fourth from "./fourth/Fourth";
import Fifth from "./fifth/Fifth";
import Six from "./Six/Six";



export default function Home (){

    return(
        <div className="">
        {/* <img src={stbg}/> */}
        <First />
        <Second />
        <Third/>
        <Fourth/>
        <Fifth/>
        <Six/>
        </div>
    )
}