import React from "react";
import { CareerStyled } from "./Career.styles";
import CareerHero from "./CareerHero.component";
import CareerJobs from "./CareerJobs.component";


const Career = () => {
  return (
    <CareerStyled>
      <CareerHero />
      <CareerJobs/>
      


    </CareerStyled>
  );
};

export default Career;
