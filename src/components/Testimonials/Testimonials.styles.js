import styled from "styled-components";

export const TestimonialsStyled = styled.div`
  padding: 120px 0;
  overflow-x: hidden;

  .testimonial-heading-box {
    padding-right: 50px;
    .section-title {
      text-align: left;
      margin-bottom: 44px;

      .title {
        font-weight: 700;
      }
      .pre-title {
        margin-bottom: 14px;
        letter-spacing: 1px;
      }

      p {
        margin-bottom: 24px !important;
        margin-top: 15px !important;
      }
    }
  }

  .swiper {
    padding: 0 30px;
    margin: 0 -45px;
    margin-top: -20px;

    .swiper-wrapper {
      .testimonial-item {
        height: 490px;
        box-shadow: 0px 10px 50px 0px rgba(26, 46, 85, 0.1);
        background-color: var(--color-white);
        border-radius: 10px;
        padding: 60px 30px 50px;
        position: relative;
        z-index: 1;
        margin: 30px 0px 50px 0px;
        

        .image-box {
          width: 70px;
          height: 70px;
          display: inline-block;
          position: relative;
          margin-bottom: 35px;
          

          img {
            width: 100%;
            border-radius: 50%;
          }

          .quote-icon {
            height: 34px;
            width: 34px;
            line-height: 30px;
            font-size: 13px;
            color: var(--color-white);
            background-color: var(--color-primary);
            border-radius: 50%;
            border: 4px solid var(--color-white);
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: absolute;
            bottom: -8px;
            right: -12px;
          }
        }

        .content {
          p {
            margin-bottom: 20px !important;
            font-size: 16px !important;
            font-family: var(--font-primary);
            font-weight: 400;
            color: var(--color-body);
          }

          .rating-icon {
            margin-bottom: 6px;

            svg {
              color: #f8b81f;
              margin-right: 4px;
            }
          }

          .title {
            font-size: 18px;
            margin-bottom: 2px;
          }

          .subtitle {
            font-size: 15px;
            font-family: var(--font-primary);
            color: var(--color-body);
          }
        }
      }
    }
  }


  .home-one-testimonial-activator {
      padding: 0 30px;
      margin: 0 -45px;
      margin-top: -20px;

      /* bfeu */
      .swiper-wrapper {
        .swiper-slide {
          opacity: 0;
          visibility: hidden;

          &.swiper-slide-active,
          &.swiper-slide-next {
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
`;
