import "./cssfile/cover.css";
import "./cssfile/exploreNow.css";
import "./cssfile/serviceIntro.css";
import React from "react";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <section className="cover-section">
      <div className="home-cover-wrapper">
        <div className="background-image" data-aos="fade-up">
          <p className="check-out">CHECK OUT</p>
          <div className="background-upper">We Bring All Cultures To You</div>
          <a href="#explore-now-page">
            <button className="get-start-btn">Get Start</button>
          </a>
        </div>
      </div>
    </section>
  );
};

const ExploreNow = () => {
  const handleLinkOnclick4 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("explore").classList.add("active-link");
    document.getElementById("explore").classList.remove("inactive-link");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="explore-now-page" className="explore-now-wrapper">
      <div className="left-wrapper" data-aos="fade-up">
        <div className="webTitle">
          {" "}
          We Present All Types of Cultures to You{" "}
        </div>
        <p className="description">
          This website brings you many kinds of event, you can check them
          brabrabra. Also you can keep them to your own collections.
        </p>
        <Link to="/explore">
          <button className="explore-now-btn" onClick={handleLinkOnclick4}>
            EXPLORE
          </button>
        </Link>
      </div>
      <div className="home-right">
        <div className="home-right-img" data-aos="fade-left">
          <img
            src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/427668"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

const ServiceIntro = () => {
  const handleLinkOnclick2 = () => {
    document.querySelector(".active-link").classList.add("inactive-link");
    document.querySelector(".active-link").classList.remove("active-link");
    document.getElementById("service").classList.add("active-link");
    document.getElementById("service").classList.remove("inactive-link");
  };

  return (
    <section>
      <div className="service-intro-wrapper">
        <div className="s-i-wrapper-all">
          <div className="service-intro-title">
            <p>OUR SERVICES</p>
          </div>
          <div className="s-i-wrapper-three" data-aos="fade-up">
            <div className="services">
              <div className="services-upper">
                <i className="fas fa-hands"></i>
              </div>
              <div className="services-lower">
                <p>
                  We provide you with many kinds of event including music,
                  exhibition, concert, and drama. You can browse them in
                  Explore.
                </p>
              </div>
            </div>
            <div className="services">
              <div className="services-upper">
                <i className="fas fa-cart-arrow-down"></i>
              </div>
              <div className="services-lower">
                <p>
                  After logging into your account, you can add your favorite
                  events to your own collection as you like. Right in the upper
                  left corner of the page.
                </p>
              </div>
            </div>
            <div className="services">
              <div className="services-upper">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="services-lower">
                <p>
                  We will send you an email when the date of your favorite event
                  in your collection is approaching. There is no need to be
                  worry about missing it.
                </p>
              </div>
            </div>
          </div>
          <div className="service-learn-more">
            <Link to="/service">
              <button
                className="service-intro-btn"
                onClick={handleLinkOnclick2}
              >
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Cover />
      <ExploreNow />
      <ServiceIntro />
    </>
  );
};

export default Home;
