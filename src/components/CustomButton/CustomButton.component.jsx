import React from "react";
import { CustomButtonStyled } from "./CustomButton.styles";
import {AiOutlineArrowRight} from 'react-icons/ai'

const CustomButton = ({children}) => {
  return (
    <CustomButtonStyled href="/">
        {children}  <AiOutlineArrowRight size={18}/>
    </CustomButtonStyled>
  );
};

export default CustomButton;
