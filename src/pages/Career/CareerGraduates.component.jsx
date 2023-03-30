import React from "react";
import workSVG from "../../assets/img/svgs/Work.svg";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// import CareerGraduate01 from '../../assets/img/career-graduate1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CareerGraduates = () => {
  return (
    <div className="CareerGraduates">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="heading">
              <h2 className="title">
                <span>Məzunlarımızla</span> tanış olun!
              </h2>
              <div className="shape-line" />
              <p>
                Dignissim tellus elementum rhoncus neque accumsan. Duis suscipit
                at venenatis tincidunt lectus. Facilisis varius lobortis mollis
                facilisis.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1199: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
        >
          <SwiperSlide>
            <div className="slider-item">
              <div className="graduate-img">
                <img src={""} alt="graduate" />
              </div>

              <div className="graduate-heading">
                <h6>
                  Ulviyya
                  <br />
                  Imamova
                </h6>
                <p>
                  <img src={workSVG} alt="work" /> Kapital Bankda işləyir
                </p>
              </div>
              <p className="graduate-text">
                Viverra eleifend urna in nisl non ornare viverra neque
                hendrerit. Pellentesque posuere cursus pharetra, iaculis lorem
                amet. Nunc libero.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="graduate-img">
                <img src={""} alt="graduate" />
              </div>

              <div className="graduate-heading">
                <h6>
                  Ulviyya
                  <br />
                  Imamova
                </h6>
                <p>
                  <img src={workSVG} alt="work" /> Kapital Bankda işləyir
                </p>
              </div>
              <p className="graduate-text">
                Viverra eleifend urna in nisl non ornare viverra neque
                hendrerit. Pellentesque posuere cursus pharetra, iaculis lorem
                amet. Nunc libero.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="graduate-img">
                <img src={""} alt="graduate" />
              </div>

              <div className="graduate-heading">
                <h6>
                  Ulviyya
                  <br />
                  Imamova
                </h6>
                <p>
                  <img src={workSVG} alt="work" /> Kapital Bankda işləyir
                </p>
              </div>
              <p className="graduate-text">
                Viverra eleifend urna in nisl non ornare viverra neque
                hendrerit. Pellentesque posuere cursus pharetra, iaculis lorem
                amet. Nunc libero.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="graduate-img">
                <img src={""} alt="graduate" />
              </div>

              <div className="graduate-heading">
                <h6>
                  Ulviyya
                  <br />
                  Imamova
                </h6>
                <p>
                  <img src={workSVG} alt="work" /> Kapital Bankda işləyir
                </p>
              </div>
              <p className="graduate-text">
                Viverra eleifend urna in nisl non ornare viverra neque
                hendrerit. Pellentesque posuere cursus pharetra, iaculis lorem
                amet. Nunc libero.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item">
              <div className="graduate-img">
                <img src={""} alt="graduate" />
              </div>

              <div className="graduate-heading">
                <h6>
                  Ulviyya
                  <br />
                  Imamova
                </h6>
                <p>
                  <img src={workSVG} alt="work" /> Kapital Bankda işləyir
                </p>
              </div>
              <p className="graduate-text">
                Viverra eleifend urna in nisl non ornare viverra neque
                hendrerit. Pellentesque posuere cursus pharetra, iaculis lorem
                amet. Nunc libero.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-item">
              <div className="graduate-img">
                <img src={""} alt="graduate" />
              </div>

              <div className="graduate-heading">
                <h6>
                  Ulviyya
                  <br />
                  Imamova
                </h6>
                <p>
                  <img src={workSVG} alt="work" /> Kapital Bankda işləyir
                </p>
              </div>
              <p className="graduate-text">
                Viverra eleifend urna in nisl non ornare viverra neque
                hendrerit. Pellentesque posuere cursus pharetra, iaculis lorem
                amet. Nunc libero.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="slider-navigations">
          <div className="btn swiper-button-prev">
            <AiOutlineArrowLeft size={25} />
          </div>
          <div className="btn swiper-button-next">
            <AiOutlineArrowRight size={25} />
          </div>
          <div className="line" />
        </div>
      </div>
    </div>
  );
};

export default CareerGraduates;
