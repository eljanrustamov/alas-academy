import styled from "styled-components";

export const ContactStyled = styled.div`
  padding: 180px 0 0;

  .contact-info {
    .title {
      font-family: var(--font-primary);
      color: var(--color-primary);
      margin-bottom: 15px;
    }

    .subtitle {
      margin-bottom: 45px !important;
    }

    .ci-list {
      li {
        margin-bottom: 30px;
        h5 {
          font-size: 18px;
        }
        p {
          font-size: 15px;
          color: var(--color-body);
        }
      }
    }

    .social-share {
      display: flex;
      color: var(--color-body);

      li {
        margin: 10px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: 50%;
          width: 46px;
          height: 46px;
          line-height: 46px;
          font-size: 16px;
          color: var(--color-body);
          transition: 0.3s;

          &:hover {
            color: var(--color-white);
            background-color: var(--color-primary);
            border-color: var(--color-primary);
          }
        }
      }
    }
  }

  .contact-form {
    padding: 70px;
    box-shadow: 0px 10px 50px 0px rgba(26, 46, 85, 0.1);
    background-color: var(--color-white);
    border-radius: 5px;
    margin-bottom: -80px;
    position: relative;
    @media (max-width: 1119px) {
      margin-top: 40px;
    }
    @media (max-width:479px){
      padding: 40px;
    }

    .form-title-wrapper {
      margin-bottom: 15px;
      h4 {
        margin-bottom: 4px;
      }

      p {
        font-size: 15px;
        color: var(--color-body);
        font-family: var(--font-primary);
      }
    }

    form {
      input {
        margin-bottom: 20px;
      }
      input,
      textarea {
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--color-border);
        color: var(--color-body);
        padding: 20px 0 10px;
        outline: none;
      }

      a {
        margin-top: 40px;
        padding: 0 40px;
        cursor: pointer;
      }
    }
  }

  .google-map-area{

    @media (max-width:991px){
      margin-top: 100px;
    }
  }
`;
