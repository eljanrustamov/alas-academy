import styled from "styled-components";

export const PartnersStyled = styled.div`
  padding: 120px 0;
  overflow-x: hidden;

  .section-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .title{
        font-weight: 700;
    }
    
    .subtitle{
        margin-top: 15px;
        color: var(--color-body);
        font-size: 15px;
    }
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
    max-height: 250px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 230px;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
