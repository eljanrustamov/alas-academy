import React from "react";
import { FooterStyled } from "./Footer.styles";
import Logo from "../../assets/img/alas-logo.png";
import CustomButton from "../CustomButton/CustomButton.component";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="logo">
                  <img src={Logo} alt="logo"></img>
                </div>
                <p className="description">Gələcəyini biz düşündük!</p>
                <div className="widget-information">
                  <ul className="information-list">
                    <li>
                      <span>Add:</span>Caspian Plaza, 16. mərtəbə
                    </li>

                    <li>
                      <span>Telefon:</span>+994 55 533 53 60
                    </li>

                    <li>
                      <span>Email:</span> info@tfugaz.org
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget explore">
                <h4 className="widget-title">Tədris Proqramları</h4>
                <ul className="footer-link">
                  <li>Süni İntellekt</li>
                  <li>Data Science</li>
                  <li>Data Analitika</li>
                  <li>Kiber Təhlükəsizlik</li>
                  <li>Back-End Proqramlaşdırma</li>
                  <li>Front-End Proqramlaşdırma</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget quick-links">
                <h4 className="widget-title">Keçidlər</h4>
                <ul className="footer-link">
                  <li>
                    <a href="#partners">Partnyorlarımız</a>
                  </li>
                  <li>
                    <a href="#about">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="#courses">Tədris Proqramları</a>
                  </li>
                  <li>
                    <a href="#instructors">Müəllimlərimiz</a>
                  </li>
                  <li>
                    <a href="#testimonials">Tələbərimiz</a>
                  </li>
                  <li>
                    <a href="#contact">Əlaqə</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget contacts">
                <h4 className="widget-title">Əlaqə</h4>
                <div className="footer-widget-body">
                  <p className="description">
                    +994 55 533 53 56 <br /> +994 55 533 53 60
                  </p>
                  {
                    // <div className="input-group footer-subscription-form">
                    //   <input
                    //     type="email"
                    //     className="form-control"
                    //     placeholder="Emailiniz..."
                    //   />
                    //   <CustomButton type="button">Abunə ol</CustomButton>
                    // </div>
                  }

                  <ul className="social-share">
                    <li>
                      <a href="https://www.facebook.com/alas.edu.az/">
                        <FaFacebookF size={20} className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/alaseduaz/?viewAsMember=true">
                        <FaLinkedinIn size={20} className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/alas.edu.az/">
                        <FaInstagram size={20} className="icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@alaseduaz">
                        <FaYoutube size={20} className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="copyright-content">
                Copyright 2023 <span>Alas Academy</span>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
