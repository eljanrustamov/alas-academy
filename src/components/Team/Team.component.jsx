import React from "react";
import TeamInstructor from "../TeamInstructor/TeamInstructor.component";
import { TeamStyled } from "./Team.styles";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Instructor01 from "../../assets/img/team-01.webp";

const instructors_data = [
  {
    id: 1,
    img: "../../assets/img/team-01.webp",
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Jane Seymour",
    title: "UI Designer",
    delay: "50",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 2,
    img: {Instructor01},

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Edward Norton",
    title: "Web Developer",
    delay: "100",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 3,
    img: {Instructor01},

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Penelope Cruz",
    title: "Digital Marketer",
    delay: "150",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 4,
    img: {Instructor01},

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "John Travolta",
    title: "Wordpress Expert",
    delay: "200",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 5,
    img: {Instructor01},

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Susan White",
    title: "Wordpress Expert",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 6,
    img: {Instructor01},

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Connie Comerford",
    title: "Web Developer",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 7,
    img: {Instructor01},

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Hilary Swank",
    title: "Digital Marketer",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
  {
    id: 8,
    img: "team-08.webp",

    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: <FaFacebookF size={18}/> },
      { link: "http://twitter.com", target: "_blank", icon: <FaTwitter size={18}/> },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: <FaLinkedinIn size={18}/>,
      },
    ],
    name: "Michael Douglas",
    title: "Designer",
    sm_text: "Consectetur adipisicing elit, sed do eius mod tempor incididunt",
  },
];

const Team = () => {
  return (
    <TeamStyled>
      <div className="container">
        <div className="section-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <span className="pre-title">Instructors</span>
          <h2 className="title">Course Instructors</h2>
          <div className="shape-line"></div>

        </div>

        <div className="row g-5">
          {instructors_data.slice(0, 4).map((instructor) => (
            <div key={instructor.id} className="col-lg-3 col-sm-6 col-12" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
              <TeamInstructor instructor={instructor} />
            </div>
          ))}
        </div>
      </div>
    </TeamStyled>
  );
};

export default Team;
