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
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <OffcanvasStyled>
      <Drawer
        open={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
        direction="left"
      >
        <div className="header-top">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="logo"/>
            </NavLink>
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

            <li className={`has-dropdown${isAboutDropdownOpen ? " active" : ""}`}>
              <a href="/#about" onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}>
                Haqqımızda {isAboutDropdownOpen ? <SlArrowDown size={12}/> : <SlArrowUp size={12}/>}{" "}
              </a>
              <ul class={`submenu${isAboutDropdownOpen ? " active" : ""}`}>
                <li>
                  <NavLink to="/karyera">Karyera</NavLink>
                </li>
              </ul>
            </li>

            <li className={`has-dropdown${isCoursesDropdownOpen ? " active" : ""}`}>
              <button onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}>
                Kurslar {isCoursesDropdownOpen ? <SlArrowDown size={12}/> : <SlArrowUp size={12}/>}{" "}
              </button>
              <ul class={`submenu${isCoursesDropdownOpen ? " active" : ""}`}>
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
              <NavLink to="/elaqe">Əlaqə</NavLink>
            </li>
          </ul>
        </div>
      </Drawer>
    </OffcanvasStyled>
  );
};

export default Offcanvas;
