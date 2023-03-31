import styled from "styled-components";

export const CareerJobDetailsStyled = styled.div`
  padding: 80px 0;

  .header {
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 48px;
  }

  .content {
    line-height: 33px;
    font-size: 14px;
    color: var(--color-body);

    .title {
      font-size: 24px;
      margin-bottom: 24px;
      margin-top: 56px;
      color: var(--color-header);
    }
  }

  .left-side {
    padding: 0 34px;
    .job-card {
      display: flex;
      justify-content: space-between;
      padding: 32px;
      border-radius: 16px;
      background-color: var(--color-body-2);
      margin-top: 110px;

      .job-name {
        font-size: 24px;
        font-weight: 700;
      }

      .info {
        font-size: 14px;
        font-weight: 300;
        span {
          color: var(--color-primary);
          font-weight: 700;
        }
      }
    }
  }
`;
