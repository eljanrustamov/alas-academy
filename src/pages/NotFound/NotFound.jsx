import React from "react";
import { NotFoundStyled } from "./NotFound.styles";
import { Player } from "@lottiefiles/react-lottie-player";
import PageNotFoundAnim from '../../assets/img/page-not-found.json'

const NotFound = () => {
  return (
    <NotFoundStyled>
      <Player
        autoplay
        loop
        src={PageNotFoundAnim}
        style={{ height: "450px", width: "450px" }}
      ></Player>
      <p>Axtardığınız səhifə tapılmadı, xahiş edirik yenidən cəhd edin.</p>
    </NotFoundStyled>
  );
};

export default NotFound;
