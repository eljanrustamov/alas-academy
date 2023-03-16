import React, { useEffect } from "react";
import GirlIMG from "../../assets/img/hero.webp";
import StudentsIMG from "../../assets/img/students2.png";
import { HeroStyled } from "./Hero.styles";
import CustomButton from "../CustomButton/CustomButton.component";

const Hero = () => {


  return (
    <HeroStyled className="hero-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1
                className="title"
                data-sal-delay="100"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                Gələcəyini <span className="highlight">biz</span> <br />
                düşündük.
              </h1>

              <p
                data-sal-delay="200"
                data-sal="slide-up"
                data-sal-duration="1000"
                className="subtitle"
              >
                Proqramlaşdırma karyerana bizimlə başla
              </p>

              <div
                className="banner-btn"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <CustomButton href="https://forms.gle/JWUWAPKiokezTnQA6">
                  İndi qeydiyyatdan keç
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div
                className="thumbnail"
                data-sal-delay="500"
                data-sal="slide-left"
                data-sal-duration="1000"
              >
                <img src={GirlIMG} alt="Girl" />
              </div>
              <div
                className="instructor-info"
                data-sal-delay="600"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <div className="inner">
                  <h5 className="title">Tələbələrimiz</h5>
                  <div className="media">
                    <div className="thumb">
                      <img src={StudentsIMG} alt="Authors" />
                    </div>
                    <div className="content">
                      <span>200+</span> Tələbə
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
