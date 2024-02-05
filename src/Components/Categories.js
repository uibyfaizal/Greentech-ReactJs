import React from "react";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="row mx-auto justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="fw-bold">
              What Makes <span>Us Different?</span>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 py-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Experience and Care</h5>
                <p className="card-text text-secondary">
                  Our team consists of experienced and passionate plant experts.
                  We care about the quality of our plants and the satisfaction
                  of our customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 py-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Best quality</h5>
                <p className="card-text text-secondary">
                  We only provide high quality plants that are carefully grown
                  and carefully selected. We believe that quality is the key to
                  success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 py-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Extensive Collection</h5>
                <p className="card-text text-secondary">
                  We offer a wide variety of plants, from beautiful ornamental
                  flowers to indoor ornamental plants suitable for every space.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 py-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Care Guide</h5>
                <p className="card-text text-secondary">
                  We are not just a plant seller. We also provide a complete
                  care guide, so you can care for your plants well and watch
                  them thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
