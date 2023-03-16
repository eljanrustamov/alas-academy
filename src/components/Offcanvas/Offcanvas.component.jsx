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
import { NavLink } from "react-router-dom";

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
              <NavLink to="/">Ana Səhifə</NavLink>
            </li>
            <li>
              <NavLink to="#haqqimizda">Haqqımızda</NavLink>
            </li>

            <li className={`has-dropdown${isDropdownOpen ? " active" : ""}`}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Kurslar {isDropdownOpen ? <SlArrowDown size={12}/> : <SlArrowUp size={12}/>}{" "}
              </button>
              <ul class={`submenu${isDropdownOpen ? " active" : ""}`}>
                <li>
                  <NavLink to="/tedris-proqramlarimiz/suni-intellekt">Süni İntellekt</NavLink>
                </li>
                <li>
                  <NavLink to="/tedris-proqramlarimiz/data-science">Data Science</NavLink>
                </li>
                <li>
                  <NavLink to="/tedris-proqramlarimiz/data-analitika">Data Analytics</NavLink>
                </li>
                <li>
                  <NavLink to="/tedris-proqramlarimiz/kiber-tehlukesizlik">Cyber Security</NavLink>
                </li>
                <li>
                  <NavLink to="/tedris-proqramlarimiz/backend-proqramlasdirma">Back-End Development</NavLink>
                </li>
                <li>
                  <NavLink to="/tedris-proqramlarimiz/frontend-proqramlasdirma">Front-End Development</NavLink>
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
