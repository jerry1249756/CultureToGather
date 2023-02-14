import "./cssfile/header.css";

import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import React from "react";

const Header = () => {
  const handleLinkOnclick1 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("home").classList.add("active-link");
    document.getElementById("home").classList.remove("inactive-link");
    closeBurger();
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const handleLinkOnclick2 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("service").classList.add("active-link");
    document.getElementById("service").classList.remove("inactive-link");
    closeBurger();
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const handleLinkOnclick3 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("about").classList.add("active-link");
    document.getElementById("about").classList.remove("inactive-link");
    closeBurger();
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const handleLinkOnclick4 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("explore").classList.add("active-link");
    document.getElementById("explore").classList.remove("inactive-link");
    closeBurger();
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };

  const navActive = () => {
    document.querySelector(".lower-navbar").classList.toggle("burger-toggle");
    document.querySelector(".line1").classList.toggle("line1-toggle");
    document.querySelector(".line2").classList.toggle("line2-toggle");
    document.querySelector(".line3").classList.toggle("line3-toggle");
  };

  const closeBurger = () => {
    document.querySelector(".lower-navbar").classList.remove("burger-toggle");
    document.querySelector(".line1").classList.remove("line1-toggle");
    document.querySelector(".line2").classList.remove("line2-toggle");
    document.querySelector(".line3").classList.remove("line3-toggle");
  };

  window.addEventListener("resize", function () {
    var Width = window.innerWidth;
    var locat = window.location.pathname;
    if (
      Width > 660 &&
      locat !== "/login" &&
      locat !== "/sign" &&
      locat !== "/forget"
    ) {
      closeBurger();
    }
  });

  /*const showModal = () => {
    let userModal = document.getElementById("user-modal");
    let userIcon = document.getElementById("login-icon");
    if (userModal.style.display === "none") userModal.style.display = "flex";
    else if (userModal.style.display === "flex")
      userModal.style.display = "none";
    userIcon.classList.toggle("login-icon-scale");
  };*/

  return (
    <div className="all-wrapper" id="top">
      <section className="header">
        <div className="upper-navbar">
          <div className="information"></div>
          <div className="site-logo">
            <div className="culture">CULTURE</div>
            <div className="togather">TO GATHER</div>
          </div>

          <div className="logout-wrapper">
            <div className="logout-wrapper-left">
              <Link to="/login">
                <button className="home-login-btn">Log in</button>
              </Link>
            </div>
            <div className="logout-wrapper-right">
              <Link to="/sign">
                <button className="home-sign-btn">Sign up free</button>
              </Link>
            </div>
          </div>

          <div className="burger" onClick={navActive}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="lower-navbar">
          <div className="links">
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li
                  className="active-link"
                  onClick={handleLinkOnclick1}
                  id="home"
                >
                  HOME
                </li>
              </Link>
              <Link to="/service" style={{ textDecoration: "none" }}>
                <li
                  className="inactive-link"
                  onClick={handleLinkOnclick2}
                  id="service"
                >
                  SERVICE
                </li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li
                  className="inactive-link"
                  onClick={handleLinkOnclick3}
                  id="about"
                >
                  ABOUT
                </li>
              </Link>
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <li
                  className="inactive-link"
                  onClick={handleLinkOnclick4}
                  id="explore"
                >
                  EXPLORE
                </li>
              </Link>
              <li className="inactive-link" id="collection">
                COLLECTION
              </li>
            </ul>
          </div>

          <div className="res-logout-wrapper">
            <div className="res-logout-wrapper-top">
              <Link to="/login">
                <button className="res-home-login-btn">Log in</button>
              </Link>
            </div>
            <div className="res-logout-wrapper-bottom">
              <Link to="/sign">
                <button className="res-home-sign-btn">Sign up free</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
