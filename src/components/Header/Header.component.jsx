import React from "react";
import { HeaderStyled } from "./Header.styles";
import HeaderTopBar from '../HeaderTopBar/HeaderTopBar.component'
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });


  return (
    <HeaderStyled>
      {isDesktop && (
        <HeaderTopBar/>
      )}


    </HeaderStyled>
  );
};

export default Header;
