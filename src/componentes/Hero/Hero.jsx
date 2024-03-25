import React from "react";
import { HeroBox, HeroBoxSizing } from "./HeroStyles";
import InfoBox from "./InfoBox/InfoBox.jsx";
import PresentBox from "./PresentBox/PresentBox.jsx";

function Hero() {
  return (
    <HeroBox>
      <HeroBoxSizing>
        <PresentBox />
        <InfoBox />
      </HeroBoxSizing>
    </HeroBox>
  );
}

export default Hero;
