import React from "react";
import "./PageCarousel.css";
import carouselImg1 from '../images/carousel-1.jpg';
import carouselImg2 from '../images/carousel-2.jpg';

function PageCarousel() {
  return (
    <>
      <div
        className="container-fluid"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carouselImg1} alt="carouselImage" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5  slideInDown">
                        Organic Food Is Good For Health
                      </h1>
                      <a
                        href
                        className="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                      >
                        Products
                      </a>
                      <a
                        href
                        className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                      >
                        Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carouselImg2} alt="carouselImage" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">
                        Natural Food Is Always Healthy
                      </h1>
                      <a
                        href
                        className="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                      >
                        Products
                      </a>
                      <a
                        href
                        className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                      >
                        Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PageCarousel;
