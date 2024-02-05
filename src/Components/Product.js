/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Product1 from "../assets/img/product1.png";
import Product2 from "../assets/img/product2.png";
import Product3 from "../assets/img/product3.png";
import ButtonPrimary from "../Components/ButtonPrimary";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold">
              Best <span>Product</span>
            </h2>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <div className="card-header">
                <h6>Best Seller</h6>
              </div>
              <div className="card-body justify-content-center text-center">
                <img src={Product1} alt="" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">Glitterpetal Sparklebush</h5>
                <div className="price d-flex">
                  <p className="card-text text-success">IDR 240.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <div className="card-header">
                <h6>Best Seller</h6>
              </div>
              <div className="card-body justify-content-center text-center">
                <img src={Product2} alt="" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">Glitterpetal Sparklebush</h5>
                <div className="price d-flex">
                  <p className="card-text text-success">IDR 240.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <div className="card-header">
                <h6>Best Seller</h6>
              </div>
              <div className="card-body justify-content-center text-center">
                <img src={Product3} alt="" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">Glitterpetal Sparklebush</h5>
                <div className="price d-flex">
                  <p className="card-text text-success">IDR 240.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <div className="card-header">
                <h6>Best Seller</h6>
              </div>
              <div className="card-body justify-content-center text-center">
                <img src={Product3} alt="" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">Glitterpetal Sparklebush</h5>
                <div className="price d-flex">
                  <p className="card-text text-success">IDR 240.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <div className="card-header">
                <h6>Best Seller</h6>
              </div>
              <div className="card-body justify-content-center text-center">
                <img src={Product3} alt="" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">Glitterpetal Sparklebush</h5>
                <div className="price d-flex">
                  <p className="card-text text-success">IDR 240.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <div className="card-header">
                <h6>Best Seller</h6>
              </div>
              <div className="card-body justify-content-center text-center">
                <img src={Product3} alt="" />
              </div>
              <div className="card-footer">
                <h5 className="card-title">Glitterpetal Sparklebush</h5>
                <div className="price d-flex">
                  <p className="card-text text-success">IDR 240.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 d-lg-flex justify-content-center">
            <ButtonPrimary></ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
