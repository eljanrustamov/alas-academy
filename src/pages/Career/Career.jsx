import React from "react";
import { CareerStyled } from "./Career.styles";
import CareerHero from "./CareerHero.component";
import CareerJobs from "./CareerJobs.component";
import CareerGraduates from "./CareerGraduates.component";
import CareerJobiBot from "./CareerJobiBot.component";
import CareerJobDetails from "./CareerJobDetails/CareerJobDetails.component";

const Career = () => {
  return (
    <CareerStyled>
      {
        // <CareerHero />
        // <CareerJobs />
        // <CareerGraduates />
        // <CareerJobiBot/>
        // <CareerJobs />
      }
      <CareerJobDetails />
    </CareerStyled>
  );
};

export default Career;
