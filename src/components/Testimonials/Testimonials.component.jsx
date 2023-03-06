import React from "react";
import { TestimonialsStyled } from "./Testimonials.styles";
import CustomButton from "../CustomButton/CustomButton.component";
import TestimonialIMG from "../../assets/img/testimonial-01.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbQuote, TbStarFilled } from "react-icons/tb";
import { FaStar} from "react-icons/fa";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

const Testimonials = () => {

  
  return (
    <TestimonialsStyled>
      <div className="container">
        <div className="row g-lg-5">
          <div className="col-lg-5">
            <div className="testimonial-heading-box">
              <div className="section-title" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800"> 
                <span className="pre-title">Testimonials</span>
                <h2 className="title">What Our Students Have To Say</h2>

                <p className="shape-line"></p>
                <p>
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod tempor incididunt labore dolore magna aliquaenim ad
                  minim.
                </p>
                <CustomButton>Kurslara get</CustomButton>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={Infinity}
              className="home-one-testimonial-activator swiper"
              modules={[Autoplay]}
              pagination={false}
              grabCursor={true}
              speed={1500}
              autoplay={{
                  delay: 3500
              }}
              breakpoints={{
                  577: {
                  slidesPerView: 2
                  }
              }}
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="image-box">
                    <img src={TestimonialIMG} alt="student"></img>
                    <span className="quote-icon">
                      <TbQuote size={20} />
                    </span>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor amet consec tur elit adicing sed do
                      usmod zx tempor enim minim veniam quis nostrud exer
                      citation.
                    </p>
                    <div className="rating-icon">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <h5 className="title">Amber Page</h5>
                    <span className="subtitle">Developer</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="image-box">
                    <img src={TestimonialIMG} alt="student"></img>
                    <span className="quote-icon">
                      <TbQuote size={20} />
                    </span>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor amet consec tur elit adicing sed do
                      usmod zx tempor enim minim veniam quis nostrud exer
                      citation.
                    </p>
                    <div className="rating-icon">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <h5 className="title">Alex Page</h5>
                    <span className="subtitle">Developer</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="image-box">
                    <img src={TestimonialIMG} alt="student"></img>
                    <span className="quote-icon">
                      <TbQuote size={20} />
                    </span>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor amet consec tur elit adicing sed do
                      usmod zx tempor enim minim veniam quis nostrud exer
                      citation.
                    </p>
                    <div className="rating-icon">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <h5 className="title">Jonathan Page</h5>
                    <span className="subtitle">Developer</span>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </TestimonialsStyled>
  );
};

export default Testimonials;
