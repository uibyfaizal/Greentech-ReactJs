/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import HeroImg from "../assets/img/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 hero-content">
            <h1 className="fw-bold">
              Welcome to the <span>GreenTech of Your Dreams!</span>
            </h1>
            <p className="text-secondary">
              Do you dream of having a beautiful garden in your home? We at
              GreenTech are ready to help you make it happen. We specialize in
              providing high quality plants that will bring natural beauty into
              your home.
            </p>
            <ButtonPrimary></ButtonPrimary>
          </div>

          <div className="col-lg-6 col-md-12 hero-img">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
