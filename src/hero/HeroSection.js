import React from "react";
import "./HersoSection.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <div className={lightBg ? "home_hero-section" : "home_hero-section darkBg"}>
      <div className="container">
        <div
          className="row home_hero-row"
          style={{
            display: "flex",
            flexDirection: imgStart ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {description}
              </p>
              <Link to="/sign-up">
                <Button
                  buttonSize="btn--wide"
                  buttonColor="blue"
                  children={buttonLabel}
                />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src={img} alt={alt} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
