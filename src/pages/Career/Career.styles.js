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
      background-color: rgba(241, 244, 245, 1);
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
        display: flex;
        align-items: center;
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
`;
