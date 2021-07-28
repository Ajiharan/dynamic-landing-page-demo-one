import React from "react";
import HeroSection from "../hero/HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";
const Home = () => {
  return (
    <div>
      <HeroSection {...homeObjOne} />
    </div>
  );
};

export default Home;
