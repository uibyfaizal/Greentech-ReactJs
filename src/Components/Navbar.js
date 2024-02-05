/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import "../css/main.css";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
