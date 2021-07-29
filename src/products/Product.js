import React from "react";
import HeroSection from "../hero/HeroSection";
import { homeObjFour, homeObjTwo, homeObjThree, homeObjOne } from "./Data";
const Product = () => {
  return (
    <div>
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjTwo} />
    </div>
  );
};

export default Product;
