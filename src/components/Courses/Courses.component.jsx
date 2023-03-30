import React from "react";
import { CoursesStyled } from "./Courses.styles";
import { GiBrain } from "react-icons/gi";
import { GoDatabase } from "react-icons/go";
import { BsClipboardData } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { BiCodeAlt, BiCodeBlock } from "react-icons/bi";
import {NavLink} from 'react-router-dom'

const category_contents = {
  title: "Tədris Proqramlarımız",
  subtitle:
    "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore",
  category_items: [
    {
      delay: "50",
      color: "color-primary-style",
      icon: <GiBrain size={40} />,
      title: "Süni İntellekt",
      pathName:'suni-intellekt'
    },
    {
      delay: "100",
      color: "color-secondary-style",
      icon: <GoDatabase size={40} />,
      title: "Data Science",
      pathName:'data-science'
    },
    {
      delay: "150",
      color: "color-extra01-style",
      icon: <BsClipboardData size={40} />,
      title: "Data Analitika",
      pathName:'data-analitika'
    },
    {
      delay: "100",
      color: "color-extra02-style",
      icon: <MdSecurity size={40} />,
      title: "Kiber Təhlükəsizlik",
      pathName:'kiber-tehlukesizlik'
    },

    {
      delay: "100",
      color: "color-extra03-style",
      icon: <BiCodeAlt size={40} />,
      title: "Back-End Proqramlaşdırma",
      pathName:'backend-proqramlasdirma'
    },
    {
      delay: "150",
      color: "color-extra04-style",
      icon: <BiCodeBlock size={40} />,
      title: "Front-End Proqramlaşdırma",
      pathName:'frontend-proqramlasdirma'
    },
  ],
};

const { title, category_items } = category_contents;

const Courses = () => {


  return (
    <CoursesStyled id="courses">
      <div className="container">
        <div className="section-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <h2 className="title">{title}</h2>
          <span className="shape-line"></span>
          {
            // <p className="subtitle">{subtitle}</p>
          }
        </div>

        <div className="row g-5">
          {category_items.map((item) => (
            <div className="col-lg-4 col-md-6" data-sal-delay={item.delay} data-sal="slide-up" data-sal-duration="800" key={item.title}>
              <NavLink to={`/tedris-proqramlarimiz/${item.pathName}`} className={`course-item ${item.color}`} href="/">
                <div className="icon">{item.icon}</div>
                <div className="content">
                  <p>{item.title}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </CoursesStyled>
  );
};

export default Courses;
