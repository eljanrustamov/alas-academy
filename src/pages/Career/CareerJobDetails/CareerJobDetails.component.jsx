import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton.component";

import { CareerJobDetailsStyled } from "./CareerJobDetails.styles";

const CareerJobDetails = () => {
  return (
    <CareerJobDetailsStyled>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="main-content">
              <h1 className="header job-name">UI/UX Designer</h1>

              <div className="content">
                <h5 className="title">Responsibilities:</h5>
                <ul className="">
                  <li>
                    • Analysis of current technologies used within the company
                    and ways to improve them
                  </li>
                  <li>
                    • Finding and documenting solutions to business requirements
                  </li>
                  <li>
                    • Defining the shape and structure of the applications, and
                    how they interact with each other
                  </li>
                  <li>
                    • Considering how solutions will scale and how they will be
                    maintained
                  </li>
                  <li>• Managing the risk in third-party dependencies</li>
                  <li>• Managing the complexity of the solution</li>
                </ul>
              </div>

              <div className="content">
                <h5 className="title">What do we offer?:</h5>
                <ul className="">
                  <li>
                    • Challenging work and the opportunity to develop large,
                    business-critical international systems
                  </li>
                  <li>
                    • Flexible working conditions as long as you're there for
                    your team members
                  </li>
                  <li>
                    • A place in our office in the Telliskivi Creative City,
                    with excellent coffee and fruits
                  </li>
                  <li>
                    • Work in an inspiring atmosphere flooded with humor and
                    with awesome people
                  </li>
                  <li>
                    • We will welcome you into our A-team, where you can learn
                    from the brightest minds in
                  </li>
                  <li>
                    • the industry and work with colleagues from 27+ different
                    nationalities
                  </li>
                  <li>• Competitive salary together with a benefits package</li>
                </ul>
              </div>

              <div className="content">
                <h5 className="title">What you need to succeed in the role?</h5>
                <p>
                  An outstanding solution architect should have comprehensive
                  development and architecture experience to fulfill these
                  tasks. A solution architect works with our clients and
                  customers, product teams, and management to identify business
                  requirements, define the best service architecture to
                  implement these requirements, to monitor and verify that the
                  implementation matches the expectations. A good solution
                  architect needs to have significant skills to work with both
                  people and also processes. To succeed, you should:
                  <br />
                  <br />
                  <br />
                  <ul>
                    <li>• Be proactive and forthcoming</li>
                    <li>
                      • Able to negotiate a solution with various groups of
                      people
                    </li>
                    <li>
                      • Able to understand and explain complex problems to all
                      stakeholders in simple terms
                    </li>
                    <li>• Be an agile leader</li>
                  </ul>
                  <br />
                  An architect should guide and coordinate the development teams
                  to achieve a business goal rather than building ivory towers.
                  The ideal candidate should:
                  <br />
                  <br />
                  <ul>
                    <li>
                      • Have extensive experience in developing IT and cloud
                      infrastructure
                    </li>
                    <li>
                      • Have a degree in Computer Science or Software
                      Engineering
                    </li>
                    <li>•Speak and write fluent English</li>
                    <li>
                      • Know software analysis, architecture, development,
                      testing, security, and operations
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="left-side">
              <div className="job-card">
                <div>
                  <h5 className="job-name">UI/UX Designer</h5>
                  <p className="info">
                    <span>3000-4500 ₼</span> (Fully Remote)
                  </p>
                </div>
                <div>
                  <CustomButton>CV göndər</CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CareerJobDetailsStyled>
  );
};

export default CareerJobDetails;
