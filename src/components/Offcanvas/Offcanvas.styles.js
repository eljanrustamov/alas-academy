import styled from "styled-components";

export const OffcanvasStyled = styled.div`
  .header-top {
    display: flex;
    border-bottom: 1px solid var(--color-border);
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    .logo {
      a {
        img {
          max-height: 35px;
        }
      }
    }

    .close-menu {
      .close-button {
        background: var(--color-white);
        border: 0 none;
        color: var(--color-heading);
        width: 40px;
        height: 40px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
        transition: var(--transition);
        &:hover {
          background-color: var(--color-primary);
          color: var(--color-white);
        }
      }
    }
  }

  .mm-menu {
    padding: 15px 20px;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: block;
        padding: 0;
        margin: 0;
        color: var(--color-body);
        font-family: var(--font-primary);
        a,
        button {
          padding: 8px 0;
          display: block;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          font-size: 16px;
          color: var(--color-body);
          font-weight: 500;
          position: relative;
          width: 100%;
          text-align: left;
          border: none;
          background-color: transparent;
          transition: 0.3s;
        }
        &:not(:last-child) {
          margin-bottom: 5px;
        }
        & + li {
          border-top: 1px solid var(--color-border);
        }
      }

      li.has-dropdown {
        button{
            display: flex;
            align-items: center;
            justify-content: space-between;

            svg{
                box-sizing: initial;
                background-color: #f3f3f3;
                padding: 9px;
                color: var(--color-body);
            }
        }

        &.active {
          button {
            color: var(--color-primary);
          }
        }
      }

      .submenu {
        opacity: 0;
        height: 0;
        transition: 0.1s all;

        li {
          margin-left: 15px;
        }

        &.active {
          height: 100%;
          opacity: 1;
        }
      }
    }
  }
`;
