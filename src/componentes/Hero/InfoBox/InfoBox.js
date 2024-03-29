import styled from "styled-components";
import { motion } from "framer-motion";
export const InfoBoxHero = styled(motion.article)`
  width: 100%;
  max-width: 600px;
  height: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
  border: 2px solid #d4cfdb;
  box-shadow: inset 0 0 0.4rem #aaa9ad, 0 0 0.7rem #aaa9ae;
  background-color: #080808;
  color: black;
  padding: 2rem;
  transform-origin: right;
  @media (max-width: 800px) {
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.8rem;
    padding: 2rem;
    display: none;
  }
`;
export const InfoBoxHeroMb = styled(motion.article)`
  width: 100%;
  max-width: 600px;
  height: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
  border: 2px solid #d4cfdb;
  box-shadow: inset 0 0 0.4rem #aaa9ad, 0 0 0.7rem #aaa9ae;
  background-color: #080808;
  color: black;
  padding: 2rem;
  transform-origin: top;
  display: none;
  @media (max-width: 800px) {
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.8rem;
    padding: 2rem;
    /* display: block; */
  }
`;

export const InfoBoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0 1rem;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BoxRowItem = styled(motion.div)`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  h3 {
    color: #ffffff;
    font-size: 1.2rem;
    text-align: center;
    cursor: default;
    font-weight: 600;
    font-family: "Noto Sans JP", sans-serif;
  }
  li {
    color: white;
    font-size: 1rem;
    font-family: "Noto Sans JP", sans-serif;
    list-style: none;
    list-style-position: inside;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TipInfo = styled.div`
  position: relative;
  display: inline-block;

  .text {
    color: whitesmoke;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.5s;
  }

  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    cursor: default;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #4e4f4f;
    color: whitesmoke;
    padding: 5px 7px;
    border-radius: 4px;
    transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
    transform: translateX(-50%);
  }

  .text:hover {
    filter: drop-shadow(0 0 0.5rem #4e4f4f);
  }
  &:hover .tooltip {
    top: 140%;
    opacity: 1;
    visibility: visible;
    background: rgb(19, 19, 19);
    box-shadow: 0 0 7px white, inset 0 0 3px white;
    transform: translate(-50%, -5px);
    border: 2px solid white;
  }
`;
export const InfoBoxBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top;
  gap: 0.5rem;
  /* overflow: hidden; */
`;
export const BoxBodyTitle = styled.h3`
  font-size: 1.1rem;
  /* color: #ffffff; */
  font-family: "Noto Sans JP", sans-serif;
`;
export const BoxBodyText = styled.p`
  color: white;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
`;
export const BoxButtonHero = styled(motion.div)`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */
  gap: 1rem;
  margin-top: 2rem;
  transform-origin: top;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
