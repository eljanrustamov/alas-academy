import styled from "styled-components";

export const CustomButtonStyled = styled.a`
  display: inline-block;
  height: 60px;

  border: 0;
  border-radius: 5px;
  line-height: 62px;
  color: var(--color-white) !important;
  background: var(--color-primary);
  padding: 0 30px;
  font-size: 15px;
  font-weight: 500;
  font-family: var(--font-secondary);
  text-align: center;
  transition: 0.4s;
  overflow: hidden;
  position: relative;
  z-index: 1;

  svg{
    margin-left: 5px;
  }

  &:hover{
    background-color: orange;
  }
`;
