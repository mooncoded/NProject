import React from "react";
import { Container } from "./styles";
import MainPage from "../../components/MainPage";
import AboutRow from "../../components/AboutRow";
import AboutUs from "../../components/AboutUs";
import Techs from "../../components/Techs";
import Support from "../../components/Support";
import SpecialSupport from "../../components/SpecialSupport";

function Main() {
  return (
    <Container>
      <MainPage />
      <AboutRow titleservices/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <AboutUs imageleft/>
      <Techs work/>
      {/* <SpecialSupport /> */}
      <Support allsupport copyright/>
    </Container>
  );
}

export default Main;
