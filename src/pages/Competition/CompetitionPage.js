import React from "react";
import "./style.min.css";
import Competition from "../../components/Competition/Competition";

export default function CompetitionPage() {
  return (
    <div>
      <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center text-white"
            href="/"
          >
            {/* <h3 className="font-weight-bolder mb-0">fast&furious</h3> */}
            <img
              src={require("./img/logo_f_f_blanc.png")}
              alt="logo"
              className="logoStyle"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-nav-header"
            aria-controls="navbar-nav-header"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="lnr lnr-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-nav-header">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Form
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#competitions">
                  Blog
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a id="side-search-open" className="nav-link" href="#">
                  <span className="lnr lnr-magnifier" />
                </a>
              </li> */}
              {/* <li className="nav-item only-desktop">
                <a className="nav-link" id="side-nav-open" href="#">
                  <span className="lnr lnr-menu" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <div id="side-nav" className="sidenav">
        <a href="javascript:void(0)" id="side-nav-close">
          ×
        </a>
        <div className="sidenav-content">
          <p>Kuncen WB1, Wirobrajan 10010, DIY</p>
          <p>
            <span className="fs-16 primary-color">(+68) 120034509</span>
          </p>
          <p>info@yourdomain.com</p>
        </div>
      </div> */}
      {/* <div id="side-search" className="sidenav">
        <a href="javascript:void(0)" id="side-search-close">
          ×
        </a>
        <div className="sidenav-content">
          <form action>
            <div className="input-group md-form form-sm form-2 pl-0">
              <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <span className="lnr lnr-magnifier" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>{" "} */}
      <div className="jumbotron d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-1 mb-4">
            f&
            <br />
            Xf
          </h1>
        </div>
        <div className="rectangle-1" />
        <div className="rectangle-2" />
        <div className="rectangle-transparent-1" />
        <div className="rectangle-transparent-2" />
        <div className="circle-1" />
        <div className="circle-2" />
        <div className="circle-3" />
        <div className="triangle triangle-1">
          <img src={require("./img/obj_triangle.png")} alt="" />
        </div>
        <div className="triangle triangle-2">
          <img src={require("./img/obj_triangle.png")} alt="" />
        </div>
        <div className="triangle triangle-3">
          <img src={require("./img/obj_triangle.png")} alt="" />
        </div>
        <div className="triangle triangle-4">
          <img src={require("./img/obj_triangle.png")} alt="" />
        </div>
      </div>{" "}
      {/* Features Section*/}
      <section id="features" className="">
        <div className="container">
          <div className="section-content">
            {/* Section Title */}
            <div
              className="title-wrap mb-5"
              data-aos="fade-up"
              id="competitions"
            >
              <h2 className="section-title">Fast And furious Competition</h2>
              <p className="section-sub-title">
                Vous pouvez encore consulter les cahiers des charges des
                compétitions
                <br /> qui sont disponibles sur notre site .
              </p>
            </div>
            {/* End of Section Title */}
            <div className="row">
              {/* Features Holder*/}
              <div className="col-md-10 offset-md-1 features-holder">
                <div className="row">
                  {/* Features Item */}
                  <div className="col-md-4 col-sm-12 text-center mt-4">
                    <Competition 
                      title="SUMO"
                      img="https://image.winudf.com/v2/image1/Y29tLmdhbWV4LnJvYm90cmluZ2ZpZ2h0aW5nX3NjcmVlbl8xXzE1NTI1OTg0MzBfMDE4/screen-1.jpg?fakeurl=1&type=.jpg"
                      description="Robot combat is a mode of robot competition in which custom-built machines fight using various methods to incapacitate each other" />
                    <Competition
                      title="Entrepreneurial"
                      img="https://femme-project.eu/wp-content/uploads/2019/05/entrepreneurship.jpg"
                      description="The entrepreneurs are often known as a source of new ideas or innovators, and bring new ideas in the market by replacing old with a new invention" />
                  </div>
                  {/* End of Feature Item */}
                  {/* Features Item */}
                  <div className="col-md-4 col-sm-12 text-center">
                    <Competition
                      title="Formula"
                      img="https://img.redbull.com/images/c_crop,x_366,y_0,h_2560,w_3413/c_fill,w_860,h_614/q_auto,f_auto/redbullcom/2019/09/10/9b412da6-f79e-4d10-8262-921149060ba4/superformula_landscape_hero"
                      description="Do F1 drivers pee in their suits during a race? The simple answer is yes they do"
                    />
                    <Competition 
                      title="CAO"
                      img="http://www.luftmy.net/uploads/images/1911/2-1911111I340292.jpg"
                      description="Cao primarily uses Geely's new energy vehicles, including the Geometry A sedan which has a 600km range and Maple 80V MPV which" />
                  </div>
                  {/* End of Feature Item */}
                  {/* Features Item */}
                  <div className="col-md-4 col-sm-12 text-center mt-4">
                    <Competition
                      title="Rally"
                      img="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/06/15/41130.JPG"
                      description="Rally is a form of motorsport that takes place on public or private roads with modified production or specially built road-legal cars" />
                    <Competition
                      title="Junior"
                      img="https://www.aeroboticsglobal.com/wp-content/uploads/2018/04/build-your-own-robot.jpg"
                      description="Junior Robotics is a starter robotics set, especially designed for Kindergarten and Early Primary school students" />
                  </div>
                  {/* End of Feature Item */}
                </div>
              </div>
              {/* End of Features Holder*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
