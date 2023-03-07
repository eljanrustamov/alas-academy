import React, { useState } from "react";
import { AboutStyled } from "./About.styles";
import AboutMain from "../../assets/img/about-main.jpg";
import AboutVideoBack from "../../assets/img/about-02.webp";
import { FaPlay, FaRegCheckCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <AboutStyled id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <img src={AboutMain} alt="about" className="about-image-main"/>
              <div
                className="video-box"
                data-sal-delay="150"
                data-sal="slide-down"
                data-sal-duration="800"
              >
                <div className="inner">
                  <div className="thumb">
                    <img src={AboutVideoBack} alt="About" />
                    <div
                      className="popup-icon"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <FaPlay size={15} />
                    </div>
                  </div>
                  <div className="loading-bar">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              {
              //   <div className="award-status bounce-slide">
              //   <div className="inner">
              //     <div className="icon">
              //       <FaRegCheckCircle size={30} />
              //     </div>
              //     <div className="content">
              //       <h6 className="title">29+</h6>
              //       <span className="subtitle">Wonderful Awards</span>
              //     </div>
              //   </div>
              // </div>
              }
            </div>
          </div>
          <div
            className="col-lg-6"
            data-sal-delay="150"
            data-sal="slide-left"
            data-sal-duration="800"
          >
            <div className="about-content">
              <div className="section-title">
                <span className="pre-title">Haqqımızda</span>
                <h2 className="title">
                  <span>Alas Academy</span> ilə proqramlaşdırma kayeranı başla
                </h2>
                <p>
                  Alas Academy, fəaliyyətini 2020-ci ildə “TensorFlow User Group
                  Azerbaijan” adı ilə başlamışdır və süni intellekt tədrisi ilə
                  məşğul olmuşdur. 2022-ci ilin sonundan etibarən “Alas Academy”
                  adi altında daha geniş sahələrin tədrisilə faəliyyətini davam
                  etdirir.
                </p>
              </div>
              <ul className="features-list">
                <li>
                  <GiCheckMark />
                  Qafqazdakı Yeganə AWS partnyoru
                </li>
                <li>
                  <GiCheckMark />
                  Ölkədəki rəsmi TensorFlow User Group-u
                </li>
                <li>
                  <GiCheckMark />
                  100% ilə təmin olunma göstəricisi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId="vU-tZ_HiUQo"
        onClose={() => setIsVideoOpen(false)}
      />
    </AboutStyled>
  );
};

export default About;
