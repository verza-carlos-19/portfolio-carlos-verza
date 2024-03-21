import styled from "styled-components";
import { motion } from "framer-motion";
export const InnerBox = styled.div`
  background-color: black;
`;
export const Slide = styled(motion.div)`
  background-color: white;
`;
export const Page = styled(motion.div)`
  height: 100vh;

  width: 100%;

  position: relative;

  left: 0;

  top: 0;

  background-color: white;

  z-index: 1;
`;
