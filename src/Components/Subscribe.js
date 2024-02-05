import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center subs-content justify-content-center mx-auto">
            <h2 className="fw-bold">
              Enter The Promo Code to Get a 50% Discount, and Get Your Favorite
              plant.
            </h2>
            <div className="form-subs d-lg-flex justify-content-center py-3">
              <input
                type="email"
                className="form-control mx-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Input code promo here.."
              ></input>
              <ButtonPrimary></ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
