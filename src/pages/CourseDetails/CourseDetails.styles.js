import styled from "styled-components";

export const CourseDetailsStyled = styled.div`
  margin-bottom: 100px;

  .heading-wrapper {
    padding: 120px 0;
    color: var(--color-white);
    margin-bottom: 100px;

    @media (max-width: 565px) {
    }
  }

  .course-details-content {
    .image-wrapper {
      max-width: 976px;

      img {
        max-width: 100%;
      }
    }

    .tabs-wrapper {
      margin-top: 50px;
      font-family: var(--font-primary);

      .react-tabs {
        text-align: center;
        //tabs-head
        .react-tabs__tab-list {
          display: flex;
          justify-content: center;
          border-bottom: 1px solid var(--color-border);
          .react-tabs__tab {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 0;
            font-family: var(--font-secondary);
            font-weight: 600;
            color: var(--color-body);
            /* padding: 10px 20px 10px 10px; */
            padding: 15px 5px;
            margin: 0 15px;

            .icon {
              color: var(--color-primary);
              margin-right: 5px;
              transform: translateX(-10px);
              opacity: 0;
              transition: 0.3s all;
            }

            &::after {
              content: "";
              width: 0;
              height: 2px;
              background: var(--color-primary);
              position: absolute;
              left: 0;
              bottom: 0;
              transition: 0.4s;
              opacity: 0;
              border-radius: 6px;
            }

            &:hover {
              /* color: var(--color-primary); */
              .icon {
                transform: translateX(0px);
                opacity: 1;
              }

              &::after {
                width: 100%;
                opacity: 1;
              }
            }

            &--selected {
              /* color: var(--color-primary); */

              .icon {
                opacity: 1;
                transform: translateX(0);
              }

              &::after {
                width: 100%;
                opacity: 1;
              }
            }
          }

          @media (max-width: 767px) {
            .react-tabs__tab {
              width: 25%;
            }
          }

          @media (max-width: 616px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .react-tabs__tab {
              width: 50%;
            }
          }
        }

        // tabs-body
        .react-tabs__tab-panel {
          text-align: left;
          padding: 40px 0;
          //#1 tab
          .description-tab-wrapper {
            .title {
              font-family: var(--font-secondary);
              font-weight: 600 !important;
              margin-bottom: 20px;
              font-size: 24px;
            }
            p {
              line-height: 1.73;
              padding-right: 20px;
              color: var(--color-body);
            }
          }

          // tab
          .curriculum-tab-wrapper {
            .heading-title {
              font-weight: 600;
              margin-bottom: 20px;
            }

            p {
              color: var(--color-body);
            }

            ul {
              margin: 30px 0 !important;
              font-weight: 500;
              font-size: 18px;
              font-family: var(--font-secondary);

              li {
                font-weight: 400;
                padding-left: 20px !important;
                margin-bottom: 5px;
                font-size: 15px;
                font-family: var(--font-primary);

                svg {
                  margin-right: 5px;
                  color: var(--color-primary);
                }

                &:first-child {
                  margin-top: 10px;
                }
              }
            }
          }

          //#2 tab
          .advantages-tab-wrapper {
            .heading-title {
              font-weight: 600;
              margin-bottom: 20px;
            }
            .subtitle {
              color: var(--color-body);
              margin-bottom: 60px !important;
            }

            .advantages-list {
              .advantage-item {
                margin-bottom: 40px;
                h6 {
                  display: flex;
                  align-items: center;
                  font-weight: 600;
                  svg {
                    margin-right: 5px;
                    color: var(--color-primary);
                  }
                }
                p {
                  padding-left: 30px;
                  color: var(--color-body);
                  margin-bottom: 5px !important;
                }
              }
            }
          }

          // tab
          .certificates-tab-wrapper {
            .certificate-box {
              display: flex;
              align-items: center;
              border-radius: 5px;
              box-shadow: 0 10px 30px 0 rgb(0 0 0 / 5%);
              padding: 60px 50px 55px;
              background-color: var(--color-white);
              margin-bottom: 30px;
              transition: 0.3s all;

              .icon-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--color-white);
                /* width: 90px; */
                height: 90px;
                margin-bottom: 25px;

                img{
                  height: 100%;
                }
              }

              .content {
                p {
                  font-size: 15px;
                  color: var(--color-body);
                }
              }
            }
          }

          // tab
          .instructors {
            .instructor {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 50px;
              .thumbnail-wrapper {
                position: relative;
                min-width: 170px;
                cursor: pointer;
                margin-right: 20px;

                img {
                  height: 100%;
                  width: 100%;
                  border-radius: 8px;
                }

                .instructor-social {
                  width: 100%;
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  display: flex;
                  justify-content: center;

                  a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    border: 1px solid var(--color-white);
                    border-radius: 50%;
                    color: var(--color-white);
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.3s all;

                    &:hover {
                      background-color: var(--color-white);
                      color: var(--color-primary);
                    }
                  }
                }

                &::before {
                  display: block;
                  content: "";

                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: var(--color-primary-2);
                  border-radius: 8px;
                  opacity: 0;
                  visibility: hidden;
                  transition: 0.3s all;
                }

                &:hover {
                  .instructor-social a {
                    opacity: 1;
                    visibility: visible;
                  }

                  &::before {
                    visibility: visible;
                    opacity: 1;
                  }
                }
              }

              .content-wrapper {
                .title {
                  font-family: var(--font-secondary);
                  font-size: 20px;
                  font-weight: 600;
                  margin-bottom: 5px;
                }
                .subtitle {
                  display: block;
                  font-size: 15px;
                  font-family: var(--font-primary);
                  color: var(--color-body);
                  margin-bottom: 20px;
                }

                p {
                  font-size: 15px;
                  line-height: 1.73;
                  color: var(--color-body);
                  /* padding-right:40px; */
                }
              }
            }
          }
        }
      }
    }
  }

  .course-details-sidebar {
    font-family: var(--font-primary);

    .widget-box {
      width: 100%;
      /* background-color: #f9f9f9; */
      color: #000;
      font-family: var(--font-primary);
      padding: 35px 25px;
      margin-bottom: 30px;
      box-shadow: 0px 10px 50px 0px rgb(26 46 85 / 7%);

      @media (max-width: 991px) {
        margin-top: 30px;
        margin-bottom: 0;
      }

      .title {
        font-weight: 600;
      }
    }

    .course-features {
      h5 {
        font-family: var(--font-primary);
        margin-bottom: 16px;
      }

      .features-list {
        margin-bottom: 30px !important;

        .feature {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-primary);
          font-size: 15px;
          border-bottom: 1px solid var(--color-border);
          padding: 15px;
          /* margin-bottom: 30px; */

          span {
            display: flex;
            align-items: center;
            svg {
              margin-right: 15px;
            }
          }
        }
      }

      a {
        width: 100%;
        cursor: pointer;
      }
    }

    /* .course-features {
      .features-list {
        .feature {
          margin: 10px 0;
          font-size: 15px;

          span {
            color: var(--color-primary);
          }
        }
      }
    } */

    .course-certification {
      .certificate-item {
        display: flex;
        align-items: center;
        margin-top: 30px;
        .image-wrapper {
          max-width: 80px;
          /* margin-top: 20px; */
          img {
            max-width: 100%;
          }
        }
        .text {
          font-size: 14px;
          color: var(--color-black);
          padding-left: 5px;
        }
      }

      /* .text {
        font-size: 14px;
        color: var(--color-black);
      }

       .image-wrapper {
        max-width: 243px;
        margin-top: 20px;
        img {
          max-width: 100%;
        }
      } */
    }

    .other-courses {
      .courses-list {
        margin-top: 25px !important;
        .course {
          display: flex;
          margin-top: 20px;

          img {
            height: 60px;
          }
          .course-info {
            padding: 0 10px;
            font-size: 15px;

            span {
              color: var(--color-primary);
            }
          }
        }
      }
    }
  }
`;
