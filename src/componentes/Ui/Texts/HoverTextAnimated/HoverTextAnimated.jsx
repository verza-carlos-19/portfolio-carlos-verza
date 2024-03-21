import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import useMousePosition from "../../../../hooks/useMousePosition";
import { BoxText, Mask, Text } from "./HoverTextAnimatedStyles";
function HoverTextAnimated({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const elemento = document.getElementById("miElemento");

  const { x, y } = useMousePosition();

  const reX = isHovered ? x - elemento.getBoundingClientRect().left : x;
  const reY = isHovered ? y - elemento.getBoundingClientRect().top : -60;
  const size = isHovered ? 100 : 50;

  return (
    <>
      <Mask
        id="miElemento"
        animate={{
          WebkitMaskPosition: `${reX - size / 2}px ${reY - size / 3}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <Text
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {children}
        </Text>
      </Mask>
      <BoxText>
        <Text>{children}</Text>
      </BoxText>
    </>
  );
}

export default HoverTextAnimated;
