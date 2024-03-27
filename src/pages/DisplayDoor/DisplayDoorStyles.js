import styled from "styled-components";
import { motion } from "framer-motion";
export const DoorMain = styled.main`
  height: 250vh;
  position: relative;

  #finalDeLaPagina {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
  }
`;
export const BoxEffect = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #080808;
  gap: 2rem;
  flex-direction: column;
`;
export const DoorBox = styled(motion.section)`
  width: 200vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #080808;
  gap: 2rem;
  flex-direction: column;
  position: sticky;
  top: 0;
  box-shadow: inset -25px 0px 2rem white;
`;
export const Title = styled(motion.h1)`
  color: white;
  text-align: center;
  width: fit-content;
  font-size: 4rem;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const particle = styled.div``;
