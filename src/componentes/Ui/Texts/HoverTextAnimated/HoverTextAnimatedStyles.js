import styled from "styled-components";
import { motion } from "framer-motion";

export const Mask = styled(motion.div)`
  /* width: 100%;

  height: 100%; */

  display: flex;

  align-items: center;

  justify-content: center;

  color: #afa18f;

  /* font-size: 64px;

  line-height: 66px; */

  cursor: default;

  mask-image: url("https://res.cloudinary.com/ds1lnxkfc/image/upload/v1711022545/svg_figure_uazkus.svg");

  mask-repeat: no-repeat;

  mask-size: 50px;
  mask-position: 10% 10%;
  /* background: #ec4e39; */
  background: #afa18f;
  /* border: 1px solid white; */
  position: relative;
  margin-bottom: -20%;
  /* padding: 1rem; */
  color: black;
  /* p {
    font-weight: 600;
  } */
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BoxText = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  cursor: default;
`;
export const Text = styled.p`
  /* color: white; */
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Noto Sans JP", sans-serif;
`;
