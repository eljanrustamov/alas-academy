import React from "react";
import { FeaturesStyled } from "./Features.styles";
import Graduate from '../../assets/img/graduate.png'
import CommunitySupportPNG from '../../assets/img/community-support.png'
import InternationalCertificatePNG from '../../assets/img/international-certificate.png'
import RemotePNG from '../../assets/img/remote-working.png'

const category_contents = [
    { icon: Graduate, title: '+ 100', subtitle: 'Məzun' },
    { icon: InternationalCertificatePNG, title: 'Beynəlxalq', subtitle: 'Sertifikatlar' },
    { icon: RemotePNG, title: 'Remote', subtitle: 'iş imkanı' },
    { icon: CommunitySupportPNG, title: 'İcma', subtitle: 'dəstəyi' },
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
                <div className="icon">
                  <img src={category.icon} alt={category.subtitle}/>
                </div>
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
