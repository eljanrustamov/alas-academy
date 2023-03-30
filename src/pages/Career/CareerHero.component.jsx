import React from "react";
import CareerHeroGIF from "../../assets/img/career-hero.gif";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const CareerHero = () => {
  return (
    <div className="CareerHero">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="hero-heading">
              <h1 className="title">
                Karyeranızı <span>Alas Academy</span> ilə böyüdün.
              </h1>
              <div className="shape-line" />
              <p className="subtitle">
                Dignissim tellus elementum rhoncus neque accumsan. Duis suscipit
                at venenatis tincidunt lectus. Facilisis varius lobortis mollis
                facilisis.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <div className="hero-img-wrapper">
              <img src={CareerHeroGIF} alt="students" />
            </div>
          </div>
        </div>

        <div className="row">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            autoplay
          >
            <SwiperSlide>
              <div className={"slider-item"}>
                <div>
                  <IoIosPeople size={35} />
                </div>
                <div>
                  <h5>Exceed clients' and colleagues expectations</h5>
                  <p>
                    Onlarla dünya brendlərinin rəsmi distribütoru olan “Baku
                    Electronics” bəzi mağazalarında...
                  </p>
                  <a href=".">
                    Daha ətraflı <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider-item"}>
                <div>
                  <IoIosPeople size={35} />
                </div>
                <div>
                  <h5>Exceed clients' and colleagues expectations</h5>
                  <p>
                    Onlarla dünya brendlərinin rəsmi distribütoru olan “Baku
                    Electronics” bəzi mağazalarında...
                  </p>
                  <a href=".">
                    Daha ətraflı <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider-item"}>
                <div>
                  <IoIosPeople size={35} />
                </div>
                <div>
                  <h5>Exceed clients' and colleagues expectations</h5>
                  <p>
                    Onlarla dünya brendlərinin rəsmi distribütoru olan “Baku
                    Electronics” bəzi mağazalarında...
                  </p>
                  <a href=".">
                    Daha ətraflı <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider-item"}>
                <div>
                  <IoIosPeople size={35} />
                </div>
                <div>
                  <h5>Exceed clients' and colleagues expectations</h5>
                  <p>
                    Onlarla dünya brendlərinin rəsmi distribütoru olan “Baku
                    Electronics” bəzi mağazalarında...
                  </p>
                  <a href=".">
                    Daha ətraflı <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
