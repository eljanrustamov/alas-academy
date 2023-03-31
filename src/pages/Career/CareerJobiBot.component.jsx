import React from 'react'
import JobibotPNG from "../../assets/img/jobi-bot.png";
import CustomButton from "../../components/CustomButton/CustomButton.component";

const CareerJobiBot = () => {
  return (
    <div className="CareerJobiBot">
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-md-row">
            <div className="col-md-6 mt-5 mt-lg-0">
              <div className="content">
                <h1 className="title">
                  İş tapmaq <span>Jobi Bot</span> ilə artıq daha rahatdır!
                </h1>
                <div className="shape-line" />
                <p>
                  Dignissim tellus elementum rhoncus neque accumsan. Duis
                  suscipit at venenatis tincidunt lectus. Facilisis varius
                  lobortis mollis facilisis.
                </p>
                <CustomButton>İndi yoxla</CustomButton>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-start">
              <div className="img-banner d-flex justify-content-center">
                <img src={JobibotPNG} alt="jobi-bot" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CareerJobiBot