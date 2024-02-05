import React from "react";
import AboutImg from "../assets/img/about-img.png";
import ButtonPrimary from "./ButtonPrimary";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src={AboutImg} alt="" />
          </div>

          <div className="col-lg-6 col-md-6 about-content">
            <h2 className="fw-bold">
              What is a Green<span>Tech?</span>
            </h2>
            <p className="text-secondary">
              At GreenTech, we are nature lovers committed to bringing the
              beauty of nature into your home and garden. We fully understand
              how important plants are in creating a healthy, beautiful and
              harmonious environment, and how a touch of green from plants can
              bring freshness to your living space and create a calm and
              peaceful atmosphere for your whole family.
            </p>
            <ButtonPrimary></ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
