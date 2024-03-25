import React, { useRef } from "react";
import { HeroText, Presentation, TitleHero } from "./PresentBoxStyles";
import { useScroll } from "framer-motion";
function PresentBox() {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["0 0", "0.7 0"],
  });
  const scrollMove = scrollYProgress;
  return (
    <>
      <Presentation ref={ref} style={{}}>
        <img
          src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709322543/1674562075449_dqbcc7.jpg"
          alt="portada"
          loading="lazy"
        />
        <TitleHero>Full Stack Developer</TitleHero>
        <HeroText>Carlos Verza | 02/04/2005 | argentino</HeroText>
      </Presentation>
    </>
  );
}

export default PresentBox;
