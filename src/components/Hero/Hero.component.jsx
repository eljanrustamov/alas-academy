import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import GirlIMG from "../../assets/img/hero.webp";
import AuthorsIMG from "../../assets/img/authors.png";
import { HeroStyled } from "./Hero.styles";
import CustomButton from "../CustomButton/CustomButton.component";
import sal from "sal.js";
import "../../assets/scss/default/_sal.scss";

const Hero = () => {
  useEffect(() => {
    sal();
  }, []);

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
                Get <span className="highlight">2500+</span> <br />
                Best Online Courses From Alas Academy
              </h1>

              <p
                data-sal-delay="200"
                data-sal="slide-up"
                data-sal-duration="1000"
                className="subtitle"
              >
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>

              <div
                className="banner-btn"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <CustomButton>Find courses</CustomButton>
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
                  <h5 className="title">Müəllimlərimiz</h5>
                  <div className="media">
                    <div className="thumb">
                      <img
                        src={AuthorsIMG}
                        alt="Authors"
                      />
                    </div>
                    <div className="content">
                      <span>200+</span> Müəllimlər
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