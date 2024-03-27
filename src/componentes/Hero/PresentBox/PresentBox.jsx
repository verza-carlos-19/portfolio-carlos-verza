import React, { useRef } from "react";
import {
  HeroText,
  Presentation,
  PresentationMb,
  TitleHero,
} from "./PresentBoxStyles";
import { useTransform, useSpring } from "framer-motion";
function PresentBox({ scroll }) {
  const translateX = useTransform(scroll, [0, 0.1], [300, 0]);
  // const translateX = useSpring(translate, { stiffness: 1000, damping: 100 });
  const rotateY = useTransform(scroll, [0, 0.1, 0.2], [0, 360, 390]);
  // const rotate = useTransform(scroll, [0.05, 0.1], [0, 360]);
  // const rotateY = useSpring(rotate, { stiffness: 500, damping: 100 });
  const scale = useTransform(scroll, [0, 0.05], [1.2, 1]);
  // const scl = useTransform(scroll, [0, 0.05], [1.2, 1]);
  // const scale = useSpring(scl, { stiffness: 500, damping: 100 });

  const transforma = {
    translateX,
    scale,
    rotateY,
  };

  return (
    <>
      <Presentation style={{ ...transforma }}>
        <div class="cara front">
          <img
            src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709322543/1674562075449_dqbcc7.jpg"
            alt="portada"
            loading="lazy"
          />
          <TitleHero>Full Stack Developer</TitleHero>
          <HeroText>Carlos Verza | 02/04/2005 | argentino</HeroText>
        </div>
        <div class="cara back"></div>
        <div class="cara top"></div>
        <div class="cara bottom"></div>
        <div class="cara left"></div>
        <div class="cara right"></div>
      </Presentation>
    </>
  );
}
export function PresentBoxMb({ scroll }) {
  const translateY = useTransform(scroll, [0, 0.1], [50, 0]);
  // const translateX = useSpring(translate, { stiffness: 1000, damping: 100 });
  const rotateX = useTransform(scroll, [0, 0.2, 0.5], [0, -5, -15]);
  // const rotate = useTransform(scroll, [0.05, 0.1], [0, 360]);
  // const rotateY = useSpring(rotate, { stiffness: 500, damping: 100 });
  const scale = useTransform(scroll, [0, 0.2], [1, 0.9]);
  // const scl = useTransform(scroll, [0, 0.05], [1.2, 1]);
  // const scale = useSpring(scl, { stiffness: 500, damping: 100 });

  const transforma = {
    translateY,
    scale,
    rotateX,
  };

  return (
    <>
      <PresentationMb style={{ ...transforma }}>
        <div class="cara front">
          <img
            src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709322543/1674562075449_dqbcc7.jpg"
            alt="portada"
            loading="lazy"
          />
          <TitleHero>Full Stack Developer</TitleHero>
          <HeroText>Carlos Verza | 02/04/2005 | argentino</HeroText>
        </div>
        <div class="cara back"></div>
        <div class="cara top"></div>
        <div class="cara bottom"></div>
        <div class="cara left"></div>
        <div class="cara right"></div>
      </PresentationMb>
    </>
  );
}

export default PresentBox;
