import React from "react";
import { TeamInstructorStyled } from "./TeamInstructor";
import {TfiSharethis} from 'react-icons/tfi'

const TeamInstructor = ({ instructor }) => {

  return (
    <TeamInstructorStyled className="edu-team-grid team-style-1">
        <div className="thumbnail-wrap">
          <div className="thumbnail">
              <img
                src={instructor.img}
                alt="team images"
              />
          </div>
          <ul className="team-share-info">
            <li>
              <a href="/">
              <TfiSharethis size={15}/>
              </a>
            </li>
            {instructor.social_links.map((social, i) => (
              <li key={i}>
                <a
                  href={social.link}
                  target={social.target ? social.target : ""}
                >
                {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h5 className="title">
            {instructor.name}
          </h5>
          <span className="designation">{instructor.title}</span>
        </div>
    </TeamInstructorStyled>
  );
};

export default TeamInstructor;
