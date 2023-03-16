import React,{useEffect} from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import { CtaAreaStyled } from "./CtaArea.styles";

const CtaArea = () => {

  return (
    <CtaAreaStyled>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="section-title"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <h2 className="title">
                Tədris proqramına qoşul, <span>beynəlxalq sertifikat</span> əldə
                edərək işə başla
              </h2>
              <CustomButton href="https://forms.gle/JWUWAPKiokezTnQA6">
                İndi qeydiyyatdan keç
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </CtaAreaStyled>
  );
};

export default CtaArea;
