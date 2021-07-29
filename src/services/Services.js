import React from "react";
import HeroSection from "../hero/HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";
const Services = () => {
  return (
    <div>
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjThree} />
    </div>
  );
};

export default Services;
