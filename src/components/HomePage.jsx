import React from "react";
import './HomePage.css';
import NavBar from "./NavBar";
import PageCarousel from "./PageCarousel";
import AboutFoody from "./AboutFoody";
import Features from "./Features";

function HomePage(){
    return(
        <>
        <NavBar/>
        <PageCarousel/>
        <AboutFoody/>
        <Features/>
        </>
    )
}

export default HomePage;