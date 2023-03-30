import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton.component";

const CareerJobs = () => {
  return (
    <div className="CareerJobs">
      <div className="container">
        <div className="heading">
          <h2>
            Sənin üçün tapdığımız <span>elanlara</span> göz <br />
            gəzdir!
          </h2>
          <div className="shape-line" />
        </div>

        <div className="row mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="job-item">
              <div className="header">
                <h5 className="name">UI/UX Designer</h5>
                <p>
                  <span className="price">3000-4500 ₼</span> (Fully Remote)
                </p>
              </div>
              <ul className="body">
                <li>
                  <h6>Tələblər:</h6>
                  <p>
                    Est elementum cras consectetur viverra. Mauris, potenti
                    gravida dignissim eget nullam. Tincidunt molestie laoreet
                    nunc sed et integer proin...
                  </p>
                </li>
                <li>
                  <h6>Şirkət:</h6>
                  <p>Baku elektroniks</p>
                </li>
              </ul>
              <div className="footer">
                <CustomButton>CV göndər</CustomButton>
                <CustomButton
                  backgroundColor="var(--color-body-2)"
                  hoveredBackgroundColor="lightgray"
                  color="var(--color-header)"
                >
                  Elana Bax
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="job-item">
              <div className="header">
                <h5 className="name">UI/UX Designer</h5>
                <p>
                  <span className="price">3000-4500 ₼</span> (Fully Remote)
                </p>
              </div>
              <ul className="body">
                <li>
                  <h6>Tələblər:</h6>
                  <p>
                    Est elementum cras consectetur viverra. Mauris, potenti
                    gravida dignissim eget nullam. Tincidunt molestie laoreet
                    nunc sed et integer proin...
                  </p>
                </li>
                <li>
                  <h6>Şirkət:</h6>
                  <p>Baku elektroniks</p>
                </li>
              </ul>
              <div className="footer">
                <CustomButton>CV göndər</CustomButton>
                <CustomButton
                  backgroundColor="var(--color-body-2)"
                  hoveredBackgroundColor="lightgray"
                  color="var(--color-header)"
                >
                  Elana Bax
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="job-item">
              <div className="header">
                <h5 className="name">UI/UX Designer</h5>
                <p>
                  <span className="price">3000-4500 ₼</span> (Fully Remote)
                </p>
              </div>
              <ul className="body">
                <li>
                  <h6>Tələblər:</h6>
                  <p>
                    Est elementum cras consectetur viverra. Mauris, potenti
                    gravida dignissim eget nullam. Tincidunt molestie laoreet
                    nunc sed et integer proin...
                  </p>
                </li>
                <li>
                  <h6>Şirkət:</h6>
                  <p>Baku elektroniks</p>
                </li>
              </ul>
              <div className="footer">
                <CustomButton>CV göndər</CustomButton>
                <CustomButton
                  backgroundColor="var(--color-body-2)"
                  hoveredBackgroundColor="lightgray"
                  color="var(--color-header)"
                >
                  Elana Bax
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <CustomButton
          backgroundColor="#fff"
          hoveredBackgroundColor="lightgray"
          color="var(--color-header)"
        >
          Daha çox elana bax
        </CustomButton>
      </div>
    </div>
  );
};

export default CareerJobs;
