import React, { useState, useEffect, useRef } from "react";
import { CourseDetailsStyled } from "./CourseDetails.styles";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import ContentFImg from "../../assets/img/about-main.jpg";
import { useParams } from "react-router-dom";

const CourseDetails = () => {

  const {courseName} = useParams()
  console.log(courseName)

  const [vantaEffect, setVantaEffect] = useState(0);  
  const headingRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: headingRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe1532f,
          shininess: 73.0,
          waveHeight: 5.0,
          waveSpeed: 0.75,
          zoom: 1.73,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  return (
    <CourseDetailsStyled>
      <div className="heading-wrapper" ref={headingRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-11">
              <h1 className="title">
                Suni İntellekt dərslərimiz ilə sahənin mütəxəssisi ol!
              </h1>
              <p className="instructor">by Farid Badalov</p>
            </div>
          </div>
        </div>
      </div>
      <div className="course-details-content-wrapper">
        <div className="container">
          <div className="row mb-5 flex-column-reverse flex-lg-row-reverse">
            <div className="col-lg-8">
              <div className="cf-content content-first">
                <h2 className="cf-title">Suni intellekt nədir?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inc idid unt ut labore et dolore magna
                  aliqua enim ad minim veniam, quis nostrud exerec tation
                  ullamco laboris nis aliquip commodo consequat duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur enim ipsam.
                  <br />
                  <br />
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-start">
              <div className="cf-gallery-wrapper">
                <img src={ContentFImg} alt="from ai course" />
              </div>
            </div>
          </div>

          <div className="row mt-5 flex-column-reverse flex-lg-row">
            <div className="col-lg-7">
              <div className="cf-content content-second">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inc idid unt ut labore et dolore magna
                  aliqua enim ad minim veniam, quis nostrud exerec tation
                  ullamco laboris nis aliquip commodo consequat duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur enim ipsam.
                  <br />
                  <br />
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-start">
              <h2 className="cf-title">
                Nə üçün Suni İntellekt?
              </h2>
            </div>
          </div>

          {
            // <div className="row mt-5 flex-column-reverse flex-lg-row">
            //   <div className="col-lg-8">
            //     <div className="content-first">
            //       <h2 className="cf-title">Nə üçün Suni intellekt?</h2>
            //       <p>
            //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            //         do eiusmod tempor inc idid unt ut labore et dolore magna
            //         aliqua enim ad minim veniam, quis nostrud exerec tation
            //         ullamco laboris nis aliquip commodo consequat duis aute irure
            //         dolor in reprehenderit in voluptate velit esse cillum dolore
            //         eu fugiat nulla pariatur enim ipsam.
            //         <br />
            //         <br />
            //         Excepteur sint occaecat cupidatat non proident sunt in culpa
            //         qui officia deserunt mollit anim id est laborum. Sed ut
            //         perspiciatis unde omnis iste natus error sit voluptatem
            //         accusantium doloremque laudantium totam rem aperiam.
            //       </p>
            //     </div>
            //   </div>
            //   <div className="col-lg-4 d-flex justify-content-end">
            //     <div className="cf-gallery-wrapper">
            //       <img src={ContentFImg} alt="from ai course" />
            //     </div>
            //   </div>
            // </div>
          }
        </div>
      </div>
    </CourseDetailsStyled>
  );
};

export default CourseDetails;
