import styled from "styled-components";

export const CounterupStyled = styled.div`
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    height: 53%;
    width: 100%;
    background-color: var(--color-body-2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .counterup-box-wrap {
    background-color: var(--color-white);
    box-shadow: 0 30px 70px 0 rgba(16, 12, 47, 0.3);

    border-radius: 10px;
    position: relative;
    padding: 70px;

    @media (max-width: 767px) {
      padding: 40px;
    }

    .counterup-box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      position: relative;
      text-align: center;

      &:first-child {
        border-bottom: 0.8px solid var(--color-border);
      }

      .counterup {
        text-align: center;
        padding: 38px 30px;

        &:first-child {
          border-right: 0.8px solid var(--color-border);
        }

        .counter-item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
          font-weight: 900;

          &.color-primary {
            color: var(--color-primary);
          }

          &.color-secondary {
            color: var(--color-secondary);
          }

          &.color-extra-1 {
            color: var(--color-extra-1);
          }
          &.color-extra-2 {
            color: var(--color-extra-2);
          }
        }
        .title {
          margin-bottom: 0;
          font-size: 13px;
          text-transform: uppercase;
          font-weight: normal;
        }
      }

      @media (max-width: 479px) {
        grid-template-columns: repeat(1, 1fr);
        &:first-child {
          border-bottom: none;
        }

        .counterup{
          padding: 25px;
          &:first-child{
            border-right: none;
          }
        }
      }
    }
  }

  .rocket-anim {
    position: absolute;
    top: -60px;
    right: -60px;
    transform: rotate(-45deg);
    z-index: 1;
  }
`;
