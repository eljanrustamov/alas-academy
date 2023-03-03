import { useState } from "react";
import { CounterStyled } from "./Counter.styles";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = ({ number, text, decimal }) => {
  const [focus, setFocus] = useState(false);

  const visibleChangeHandler = (isVisible) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };

  return (
    <CounterStyled>
      <CountUp
        start={focus ? 0 : null}
        end={number}
        duration={3}
        decimal={decimal ? decimal : null }
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView) => visibleChangeHandler(inView)}
            >
              {text && <span>{text}</span>}
            </InView>
          </div>
        )}
      </CountUp>
    </CounterStyled>
  );
};

export default Counter;
