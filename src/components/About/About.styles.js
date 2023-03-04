import styled from "styled-components";

export const AboutStyled = styled.div`
  padding: 120px 0;
  overflow-x: hidden;

  .about-image-gallery {
    position: relative;
    padding: 90px 0 60px;
    @media (min-width: 767px) and (max-width: 991px) {
      text-align: center;
    }
    img {
      border-radius: 10px;
    }

    /* .video-box {
      position: absolute;
      top: 0;
      right: 40px;
      .inner {
        padding: 20px;
        background-color: var(--color-white);
        border-radius: 10px;
        box-shadow: 0px 40px 70px rgb(27 20 78 / 10%);

        .thumb {
          position: relative;
          text-align: center;
          img {
            border-radius: 6px;
          }

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;

            transform: translateY(-50%);

            margin: 0 auto;
            height: 60px;
            width: 60px;
            line-height: 62px;
            border-radius: 50%;
            color: var(--color-primary);
            background-color: var(--color-white);
            font-size: 18px;
            cursor: pointer;
          }

          svg {
            margin-left: 5px;
          }
        }

        .loading-bar {
          margin: -20px 0;
          padding-top: 20px;

          span {
            display: block;
            height: 7px;
            background-color: #eaf0f2;
            border-radius: 10px;
            margin: 20px 0;

            &:first-child {
              width: 80%;
            }
            &:nth-child(2n) {
              width: 45%;
            }
          }
        }
      }
    } */

    .video-box {
      position: absolute;
      top: 0;
      right: 40px;
      @media (max-width: 575px) {
        transform: scale(0.7);
        right: 0;
      }
      .inner {
        padding: 20px;
        background-color: var(--color-white);
        border-radius: 10px;
        box-shadow: 0px 40px 70px rgba(27, 20, 78, 0.1);
        .thumb {
          position: relative;
          text-align: center;
          img {
            border-radius: 6px;
          }
          .popup-icon {
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            margin: 0 auto;
            height: 60px;
            width: 60px;
            line-height: 62px;
            background-color: var(--color-white);
            border-radius: 50%;
            color: var(--color-secondary);
            font-size: 18px;
            i {
              margin-left: 5px;
            }
            &:hover {
              background-color: var(--color-primary);
              color: var(--color-white);
            }
          }
        }
      }
    }

    .award-status {
      position: absolute;
      right: 70px;
      bottom: 0;

      @media (max-width: 479px) {
        right: 0;
      }

      .inner {
        display: flex;
        padding: 22px 20px 18px 30px;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: 0px 40px 70px rgb(27 20 78 / 10%);
        background: #ffffff;
        border-radius: 10px;
        .icon {
          width: 60px;
          height: 60px;
          background: rgba(26, 182, 157, 0.1);
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 15px;
          color: var(--color-extra-1);
          font-size: 30px;
        }

        .content {
          text-align: left;
          .title {
            color: var(--color-extra-1);
            font-size: 24px;
            line-height: 1;
            margin-bottom: 0;
          }

          .subtitle {
            font-size: 15px;
            font-family: var(--font-primary);
            font-weight: 300;
            color: var(--color-body);
          }
        }
      }
    }
  }

  .about-content {
    padding-left: 30px;

    .section-title {
      margin-bottom: 20px;
      text-align: left;

      .pre-title {
        font-size: 15px;
        font-family: var(--font-primary);
        color: var(--color-body);
        font-weight: 400;
        display: inline-block;
        text-transform: uppercase;
        margin-bottom: 14px;
        letter-spacing: 1px;
      }

      .title {
        margin-bottom: 18px;
        font-weight: 700;
        font-size: 36px;

        span {
          color: var(--color-primary);
        }
      }

      p {
        margin-bottom: 24px;
        margin-top: 15px;
        font-size: 15px;
        line-height: 1.73;
        font-weight: 400;
        color: var(--color-body);
        margin: 0 0 30px;
      }
    }

    .features-list {
      li {
        display: flex;
        justify-content: start;
        align-items: center;
        font-weight: 500;
        color: var(--color-header);
        position: relative;
        margin-bottom: 16px;
        margin-top: 16px;
        line-height: 1.73;
        font-size: 15px;

        svg {
          margin-right: 10px;
          color: var(--color-primary);
        }
      }
    }
  }
`;
