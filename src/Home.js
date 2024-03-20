import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeatureProduct from "./Components/FeatureProduct";

const Home = () => {
  return (
    <>
      <HeroSection name='NP Store'/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </>
  )
};

export default Home;