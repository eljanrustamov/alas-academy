import React from "react";
import { CounterupStyled } from "./Counterup.styles";
import Counter from "../Counter/Counter.component";
import { Player } from "@lottiefiles/react-lottie-player";
import RocketAnim from "../../assets/img/rocket.json";


const counter_data = [
  {
    color: "color-primary",
    number: 200,
    text: "+",
    title: "Tələbə",
    decimal: 1,
  },
  {
    color: "color-secondary",
    number: 50,
    text: "+",
    title: "TƏDBİR",
    decimal: 1,
  },
  {
    color: "color-extra-1",
    number: '1000',
    text: "+",
    title: "İcma üzvü",
  },
  {
    color: "color-extra-2",
    number: 100,
    text: "%",
    title: "İşlə təmin olunma",
  },
];

const Counterup = () => {


  // console.log(counter_data[0].number);

  return (
    <CounterupStyled>
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-12 col-lg-8 position-relative py-5">
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
                {counter_data.slice(2, 4).map((el, i) => (
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
            <div className="rocket-anim-wrap" data-sal="fade" data-sal-duration="800" data-sal-delay="300">
            <Player
              autoplay
              loop
              src={RocketAnim}
              style={{ height: "250px", width: "250px" }}
            ></Player>
            </div>
          </div>
        </div>
      </div>
    </CounterupStyled>
  );
};

export default Counterup;