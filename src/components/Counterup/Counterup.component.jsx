import React from "react";
import { CounterupStyled } from "./Counterup.styles";
import Counter from "../Counter/Counter.component";

const counter_data = [
  {
    color: "color-primary",
    number: 45.2,
    text: "K",
    title: "Student Enrolled",
    decimal: 1,
  },
  {
    color: "color-secondary",
    number: 32.4,
    text: "K",
    title: "Class Completed",
    decimal: 1,
  },
  {
    color: "color-extra-1",
    number: 354,
    text: "+",
    title: "Top Instructors",
  },
  {
    color: "color-extra-2",
    number: 100,
    text: "%",
    title: "Satisfaction Rate",
  },
];

const Counterup = () => {

  console.log(counter_data[0].number)

  return (
    <CounterupStyled>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="counterup-box-wrap">
              <div className="counterup-box">
                {counter_data.slice(0, 2).map((el, i) => (
                  <div key={i} className="counterup">
                    <h2 className={`counter-item ${el.color}`}>
                      <span className="odometer">
                        <Counter
                          number={parseFloat(el.number)}
                          text={el.text}
                          decimal={el.decimal}
                        />
                      </span>
                    </h2>
                    <h6 className="title">{el.title}</h6>
                  </div>
                ))}
              </div>
              <div className="counterup-box">
                {counter_data.slice(2,4).map((el, i) => (
                  <div key={i} className="counterup">
                    <h2 className={`counter-item ${el.color}`}>
                      <span className="odometer">
                        <Counter
                          number={parseFloat(el.number)}
                          text={el.text}
                          decimal={el.decimal}
                        />
                      </span>
                    </h2>
                    <h6 className="title">{el.title}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CounterupStyled>
  );
};

export default Counterup;

// <div className="counterup">
//                   <h2 className="counter-item">
//                     <span className="odometer">
//                       <span>99.9</span>
//                       <span>K</span>
//                     </span>
//                   </h2>
//                   <h6 className="title">Student Enrolled</h6>
//                 </div>
