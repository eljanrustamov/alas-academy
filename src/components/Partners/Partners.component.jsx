import React from "react";
import { PartnersStyled } from "./Partners.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper";
import DigdataLogo from "../../assets/img/digdata-logo.png";
import BirbankLogo from "../../assets/img/birbank-logo.png";
import TensorflowLogo from "../../assets/img/tensorflow-logo.png";
import YusiflitechLogo from "../../assets/img/yusiflitech-logo.jpeg";
import AwsLogo from "../../assets/img/aws-logo.png";
import { useMediaQuery } from "react-responsive";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Partners = () => {

  const isDesktopXl = useMediaQuery({ minWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 767 });
  const isMobile = useMediaQuery({ minWidth: 565 });

  return (
    <PartnersStyled>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              <h2 className="title">Bizim Partnyorlar</h2>
              <div className="shape-line"></div>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                tempor incididunt labore dolore magna aliquaenim ad minim.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8 col-sm-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={isDesktopXl ? 5 : isDesktop ? 4 : isTablet ? 3 : isMobile ? 2 : 1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img src={DigdataLogo} alt="digdata" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={BirbankLogo} alt="birbank"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={TensorflowLogo} alt="tensorflow"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={YusiflitechLogo} alt="yusiflitech"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={AwsLogo} alt="aws"></img>
              </SwiperSlide>
            </Swiper>
            </div>
        </div>
      </div>
    </PartnersStyled>
  );
};

export default Partners;
