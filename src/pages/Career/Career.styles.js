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
    margin-bottom: 500px;

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
`;
