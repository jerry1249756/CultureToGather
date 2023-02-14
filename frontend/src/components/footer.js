import React from "react";
import "./cssfile/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkOnclick1 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("home").classList.add("active-link");
    document.getElementById("home").classList.remove("inactive-link");
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const handleLinkOnclick2 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("service").classList.add("active-link");
    document.getElementById("service").classList.remove("inactive-link");
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const handleLinkOnclick3 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("about").classList.add("active-link");
    document.getElementById("about").classList.remove("inactive-link");
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const handleLinkOnclick4 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("explore").classList.add("active-link");
    document.getElementById("explore").classList.remove("inactive-link");
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-inner-wrapper">
        <div className="footer-column">
          <div className="footer-check-out">
            <h5>CHECK OUT</h5>
          </div>
          <p>Music</p>
          <p>Exhibition</p>
          <p>Drama</p>
          <p>Concert</p>
        </div>
        <div className="footer-column quick-link">
          <div className="footer-check-out">
            <h5>QUICK LINK</h5>
          </div>
          <Link
            to="/"
            onClick={handleLinkOnclick1}
            style={{ textDecoration: "none" }}
          >
            <p>Home</p>
          </Link>
          <Link
            to="/service"
            onClick={handleLinkOnclick2}
            style={{ textDecoration: "none" }}
          >
            <p>Service</p>
          </Link>
          <Link
            to="/about"
            onClick={handleLinkOnclick3}
            style={{ textDecoration: "none" }}
          >
            <p>About</p>
          </Link>
          <Link
            to="/explore"
            onClick={handleLinkOnclick4}
            style={{ textDecoration: "none" }}
          >
            <p>Explore</p>
          </Link>
        </div>
        <div className="footer-column">
          <div className="footer-check-out">
            <h5>WE ARE SOCIAL</h5>
          </div>
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>LINE</p>
        </div>
        <div className="footer-column contact-us">
          <div className="footer-check-out">
            <h5>CULTURE TOGATHER</h5>
          </div>
          <p>NTUEE department</p>
          <p>Taipei. Taiwan</p>
          <p>Designed by Alice Henning and Jerry</p>
        </div>
      </div>
      <div className="copy-right">
        <p>&#169;Copyright Culture ToGather. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
