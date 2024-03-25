import styled from "styled-components";
import { motion } from "framer-motion";
export const Presentation = styled(motion.article)`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  border: 2px solid #d4cfdb;
  box-shadow: inset 0 0 0.7rem #626065, 0px 0px 0.5rem white;
  background-color: #080808;
  color: black;
  padding: 1.5rem;
  &:hover {
    box-shadow: inset 0 0 1rem #626065, 0px 0px 1rem white;
  }

  /* animation: rgb 50s infinite; */
  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 15px 149px 1rem -146px #ffffff, -85px 105px 1rem -101px #24243d,
      77px 139px 1rem -133px #24243d, 1px 1px 0.6rem #d76a6a;
  }
`;

export const TitleHero = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.8rem;
  transition: all 0.5s ease-in-out;
  /* font-family: "Black Ops One", system-ui; */
  font-family: "Noto Sans JP", sans-serif;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
export const HeroText = styled.p`
  color: white;
  text-align: center;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  font-family: "Noto Sans JP", sans-serif;
  &:hover {
    cursor: default;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
