import React, { useEffect } from "react";
import About from "../components/About/About.component";
import Counterup from "../components/Counterup/Counterup.component";
import Courses from "../components/Courses/Courses.component";
import CtaArea from "../components/CtaArea/CtaArea.component";
import Features from "../components/Features/Features.component";
import Hero from "../components/Hero/Hero.component";
import Partners from "../components/Partners/Partners.component";
import Team from "../components/Team/Team.component";
import Testimonials from "../components/Testimonials/Testimonials.component";
// sal animation
import sal from "sal.js";
import "../assets/scss/default/_sal.scss";

//
import { Helmet } from "react-helmet";
const Main = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <Helmet>
        <title>Əsas Səhifə - Alas Academy</title>
      </Helmet>
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
