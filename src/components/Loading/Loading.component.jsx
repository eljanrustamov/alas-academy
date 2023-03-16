import React from "react";
import { LoadingStyled } from "./Loading.styles";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="spinner" />
    </LoadingStyled>
  );
};

export default Loading;
