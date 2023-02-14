import React from "react";
import "./cssfile/about.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-wrapper">
        <div className="about-upper-wrapper">
          <div className="about-text">
            <h2>About</h2>
          </div>
          <div className="about-description" data-aos="fade-up">
            <p>
              We are college students studying electrical engineering and taking
              the webpage design course. We build this website because we think
              there are too many ticket-selling platforms now and it is hard for
              us to surf events, not to mention to remember which event locates
              in which website and when does it starts. You can browse our
              website to look up all kinds of events and put them into your
              collection. If you want to see more about the events or buy
              tickets, by clicking it we will redirect you to the original
              website. We will also remind you three days before the event
              starts. We provide a convenient management for your liked events
              so you will never get lost in hundreds of ticket-selling
              platforms.
            </p>
          </div>
        </div>
        <div className="timeline-title">
          <p>TIMELINE</p>
        </div>
        <div className="about-lower-wrapper">
          <div className="about-timeline-upper">
            <div className="timeline-upper-left upper-left" data-aos="fade-up">
              <div className="u-l-circle circle">
                <p>25 DEC</p>
              </div>
              <div className="u-l-picture"></div>
              <div className="lower-thing row">
                <h5>User Login</h5>
                <p>
                  We designed the login page and worked on password encrytion,
                  email verification and forget-password function.
                </p>
              </div>
            </div>
            <div
              className="timeline-upper-right upper-right"
              data-aos="fade-up"
            >
              <div className="u-r-circle circle">
                <p>12 DEC</p>
              </div>
              <div className="u-r-picture"></div>
              <div className="lower-thing col">
                <h5>Web Crawler</h5>
                <p>
                  We used python "request" and "beautifulSoup" libraries to get
                  cultural events information from two ticket platforms
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-self"></div>
          <div className="about-timeline-lower">
            <div className="timeline-upper-left lower-left" data-aos="fade-up">
              <div className="l-l-circle circle">
                <p>14 JAN</p>
              </div>
              <div className="l-l-picture"></div>
              <div className="lower-thing col">
                <h5>Web Page Deploy</h5>
                <p>
                  We tried many time to successfully deploy our webpage. Hurray!
                </p>
              </div>
            </div>
            <div
              className="timeline-upper-right lower-right"
              data-aos="fade-up"
            >
              <div className="l-r-circle circle">
                <p>01 JAN</p>
              </div>
              <div className="l-r-picture"></div>
              <div className="lower-thing row">
                <h5>UI/UX Design</h5>
                <p>
                  We put lots of efforts on our webpage design, not just using
                  packages from online sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-title">
          <p>OUR COLLABORATOR</p>
        </div>
        <div className="about-us-wrapper">
          <div className="about-three-people" data-aos="fade-up">
            <div className="about-person">
              <div className="about-person-upper">
                <img alt="" />
                <p>Henning</p>
              </div>
              <div className="about-person-lower">
                <h4>Frontend design</h4>
                <p>
                  I really think that CSS is understandable, but my teammates
                  don't.
                </p>
              </div>
            </div>
            <div className="about-person">
              <div className="about-person-upper">
                <img alt="" />
                <p>Alice</p>
              </div>
              <div className="about-person-lower">
                <h4>Python Master</h4>
                <p>
                  Working with two languages at the same time is quite
                  confusing...
                </p>
              </div>
            </div>
            <div className="about-person">
              <div className="about-person-upper">
                <img alt="" />
                <p>Jerry</p>
              </div>
              <div className="about-person-lower">
                <h4>Backend Master</h4>
                <p>Log in and log out are fun, but heroku is so difficult.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
