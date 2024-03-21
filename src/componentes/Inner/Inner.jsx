import React from "react";
import { motion } from "framer-motion";
import {
  opacity,
  perspective,
  slide,
} from "../../Utils/Animations/AnimationsInner";
import { InnerBox, Page, Slide } from "./InnerStyles";

const anim = (variants) => {
  return {
    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants,
  };
};
function Inner({ children }) {
  return (
    <InnerBox>
      <Slide {...anim(perspective)} />

      <Page {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </Page>
    </InnerBox>
  );
}

export default Inner;
