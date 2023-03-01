import styled from "styled-components";

export const HeaderStyled = styled.div`
  .header-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding-left: 22px;
    padding-right: 22px;
    background-color: var(--color-white);
    box-shadow: 0 6px 15px 0 rgb(0 0 0 / 5%);
    position: relative;

    .header-brand {
      .logo {
        margin-right: 40px;
        img{
            max-height: 45px;
        }
      }
    }

    .header-mainnav {
      display: flex;
      flex: 1 1;

      @media (max-width:1350px){
        justify-content: center;
      }

      .mainmenu {
        display: flex;
        align-items: center;

        .menu-item {
          display: flex;
          align-items: center;
          padding: 0 26px;
          color: var(--color-heading);
          font-size: 15px;
          /* font-weight: 600; */
          line-height: 90px;
          transition: 0.3s all;
          cursor: pointer;

          &:hover {
            color: var(--color-primary);
          }
        }

        .menu-itemdropdown {
          display: flex;
          align-items: center;
          padding: 0 26px;
          color: var(--color-heading);
          font-size: 15px;
          /* font-weight: 600; */
          line-height: 90px;
          transition: 0.3s all;
          cursor: pointer;

          svg {
            margin-left: 8px;
          }

          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }

    .header-right {
        display: flex;
        li{
            padding: 0 15px;
            line-height: 90px;
            cursor: pointer;
            transition: 0.3s all;

            &:hover{
                color: var(--color-primary);
            }
        }
    }
  }

  .hidden{
    display: none;
  }
`;



export const DropdownContent = styled.ul`
  width: 290px !important;
  min-width: 300px;
  border: none;
  border-radius: 0 !important;
  padding: 20px 0;
  box-shadow: 0 10px 40px rgb(0 0 0 / 8%);
  position: absolute;
  top: 35px;
  left: 0;
  background-color: var(--color-white);

  li {
    padding: 10px 30px;
    line-height: initial;
    font-size: 15px;
    cursor: pointer;

    a {
      color: initial;
      outline: none;
    }
    &:hover {
      a {
        color: var(--color-primary);
      }
    }
  }
`;
