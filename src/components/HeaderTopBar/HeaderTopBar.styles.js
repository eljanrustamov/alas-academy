import styled from "styled-components";

export const HeaderTopBarStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding-left: 22px; */
  /* padding-right: 22px; */
  background-color: var(--color-secondary);

  .header-top-info {
    display: flex;
    li {
      padding: 14px 30px 12px;
      position: relative;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-white);
        font-size: 14px;
        transition: 0.3s all;

        svg {
          font-size: 15px;
          color: var(--color-primary);
          margin-right: 10px;
          transition: 0.3s all;
        }

        &:hover {
          color: var(--color-primary);
        }
      }

      &::after {
        content: "";
        height: 100%;
        width: 1px;
        background-color: hsla(0, 0%, 100%, 0.1);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }

      &.social-icons {
        display: flex;
        a {
          padding: 0 12px;
          svg {
            color: var(--color-white);
            margin-right: 0;
          }

          &:hover {
            svg {
              color: var(--color-primary);
            }
          }
        }
      }
    }
  }
`;
