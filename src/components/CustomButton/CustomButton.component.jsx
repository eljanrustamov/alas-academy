import React from "react";
import { CustomButtonStyled } from "./CustomButton.styles";
import {AiOutlineArrowRight} from 'react-icons/ai'

const CustomButton = ({children, href, icon, backgroundColor = 'var(--color-primary)', hoveredBackgroundColor="orange", color="#fff"}) => {

  console.log('icon' + icon)
  return (
    <CustomButtonStyled href={href} backgroundColor={backgroundColor} hoveredBackgroundColor={hoveredBackgroundColor} color={color} target="_blank">
        {children} {icon && <AiOutlineArrowRight size={18}/>}  
    </CustomButtonStyled>
  );
};

export default CustomButton;
