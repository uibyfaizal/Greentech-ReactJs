/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoGreenTech from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center mx-auto">
          <div className="footer-col col-lg-3 col-md-6">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonial</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Documents</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h4>Community </h4>
            <ul>
              <li>
                <a href="">Community Central</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">My Info</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
              <li>
                <a href="">Customers</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto justify-content-center text-center">
            <img src={LogoGreenTech} className="pb-3" alt="" />
            <p>© 2024 ABC. All rights reserved. </p>
            <p>Design by @uibyfaizal </p>
            <div className="icon-sosmed d-lg-flex text-center mx-auto justify-content-center">
              <i className="fa-brands fa-facebook-f mx-3"></i>
              <i className="fa-brands fa-twitter mx-3"></i>
              <i className="fa-brands fa-instagram mx-3"></i>
              <i className="fa-brands fa-dribbble mx-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
