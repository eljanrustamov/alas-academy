import React, { useState } from "react";
import Logo from "../../assets/img/alas-logo.png";
import { HeaderStyled, DropdownContent } from "./Header.styles";
import HeaderTopBar from "../HeaderTopBar/HeaderTopBar.component";
import { useMediaQuery } from "react-responsive";
import { FaAngleDown, FaSistrix, FaBars } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";
import SearchPopup from "../SearchPopup/SearchPopup.component";
import Offcanvas from "../Offcanvas/Offcanvas.component";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isDesktopXl = useMediaQuery({ minWidth: 1199 });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

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

  return (
    <HeaderStyled>
      {isDesktop && <HeaderTopBar />}

      <div className="header-navbar">
        <div className="header-brand">
          <a className="logo" href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        {isDesktopXl && (
          <nav className="header-mainnav">
            <ul className="mainmenu">
              <li className="menu-item">Ana Səhifə</li>
              <li className="menu-item">Haqqımızda</li>
              <motion.li
                className="menu-itemdropdown"
                onHoverStart={toggleHoverMenu}
                onHoverEnd={toggleHoverMenu}
              >
                Kurslar <FaAngleDown />
                <motion.div
                  className="position-absolute"
                  initial="exit"
                  animate={isHover ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <DropdownContent>
                    <li>
                      <a href="/">AI Engineering</a>
                    </li>
                    {
                      // <li>
                      //   <a href="/">Blockchain Development</a>
                      // </li>
                    }
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
                  </DropdownContent>
                </motion.div>
              </motion.li>

              <li className="menu-item">Əlaqə</li>
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
