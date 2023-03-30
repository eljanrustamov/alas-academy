import React, { useEffect, useState } from "react";
import { HeaderStyled, DropdownContent } from "./Header.styles";
import HeaderTopBar from "../../components/HeaderTopBar/HeaderTopBar.component";
import SearchPopup from "../../components/SearchPopup/SearchPopup.component";
import Offcanvas from "../../components/Offcanvas/Offcanvas.component";

import { FaAngleDown, FaSistrix, FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import UseSticky from "../../hooks/use-sticky";
import Logo from "../../assets/img/alas-logo.png";

import "reactjs-popup/dist/index.css";
import { NavLink, useHref } from "react-router-dom";

const subMenuAnimate = {
  enter: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },

  exit: {
    y: -15,
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isDesktopXl = useMediaQuery({ minWidth: 1199 });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { isSticky } = UseSticky();
  const [isHoverCourses, toggleHoverCourses] = useState(false);
  const [isHoverAbout, toggleHoverAbout] = useState(false);

  const [isPageMain, setIsPageMain] = useState(false);
  const to = useHref();

  const toggleHoverMenuCourses = () => toggleHoverCourses(!isHoverCourses);
  const toggleHoverMenuAbout = () => toggleHoverAbout(!isHoverAbout);

  useEffect(() => {
    setIsPageMain(to === "/");
  }, [to]);

  return (
    <HeaderStyled className={isSticky ? "fixed" : ""}>
      {isDesktop && isPageMain && <HeaderTopBar />}

      <div className={`header-navbar ${isSticky ? "navbar-sticky" : ""}`}>
        <div className="header-brand">
          <a className="logo" href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        {isDesktopXl && (
          <nav className="header-mainnav">
            <ul className="mainmenu">
              <li className="menu-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Ana Səhifə
                </NavLink>
              </li>

              <motion.li
                className="menu-itemdropdown"
                onHoverStart={toggleHoverMenuCourses}
                onHoverEnd={toggleHoverMenuCourses}
              >
                <a href="#courses">
                  Tədris Proqramlarımız <FaAngleDown />
                </a>
                <motion.div
                  className="dropdown"
                  initial="exit"
                  animate={isHoverCourses ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <DropdownContent minWidth={"270"}>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/suni-intellekt"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Süni İntellekt
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/data-science"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Data Science
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/data-analitika"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Data Analitika
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/kiber-tehlukesizlik"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Kiber Təhlükəsizlik
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/backend-proqramlasdirma"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Back-End Proqramlaşdırma
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/frontend-proqramlasdirma"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Front-End Proqramlaşdırma
                      </NavLink>
                    </li>
                  </DropdownContent>
                </motion.div>
              </motion.li>

              <motion.li
                className="menu-itemdropdown"
                onHoverStart={toggleHoverMenuAbout}
                onHoverEnd={toggleHoverMenuAbout}
              >
                <a href="/#about">
                  Haqqımızda <FaAngleDown />
                </a>
                <motion.div
                  className="dropdown"
                  initial="exit"
                  animate={isHoverAbout ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <DropdownContent minWidth={"160"}>
                    <li>
                      <NavLink
                        to="/karyera"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Karyera
                      </NavLink>
                    </li>
                  </DropdownContent>
                </motion.div>
              </motion.li>

              <li className="menu-item">
                <NavLink
                  to="/elaqe"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Əlaqə
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        <ul className="header-right">
          <li onClick={() => setIsSearchOpen(true)}>
            <FaSistrix size={25} />
          </li>
          {!isDesktopXl && (
            <li onClick={() => setIsOffcanvasOpen(true)}>
              <FaBars size={22} />
            </li>
          )}
        </ul>
      </div>

      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {!isDesktopXl && (
        <Offcanvas
          isOffcanvasOpen={isOffcanvasOpen}
          setIsOffcanvasOpen={setIsOffcanvasOpen}
        />
      )}
    </HeaderStyled>
  );
};

export default Header;
