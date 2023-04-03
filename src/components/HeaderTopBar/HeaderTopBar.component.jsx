import React from "react";
import { HeaderTopBarStyled } from "./HeaderTopBar.styles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const HeaderTopBar = () => {
  return (
    <HeaderTopBarStyled>
      <ul className="header-top-info">
        <li>
          <a href="/">
            <BsFillTelephoneFill className="icon-number" />
            Telefon: <span className="number">+ 994 55 533 53 60</span>
          </a>
        </li>

        <li>
          <a href="/">
            <MdEmail size={18} />
            admin@alas.edu.az
          </a>
        </li>

        <li className="social-icons">
          <a href="https://www.instagram.com/alas.edu.az/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/alas.edu.az/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/alaseduaz/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </HeaderTopBarStyled>
  );
};

export default HeaderTopBar;
