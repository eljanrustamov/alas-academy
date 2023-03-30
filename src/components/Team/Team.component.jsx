import React from "react";
import TeamInstructor from "../TeamInstructor/TeamInstructor.component";
import { TeamStyled } from "./Team.styles";
import { FaLinkedinIn } from "react-icons/fa";
import Instructor01 from "../../assets/img/instructor-frontend.jpeg";
import Instructor02 from "../../assets/img/instructor-backend.jfif";
import Instructor03 from "../../assets/img/instructor-data.jfif";
import Instructor04 from "../../assets/img/instructor-ai.jfif";

const instructors_data = [
  {
    id: 1,
    img: Instructor01 ,
    social_links: [
      // { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      // { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/in/farid-badalov/",
        target: "_blank",
        icon: <FaLinkedinIn size={18} />,
      },
    ],
    name: "Farid Badalov",
    title: "Front-End Developer",
    delay: "50",
  },
  {
    id: 2,
    img: Instructor02,

    social_links: [
      // {
      //   link: "http://facebook.com",
      //   target: "_blank",
      //   icon: <FaFacebookF size={18} />,
      // },
      // {
      //   link: "http://twitter.com",
      //   target: "_blank",
      //   icon: <FaTwitter size={18} />,
      // },
      {
        link: "https://www.linkedin.com/in/fakhri-afrasiyab/",
        target: "_blank",
        icon: <FaLinkedinIn size={18} />,
      },
    ],
    name: "Fəxri Əfrasiyab",
    title: "Back-End (Java) Developer",
    delay: "100",
  },
  {
    id: 3,
    img: Instructor03,

    social_links: [
      // {
      //   link: "http://facebook.com",
      //   target: "_blank",
      //   icon: <FaFacebookF size={18} />,
      // },
      // {
      //   link: "http://twitter.com",
      //   target: "_blank",
      //   icon: <FaTwitter size={18} />,
      // },
      {
        link: "https://www.linkedin.com/in/amina-kazimova-2462321b7/",
        target: "_blank",
        icon: <FaLinkedinIn size={18} />,
      },
    ],
    name: "Əminə Kazımova",
    title: "Data Analitika",
    delay: "150",
  },
  {
    id: 4,
    img: Instructor04,

    social_links: [
      // {
      //   link: "http://facebook.com",
      //   target: "_blank",
      //   icon: <FaFacebookF size={18} />,
      // },
      // {
      //   link: "http://twitter.com",
      //   target: "_blank",
      //   icon: <FaTwitter size={18} />,
      // },
      {
        link: "https://www.linkedin.com/in/toghrul-tahirov/",
        target: "_blank",
        icon: <FaLinkedinIn size={18} />,
      },
    ],
    name: "Toğrul Tahırov",
    title: "Süni İntellekt",
    delay: "200",
  },
];

const Team = () => {
  return (
    <TeamStyled id="instructors">
      <div className="container">
        <div
          className="section-title"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">MÜƏLLİMLƏR</span>
          <h2 className="title">Kursumuzun müəllimləri</h2>
          <div className="shape-line"></div>
        </div>

        <div className="row g-5">
          {instructors_data.slice(0, 4).map((instructor) => (
            <div
              key={instructor.id}
              className="col-lg-3 col-sm-6 col-12"
              data-sal-delay="100"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <TeamInstructor instructor={instructor} />
            </div>
          ))}
        </div>
      </div>
    </TeamStyled>
  );
};

export default Team;
