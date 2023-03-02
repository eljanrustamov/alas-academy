import React from "react";
import { FeaturesStyled } from "./Features.styles";
import Certificate from '../../assets/img/svgs/Certificate'

const category_contents = [
    { icon: <Certificate/>, title: '3020', subtitle: 'Online Courses' },
    { icon: <Certificate/>, title: 'Top', subtitle: 'Instructors' },
    { icon: <Certificate/>, title: 'Online', subtitle: 'Certifications' },
    { icon: <Certificate/>, title: '6000', subtitle: 'Members' },
  ]

const Features = () => {
  return (
    <FeaturesStyled>
        <div className="container">
          <div className="features-grid-wrap">
            {category_contents.map((category, i) => (
              <div
                key={i}
                className="features-box features-style features-svg-animate"
              >
                <div className="icon">{category.icon}</div>
                <div className="content">
                  <h5 className="title">
                    <span>{category.title}</span>
                    {category.subtitle}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
    </FeaturesStyled>
  );
};

export default Features;
