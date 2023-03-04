import React from "react";
import { AboutStyled } from "./About.styles";
import AboutMain from "../../assets/img/about-01.webp";
import AboutVideoBack from "../../assets/img/about-02.webp";
import { FaPlay, FaRegCheckCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const About = () => {
  return (
    <AboutStyled>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <img src={AboutMain} alt="about"/>
              <div className="video-box">
                <div className="inner">
                  <div className="thumb">
                    <img src={AboutVideoBack} alt="About" />
                    <a
                      href="https://www.youtube.com/watch?v=PICj5tr9hcc"
                      class="popup-icon video-popup-activation"
                    >
                      <FaPlay size={15} />
                    </a>
                  </div>
                  <div className="loading-bar">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="award-status">
                <div className="inner">
                  <div className="icon">
                    <FaRegCheckCircle size={30} />
                  </div>
                  <div className="content">
                    <h6 className="title">29+</h6>
                    <span className="subtitle">Wonderful Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title">
                <span class="pre-title">About Us</span>
                <h2 class="title">
                  Learn &amp; Grow Your Skills with <span>Alas Academy</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim
                  minim veniam quis nostrud exercitation ullamco laboris.
                </p>
              </div>
              <ul className="features-list">
                <li>
                <GiCheckMark/>
                Expert Trainers
                
                </li>
                <li>
                <GiCheckMark/>
                Lifetime Access</li>
                <li>
                <GiCheckMark/>
                Online Remote Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
