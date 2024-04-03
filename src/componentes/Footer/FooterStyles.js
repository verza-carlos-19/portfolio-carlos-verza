import styled from "styled-components";
import { motion } from "framer-motion";
export const FooterBox = styled(motion.footer)`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
  box-shadow: 0 0 3rem black;
  padding-bottom: 0.1rem;
  overflow: hidden;
`;
export const BoxEffect = styled(motion.div)`
  gap: 5px;
  /* position: absolute; */
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: white;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.2rem;
  }
`;

export const FooterImg = styled.img`
  width: 17.5%;
  z-index: 5;
  @media (max-width: 768px) {
    width: 30%;
  }
`;
