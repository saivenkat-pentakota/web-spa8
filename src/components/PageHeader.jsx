import React from "react";
import './PageHeader.css';

function PageHeader(){
    return(
        
        <div className="container-fluid fixed-top">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
        <small><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
        <small className="ms-4"><i className="fa fa-envelope me-2"></i><a href="#email-protection" className="email" >foody@gmail.com</a></small>
        </div>
        <div className="col-lg-6 px-5 text-end">
        <small>Follow us:</small>
        <a className="text-body ms-3" href="#facebook"><i className="fab fa-facebook-f"></i></a>
        <a className="text-body ms-3" href="#teitter"><i className="fab fa-twitter"></i></a>
        <a className="text-body ms-3" href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
        <a className="text-body ms-3" href="#instagram"><i className="fab fa-instagram"></i></a>
        </div>
        </div>
        </div>
        
    )
}

export default PageHeader;