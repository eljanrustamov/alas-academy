import styled from "styled-components";

export const CareerStyled = styled.div`
  .CareerHero {
    padding: 80px 0;

    .hero-heading {
      .title {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 16px;

        span {
          color: var(--color-primary);
        }
      }

      .subtitle {
        margin-top: 16px;
        font-size: 15px;
        color: var(--color-body);
      }
    }

    .hero-img-wrapper {
      width: 250px;
      height: 250px;
      background-color: gray;

      img {
        width: 100%;
      }

      @media (max-width: 767px) {
        margin: 36px 0;
      }
    }

    .slider-item {
      display: flex;
      padding: 30px;
      background-color: var(--color-body-2);
      border-radius: 16px;
      gap: 20px;
      transition: 0.3s all;

      svg {
        margin-top: 5px;
        color: var(--color-body);
        transition: 0.3s all;
      }

      h5 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
        color: var(--color-body);
        margin: 16px 0 !important;
      }

      a {
        color: var(--color-header);
        font-weight: 700;
        display: flex;
        align-items: center;
        text-decoration: underline !important;
        transition: 0.3s all;

        svg {
          opacity: 0;
          margin: 0;
        }
      }

      &:hover {
        svg,
        a {
          opacity: 1;
          color: var(--color-primary);
        }
      }
    }
  }

  .CareerJobs {
    background-color: var(--color-body-2);
    padding: 80px 0;

    .heading {
      margin-bottom: 56px;
      h2 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      span {
        color: var(--color-primary);
      }
    }

    .job-item {
      background-color: #fff;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0px 41px 43px rgba(72, 89, 111, 0.1);

      .header {
        .name {
          font-size: 24px;
          font-weight: 700;
        }
        p {
          font-weight: 300;
        }
        .price {
          font-weight: 700;
          color: var(--color-primary);
        }
      }

      .body {
        li {
          margin: 24px 0;
          h6 {
            font-weight: 700;
          }

          p {
            color: var(--color-body);
            font-weight: 300;
          }
        }
      }

      .footer {
        display: flex;
        gap: 16px;
      }

      @media (max-width: 997px) {
        margin: 10px 0;
      }

      @media (max-width: 767px) {
        margin: 20px 0;
      }
    }
  }

  .CareerGraduates {
    padding: 80px 0;
    position: relative;

    .heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .title {
        margin-bottom: 16px;
        span {
          color: var(--color-primary);
        }
      }
      p {
        margin-top: 16px;
        color: var(--color-body);
      }
    }

    .swiper {
      padding: 100px 0;

      .slider-item {
        background-color: var(--color-body-2);
        padding: 32px;
        position: relative;
        border-radius: 16px;

        .graduate-img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 107px;
          height: 107px;
          position: absolute;
          right: 32px;
          top: -53px;
          background-color: #fff;
          border-radius: 50%;
          border-top-left-radius: 20px;
          padding: 14px;

          img {
            width: 80px;
          }
        }

        .graduate-heading {
          margin-top: 16px;
          margin-bottom: 24px;
          h6 {
            font-size: 24px;
            font-weight: 700;
          }
          p {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 500;
            gap: 8px;
          }
        }

        .graduate-text {
          font-size: 14px;
          color: var(--color-body);
        }
      }
    }

    .slider-navigations {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      position: relative;

      .btn {
        width: 50px;
        height: 50px;
        color: var(--color-white);
        background-color: var(--color-primary);
        border-radius: 50%;
        padding: 10px;
        transition: 0.3s all;

        &.swiper-button-disabled {
          background-color: var(--color-body-2);
          color: var(--color-header);
          opacity: 1;
        }
        &.swiper-button-prev {
          &::after {
            display: none;
          }
        }

        &.swiper-button-next {
          left: 70px;
          &::after {
            display: none;
          }
        }

        &:hover {
          color: var(--color-white);
          background-color: var(--color-primary);
        }
      }

      .line {
        width: calc(100% - 140px);
        height: 1px;
        background-color: var(--color-body-2);
      }
    }
  }

  .CareerJobiBot{
    padding: 180px 0;

    .content{
      .title{
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 24px;
        span{
          color: var(--color-primary);
        }
      }

      p{
        margin-top: 24px;
        font-size: 18px;
        color: var(--color-body);
      }

      a{
        margin-top: 24px;
      }
    }

    .img-banner{
      width: 450px;
      height: 340px;
      img{
        height: 100%;
      }
    }
  }

`;
