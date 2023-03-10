import styled from "styled-components";

export const CourseDetailsStyled = styled.div`
  /* padding: 120px 0; */
  /* height: 3000px; */

  .heading-wrapper {
    /* background-color: yellow; */
    padding: 120px 0;
    color: var(--color-white);

    @media (max-width: 565px) {
    }
  }

  .course-details-content-wrapper {
    padding: 80px 0;

    /*  */
    .cf-content {
      font-family: var(--font-primary);
      color: var(--color-body);
      font-size: 15px;
    }
    /*  */
    .content-first {
      .cf-title {
        color: var(--color-header);
        margin-bottom: 20px;
      }
    }
    .cf-gallery-wrapper {
      width: 370px;

      img {
        width: 100%;
        border-radius: 10px;
      }

      @media (max-width: 991px) {
        margin-bottom: 40px;
        justify-content: end;
      }
    }

    /*  */
    .content-second {
    }
    .cf-title {
      font-weight: 600;
    }
  }
`;
