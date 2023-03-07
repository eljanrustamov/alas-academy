import React from "react";
import { TestimonialsStyled } from "./Testimonials.styles";
import CustomButton from "../CustomButton/CustomButton.component";
import StudentIMG01 from "../../assets/img/student01.jpg";
import StudentIMG02 from "../../assets/img/student02.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbQuote } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

const Testimonials = () => {
  return (
    <TestimonialsStyled id="testimonials">
      <div className="container">
        <div className="row g-lg-5">
          <div className="col-lg-5">
            <div className="testimonial-heading-box">
              <div
                className="section-title"
                data-sal-delay="50"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">TƏLƏBƏLƏRİMİZ</span>
                <h2 className="title">Tələbələrimizin Bizim Üçün Dedikləri</h2>

                <p className="shape-line"></p>
                <p>
                Alas Academy olaraq, həmişə tələbələrimizin fikirlərinə üstünlük verib, onların rəyi bizim üçün dəyər daşıyır.
                </p>
                <CustomButton href="https://forms.gle/JWUWAPKiokezTnQA6">
                  Sən də onlara qoşul
                </CustomButton>
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
                delay: 3500,
              }}
              breakpoints={{
                577: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="image-box">
                    <img src={StudentIMG01} alt="student"></img>
                    <span className="quote-icon">
                      <TbQuote size={20} />
                    </span>
                  </div>
                  <div className="content">
                    <p>
                      Alas Academy, Azərbaycandakı Data Science və Machine
                      Learning sahəsində ən ixtisaslaşmış kursdur. Karyeramdakı
                      növbəti addım üçün İdarə Heyətinə də güvəndiyim Alas
                      Academy-ni seçdim!” 
                    </p>
                    {
                      //   <div className="rating-icon">
                      //   <FaStar />
                      //   <FaStar />
                      //   <FaStar />
                      //   <FaStar />
                      //   <FaStar />
                      // </div>
                    }
                    <h5 className="title">Yaqub Əlizadə</h5>
                    <span className="subtitle">Developer</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="image-box">
                    <img src={StudentIMG02} alt="student"></img>
                    <span className="quote-icon">
                      <TbQuote size={20} />
                    </span>
                  </div>
                  <div className="content">
                    <p>
                      Hazırda DigData startapında “Research and Development”,
                      Alas Academy-də mentor olaraq fəaliyyət göstərirəm. Alas
                      Academy tək verdiyi təhsil ilə deyil, həm də yaratdığı
                      networking imkanları ilə məni qabağa çəkdi.
                    </p>
                    {
                      // <div className="rating-icon">
                      //   <FaStar />
                      //   <FaStar />
                      //   <FaStar />
                      //   <FaStar />
                      //   <FaStar />
                      // </div>
                    }
                    <h5 className="title">Vüqar Abdüləli</h5>
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
