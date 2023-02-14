import React from "react";
import "./cssfile/service.css";

const Service = () => {
  return (
    <div className="service-wrapper">
      <div className="service-upper-section">
        <div className="ser-upp-left" data-aos="fade-up">
          <div className="service-title">
            <h3>What we do</h3>
          </div>
          <div className="service-description">
            <p>
              This is a great website that provides you with many kinds of
              events. You can choose what you need at any time.
            </p>
          </div>
          <div className="service-three-icons">
            <div className="ser-icon-wrapper">
              <i className="fas fa-hands"></i>
              <p>Events</p>
            </div>
            <div className="ser-icon-wrapper">
              <i className="fas fa-cart-arrow-down"></i>
              <p>Collection</p>
            </div>
            <div className="ser-icon-wrapper">
              <i className="fas fa-envelope"></i>
              <p>Mailing</p>
            </div>
          </div>
        </div>
        <div className="ser-upp-right" data-aos="fade-left">
          <div className="service-upper-img"></div>
        </div>
      </div>
      <div className="service-lower-section">
        <div className="service-lower-title">
          <h4>HOW IT WORKS</h4>
        </div>
        <div className="service-lower-three-wrapper">
          <div className="three-service-wrapper first" data-aos="fade-up">
            <div className="lower-wrapper-left">
              <div className="lower-wrapper-left-title">
                <i className="fas fa-hands"></i>
                <div className="service-lower-function-name">
                  <h5>Events</h5>
                </div>
              </div>
              <div className="lower-wrapper-left-des">
                <p>
                  We provide you with many kinds of events including music,
                  exhibition, concert, and drama. You can browse them in
                  Explore.
                </p>
              </div>
            </div>
            <div className="lower-wrapper-right"></div>
          </div>
          <div className="three-service-wrapper second" data-aos="fade-up">
            <div className="lower-wrapper-left">
              <div className="lower-wrapper-left-title">
                <i className="fas fa-cart-arrow-down"></i>
                <div className="service-lower-function-name">
                  <h5>Collections</h5>
                </div>
              </div>
              <div className="lower-wrapper-left-des">
                <p>
                  After logging into your account, you can add your favorite
                  events to your own collection as you like, right in the upper
                  left corner of the page.
                </p>
              </div>
            </div>
            <div className="lower-wrapper-right"></div>
          </div>
          <div className="three-service-wrapper third" data-aos="fade-up">
            <div className="lower-wrapper-left">
              <div className="lower-wrapper-left-title">
                <i className="fas fa-envelope"></i>
                <div className="service-lower-function-name">
                  <h5>Mailing</h5>
                </div>
              </div>
              <div className="lower-wrapper-left-des">
                <p>
                  We will send you an email when the date of your favorite event
                  is approaching. There is no need to be worry about missing it.
                </p>
              </div>
            </div>
            <div className="lower-wrapper-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
