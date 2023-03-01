import React, { useState } from "react";
import Logo from '../../assets/img/alas-logo.png'
import Drawer from "react-modern-drawer";
import { CgClose } from "react-icons/cg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

// import {SlideDown} from 'react-slidedown'
// import 'react-slidedown/lib/slidedown.css'

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { OffcanvasStyled } from "./Offcanvas.styles";

const Offcanvas = ({ isOffcanvasOpen, setIsOffcanvasOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <OffcanvasStyled>
      <Drawer
        open={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
        direction="left"
      >
        <div className="header-top">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo"/>
            </a>
          </div>

          <div className="close-menu" onClick={() => setIsOffcanvasOpen(false)}>
            <button className="close-button">
              <CgClose size={18}/>
            </button>
          </div>
        </div>

        <div className="mm-menu">
          <ul>
            <li>
              <a href="/">Ana Səhifə</a>
            </li>
            <li>
              <a href="/">Haqqımızda</a>
            </li>

            <li className={`has-dropdown${isDropdownOpen ? " active" : ""}`}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Kurslar {isDropdownOpen ? <SlArrowDown size={12}/> : <SlArrowUp size={12}/>}{" "}
              </button>
              <ul class={`submenu${isDropdownOpen ? " active" : ""}`}>
                <li>
                  <a href="/">AI Engineering</a>
                </li>
                <li>
                  <a href="/">Blockchain Development</a>
                </li>
                <li>
                  <a href="/">Data Science</a>
                </li>
                <li>
                  <a href="/">Data Analytics</a>
                </li>
                <li>
                  <a href="/">Cyber Security</a>
                </li>
                <li>
                  <a href="/">Back-End Development</a>
                </li>
                <li>
                  <a href="/">Front-End Development</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/">Əlaqə</a>
            </li>
          </ul>
        </div>
      </Drawer>
    </OffcanvasStyled>
  );
};

export default Offcanvas;
