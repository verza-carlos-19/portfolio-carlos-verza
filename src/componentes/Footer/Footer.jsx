import React, { useRef } from "react";
import { BoxEffect, FooterBox, FooterImg, FooterText } from "./FooterStyles";
import { useScroll, useTransform, useSpring } from "framer-motion";
function Footer({ scroll }) {
  const translate = useTransform(scroll, [0.7, 0.9], [1000, 0]);
  const opac = useTransform(scroll, [0.85, 0.9], [0, 1]);

  const opacity = useSpring(opac, { stiffness: 300, damping: 100 });
  const translateX = useSpring(translate, { stiffness: 500, damping: 250 });
  const transforma = {
    opacity,
    translateX,
  };
  return (
    <>
      <FooterBox>
        <BoxEffect style={{ ...transforma }}>
          <FooterImg
            src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709322511/Recurso_1_sfheyt.svg"
            alt="logo"
          />
          <FooterText>
            website design by Carlos Verza 2024 Copyright all rights reserved
          </FooterText>
        </BoxEffect>
      </FooterBox>
    </>
  );
}

export default Footer;
