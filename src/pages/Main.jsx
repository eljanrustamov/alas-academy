import React from "react";
import About from '../components/About/About.component';
import Counterup from '../components/Counterup/Counterup.component';
import Courses from '../components/Courses/Courses.component';
import CtaArea from '../components/CtaArea/CtaArea.component';
import Features from '../components/Features/Features.component';
import Hero from '../components/Hero/Hero.component';
import Partners from '../components/Partners/Partners.component';
import Team from '../components/Team/Team.component';
import Testimonials from '../components/Testimonials/Testimonials.component';


const Main = () => {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Courses />
      <Counterup />
      <Team />
      <CtaArea />
      <About />
      <Testimonials />
    </>
  );
};

export default Main;
