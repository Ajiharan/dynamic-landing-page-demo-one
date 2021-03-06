import React from "react";

import HeroSection from "../hero/HeroSection";
import Price from "../hero/Price";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";
const Home = () => {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Price />
      <HeroSection {...homeObjFour} />
    </div>
  );
};

export default Home;
