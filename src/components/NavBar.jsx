import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div
        className="container-fluid fixed-top"
      >
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <small>
              <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA
            </small>
            <small className="ms-4">
              <i className="fa fa-envelope me-2"></i>
              <a
                href="#email"
                className="email"
              >
               foody@gmail.com
              </a>
            </small>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a className="text-body ms-3" href>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-body ms-3" href>
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-body ms-3" href>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-body ms-3" href>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 "
        >
          <a href="#index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold m-0" style={{color:"#3CB815"}}>
              F<span className="text" style={{color:"#F65005"}}>oo</span>dy
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="#index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="#product.html" className="nav-item nav-link">
                Products
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#dropdown"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="#blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="#feature.html" className="dropdown-item">
                    Our Features
                  </a>
                  <a href="#testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="#404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="#contact.html" className="nav-item nav-link">
                Contact Us
              </a>
            </div>
            <div className="d-none d-lg-flex ms-2">
              <a className="btn-sm-square bg-white rounded-circle ms-3" href="#search">
                <small className="fa fa-search text-body"></small>
              </a>
              <a className="btn-sm-square bg-white rounded-circle ms-3" href="#user">
                <small className="fa fa-user text-body"></small>
              </a>
              <a className="btn-sm-square bg-white rounded-circle ms-3" href="#shopping">
                <small className="fa fa-shopping-bag text-body"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
