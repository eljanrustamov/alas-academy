import React from "react";
import { HeaderTopBarStyled } from "./HeaderTopBar.styles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const HeaderTopBar = () => {
  return (
    <HeaderTopBarStyled>
      <ul className="header-top-info">
        <li>
          <a href="/">
            <BsFillTelephoneFill />
            Call: +994559567868
          </a>
        </li>

        <li>
          <a href="/">
            <MdEmail size={18} />
            Email: alasacademy@gmail.com
          </a>
        </li>

        <li className="social-icons">
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

          <a href="/">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </HeaderTopBarStyled>
  );
};

export default HeaderTopBar;
