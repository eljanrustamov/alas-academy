import styled from "styled-components";

export const FooterStyled = styled.div`
  .footer-top {
    position: relative;
    padding: 100px 0 95px;
    background-color: #f0f4f5;
    overflow-x: hidden;
    .footer-widget {
      font-size: 15px;
      font-family: var(--font-primary);

      .logo {
        img {
          max-height: 55px;
        }
      }
      .description {
        margin-top: 20px;
        margin-bottom: 20px !important;
      }
      .widget-information {
        .information-list {
          li {
            margin-top: 5px;
            span {
              font-weight: 500;
              margin-right: 5px;
            }
          }
        }
      }
      /*  */
      .widget-title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 36px !important;
      }

      .footer-link {
        font-size: 15px;
        font-family: var(--font-primary);

        li {
          margin-top: 11px;
          transition: 0.3s all;
          cursor: pointer;

          &:hover {
            color: var(--color-primary);
          }

          a {
            color: var(--bs-body-color);
          }
        }
      }

      &.explore {
        margin-left: 65px;

        @media (max-width: 991px) {
          margin-left: 0;
        }
      }

      &.quick-links {
        margin-left: 0;
      }

      &.contacts {
        .footer-subscription-form {
          margin-bottom: 35px;
          input {
            box-shadow: none;

            &:focus {
              border: 1px solid rgb(198 93 35 / 45%);
            }
          }
        }

        .social-share {
          display: flex;

          li {
            margin: 0 15px;

            .icon-facebook {
              color: var(--color-facebook);
            }
            .icon-linkedin {
              color: var(--color-linkedin);
            }
            .icon-instagram {
              color: var(--color-instagram);
            }
            .icon-twitter {
              color: var(--color-twitter);
            }
            .icon-youtube {
              color: var(--color-youtube);
            }
          }
        }

        .footer-google-map {
          width: "100%";
          margin-top: "25px";
        }
      }
    }
  }

  .copyright-area {
    background-color: #ebeff0;
    text-align: center;
    padding: 32px 0;

    .copyright-content {
      color: #000;
      font-size: 15px;
      font-family: var(--font-primary);

      span {
        color: var(--color-primary);
      }
    }
  }
`;
