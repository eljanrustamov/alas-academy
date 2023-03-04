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
                <p className="description">
                  Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm
                  tempor incidid unt labore dolore.
                </p>
                <div className="widget-information">
                  <ul className="information-list">
                    <li>
                      <span>Add:</span>Caspian Plaza, 16. mərtəbə
                    </li>

                    <li>
                      <span>Call:</span> +01 123 5641 231
                    </li>

                    <li>
                      <span>Email:</span> alasacademy@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget explore">
                <h4 className="widget-title">Kurslarımız</h4>
                <ul className="footer-link">
                  <li>AI Engineering</li>
                  <li>Data Science</li>
                  <li>Data Analytics</li>
                  <li>Cyber Security</li>
                  <li>Back-End Development</li>
                  <li>Front-End Development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget quick-links">
                <h4 className="widget-title">Links</h4>
                <ul className="footer-link">
                  <li>Home</li>
                  <li>About</li>
                  <li>Courses</li>
                  <li>Instructors</li>
                  <li>Our Students</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget contacts">
                <h4 className="widget-title">Əlaqə</h4>
                <div className="footer-widget-body">
                  <p className="description">
                    Enter your email address to register to our newsletter
                    subscription
                  </p>
                  <div class="input-group footer-subscription-form">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Emailiniz..."
                    />
                    <CustomButton type="button">Abunə ol</CustomButton>
                  </div>
                  <ul className="social-share">
                    <li>
                      <a href="/">
                        <FaFacebookF size={20} className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaLinkedinIn size={20} className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaInstagram size={20} className="icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaTwitter size={20} className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
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
