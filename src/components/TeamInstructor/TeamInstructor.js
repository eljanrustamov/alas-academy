import styled from "styled-components";

export const TeamInstructorStyled = styled.div`
  .thumbnail-wrap {
    position: relative;
    .thumbnail {
      margin-bottom: 25px;
      transition: 0.3s all;

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;

        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: var(--color-primary-2);
        visibility: hidden;
        opacity: 0;
        transition: 0.3s all;
      }

      img {
        width: 100%;
        border-radius: 10px;
        border: 0;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
        transition: 0.3s;
      }
    }

    .team-share-info {
      position: absolute;
      top: 10px;
      right: 20px;
      left: auto;
      transform: translateY(0);
      margin: -10px 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        visibility: hidden;
        opacity: 0;
        transform: translateX(10px);
        transform: translateY(-10px);
        transition: 0.3s all;

        &:first-child {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);

          a {
            visibility: visible;
            border-color: var(--color-primary);

            svg {
              color: var(--color-primary);
            }
          }
        }
        a {
            width: 40px;
          display: inline-block;
          line-height: 39px;
          border: 2px solid var(--color-white);
          text-align: center;
          border-radius: 50%;
          font-size: 18px;
          color: var(--color-white);

          transition: 0.3s all;

          svg {
            box-sizing: content-box;
          }
        }
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 18px;
      margin-bottom: 4px;

      &:hover{
        cursor: pointer;
        color: var(--color-primary);
      }
    }

    .designation {
      font-size: 15px;
      font-family: var(--font-secondary);
      color: var(--color-body);
    }
  }

  &:hover {
    .thumbnail::after {
      opacity: 1;
      visibility: visible;
    }

    .team-share-info {
      li:first-child a {
        background-color: var(--color-white);
        border-color: var(--color-white);
      }

      li {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        transform: translateY(0);

        &:nth-child(1n) {
          transition-delay: 0.2s;
        }
        &:nth-child(2n) {
          transition-delay: 0.3s;
        }
        &:nth-child(3n) {
          transition-delay: 0.4s;
        }
        &:nth-child(4n) {
          transition-delay: 0.5s;
        }
        &:hover {
          a {
            background-color: var(--color-white);
            border-color: var(--color-white);
            color: var(--color-primary);
          }
        }
      }
    }
  }
`;
