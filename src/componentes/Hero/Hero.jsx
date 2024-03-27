import React, { useRef } from "react";
import { HeroBox, HeroBoxSizing } from "./HeroStyles";
import InfoBox, { InfoBoxMb } from "./InfoBox/InfoBox.jsx";
import PresentBox, { PresentBoxMb } from "./PresentBox/PresentBox.jsx";
import { useScroll } from "framer-motion";
function Hero({ scroll }) {
  return (
    <HeroBox>
      <HeroBoxSizing>
        <PresentBox scroll={scroll} />
        <PresentBoxMb scroll={scroll} />
        <InfoBox scroll={scroll} />
        <InfoBoxMb scroll={scroll} />
      </HeroBoxSizing>
    </HeroBox>
  );
}

export default Hero;
