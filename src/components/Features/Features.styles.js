import styled from "styled-components";

export const FeaturesStyled = styled.div`
  background: linear-gradient(-90deg, var(--color-primary) 0%, orange 100%);
  overflow-x: hidden;

  .features-grid-wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr); //991
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr); //767
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(1, 1fr); // 575
    }

    .features-box {
      padding: 50px 30px;
      text-align: center;
      border-radius: 4px;
      box-shadow: var(--shadow-darker);
      background-color: var(--color-white);

      transition: 0.3s all;

      .icon {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        margin: 0 auto 28px;
        transition: 0.3s all;
      }
      .content {
        .title {
          margin-bottom: 15px;
          transition: 0.3s all;
          span {
            display: block;
          }
        }
        p {
          color: var(--color-header);
          margin-bottom: 0;
          transition: 0.3s all;
        }
      }

      &.features-style {
        background-color: transparent;
        box-shadow: none;
        display: flex;
        align-items: center;
        padding: 30px 0;
        text-align: left;
        border-right: 1px solid rgba(255, 255, 255, 0.15);
        padding-left: 30px;

        @media (max-width: 1119px) {
          padding-left: 0;
          border-right: none;
        }
        @media (max-width: 991px) {
          justify-content: center;
        }
        @media (max-width: 767px) {
          justify-content: center;
        }
        @media (max-width: 575px) {
          justify-content: flex-start;
          min-width: 240px;
          margin: 0 auto;
        }

        .features-svg-animate {
          svg {
            path {
              stroke: var(--color-white) !important;
              max-width: 38px;
            }
          }
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: none;
        }
        .icon {
          margin: 0;
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--color-white);
        }
        .content {
          padding-left: 20px;
          .title {
            margin-bottom: 0;
            font-weight: bold;
            color: var(--color-white);
            font-size: 18px;
          }
        }
      }
    }
  }
`;
