import React from "react";
import { CareerStyled } from "./Career.styles";
import CareerHero from "./CareerHero.component";
import CareerJobs from "./CareerJobs.component";
import CareerGraduates from "./CareerGraduates.component";


const Career = () => {
  return (
    <CareerStyled>
      <CareerHero />
      <CareerJobs />
      <CareerGraduates/>

    </CareerStyled>
  );
};

export default Career;
