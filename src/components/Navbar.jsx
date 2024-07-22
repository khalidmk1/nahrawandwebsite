import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section id="top">
        <div className="container">
          <div className="row top_1">
            <div className="col-md-3">
              <div className="top_1l pt-1">
                <h3 className="mb-0">
                  <Link className="text-white" to={"./"}>
                    <img
                      src="img/logonahrawand.png"
                      alt="logo"
                      className="col_red me-1 logo_img"
                    />
                  </Link>
                </h3>
              </div>
            </div>
            {/* <div className="col-md-5">
                <div className="top_1m">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-black"
                    placeholder="Search Site..."
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn text-white bg_red rounded-0 border-0"
                      type="button"
                    >
                      Search
                    </button>
                  </span>
                </div>
              </div>
            </div> */}
            <div className="col-md-4">
              <div className="top_1r text-end">
                <ul
                  className="social-network social-circle mb-0"
                  style={{
                    gap: "10px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <li>
                    <a
                      href="https://www.instagram.com/mynahrawandacademy/"
                      className="icoRss"
                      title="Rss"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/nahrawandacademyofficial/"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@nahrawandacademy/featured"
                      className="icoGoogle"
                      title="Google +"
                    >
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/nahrawandacedemy/?originalSubdomain=ma"
                      className="icoLinkedin"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="header">
      <nav className="navbar navbar-expand-md navbar-light" id="navbar_sticky">
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="index.html">
            <i className="fa fa-video-camera col_red me-1"></i> Planet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-0">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/content"
                  className="nav-link"
                  activeClassName="active"
                >
                 Content
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/AllSpeakers"
                  className="nav-link"
                  activeClassName="active"
                >
                  Speakers
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/ContactUs"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    </>
  );
}
