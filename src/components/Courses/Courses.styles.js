import styled from "styled-components";

export const CoursesStyled = styled.div`
  /* height: 600px; */
  padding: 115px 0 120px;
  background-color: var(--color-body-2);

  .section-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    .title {
      margin-bottom: 4px;
      font-size: 36px;
      font-weight: bold;
    }

    .shape-line {
    }

    .subtitle {
      margin-top: 15px;
      color: var(--color-body);
      text-align: center;
    }
  }

  .course-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    padding: 16px 30px;
    border-radius: 5px;
    transition: 0.3s all;
    cursor: pointer;

    .icon {
      color: var(--color-header);
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1;

      a {
        color: var(--color-header);
      }
    }

    &:hover {
      .icon,
      .content a {
        color: var(--color-white) !important;
      }
    }

    &.color-primary-style {
      background-color: rgba(248, 184, 31, 0.07);
      .icon {
        color: #f8b81f;
      }
      &:hover {
        background-color: rgba(248, 184, 31, 1);
      }
    }
    &.color-secondary-style {
      background-color: rgba(57, 192, 250, 0.07);
      .icon {
        color: #39c0fa;
      }
      &:hover {
        background-color: #39c0fa;
      }
    }
    &.color-extra01-style {
      background-color: rgba(14, 205, 115, 0.07);

      .icon {
        color: #1ab69d;
      }

      &:hover {
        background-color: rgba(14, 205, 115, 1);
      }
    } 
    &.color-extra02-style {
      background-color: rgba(142, 86, 255, 0.07);
      .icon {
        color: #5866eb;
      }
      &:hover {
        background-color: rgba(142, 86, 255, 1);
      }
    }
    &.color-extra03-style {
      background-color: rgba(249, 37, 150, 0.07);

      .icon{
        color:#f92596;
      }
      &:hover {
        background-color: rgba(249, 37, 150, 1);
      }
    }
    &.color-extra04-style {
      background-color: rgba(88, 102, 235, 0.07);

      .icon{
        color:#8e56ff;
      }
      &:hover {
        background-color: rgba(88, 102, 235, 1);
      }
    }
  }
`;
