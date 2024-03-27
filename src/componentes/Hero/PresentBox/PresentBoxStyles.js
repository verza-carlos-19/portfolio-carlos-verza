import styled from "styled-components";
import { motion } from "framer-motion";
export const Presentation = styled(motion.article)`
  position: relative;
  transform-style: preserve-3d;
  width: 100%;
  height: 500px;
  max-width: 400px;
  /* ----------------------------front----------------------------- */

  .cara {
    position: absolute;
    border-radius: 5px;
    box-shadow: inset 0 0 1rem #626065;
    /* box-shadow: inset 0 0 1rem white */
  }

  .front {
    /* background-color: blanchedalmond; */
    width: 100%;
    height: 100%;
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
  }
  .back {
    /* background-color: rgb(255, 157, 11); */
    border: 2px solid white;
    width: 100%;
    height: 100%;
    transform: translateZ(-50px);
    border: 2px solid white;
    box-shadow: inset 0 0 1rem #626065;
    backdrop-filter: blur(2px);
  }
  .top {
    /* background-color: rgb(27, 137, 189); */
    width: 100%;
    height: 50px;
    top: 0;
    transform-origin: top;
    transform: translateZ(-50px) rotateX(90deg);
    /* border: 2px solid white; */
    backdrop-filter: blur(4px);
  }
  .bottom {
    /* background-color: green; */
    width: 100%;
    height: 50px;
    bottom: 0;
    transform-origin: bottom;
    transform: translateZ(-50px) rotateX(-90deg);
    /* border: 2px solid white; */
    backdrop-filter: blur(4px);
  }
  .left {
    /* background-color: kgray; */
    width: 50px;
    height: 100%;
    left: 0;
    transform-origin: left;
    transform: translateZ(-50px) rotateY(-90deg);
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    backdrop-filter: blur(4px);
  }
  .right {
    /* background-color: yellow; */
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    width: 50px;
    height: 100%;
    right: 0;
    transform-origin: right;
    transform: translateZ(-50px) rotateY(90deg);
    backdrop-filter: blur(4px);
  }

  &:hover > .front {
    box-shadow: inset 0 0 1rem #626065, 0px 0px 1rem white;
  }

  /* animation: rgb 50s infinite; */
  .front > img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 15px 149px 1rem -146px #ffffff, -85px 105px 1rem -101px #24243d,
      77px 139px 1rem -133px #24243d, 1px 1px 0.6rem #d76a6a;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const PresentationMb = styled(motion.article)`
  display: none;
  position: relative;
  transform-style: preserve-3d;
  width: 100%;
  height: 500px;
  max-width: 400px;
  /* ----------------------------front----------------------------- */

  .cara {
    position: absolute;
    border-radius: 5px;
    box-shadow: inset 0 0 1rem #626065;
    /* box-shadow: inset 0 0 1rem white */
  }

  .front {
    /* background-color: blanchedalmond; */
    width: 100%;
    height: 100%;
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
  }
  .back {
    /* background-color: rgb(255, 157, 11); */
    border: 2px solid white;
    width: 100%;
    height: 100%;
    transform: translateZ(-50px);
    border: 2px solid white;
    box-shadow: inset 0 0 1rem #626065;
    backdrop-filter: blur(2px);
  }
  .top {
    /* background-color: rgb(27, 137, 189); */
    width: 100%;
    height: 50px;
    top: 0;
    transform-origin: top;
    transform: translateZ(-50px) rotateX(90deg);
    /* border: 2px solid white; */
    backdrop-filter: blur(4px);
  }
  .bottom {
    /* background-color: green; */
    width: 100%;
    height: 50px;
    bottom: 0;
    transform-origin: bottom;
    transform: translateZ(-50px) rotateX(-90deg);
    /* border: 2px solid white; */
    backdrop-filter: blur(4px);
  }
  .left {
    /* background-color: kgray; */
    width: 50px;
    height: 100%;
    left: 0;
    transform-origin: left;
    transform: translateZ(-50px) rotateY(-90deg);
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    backdrop-filter: blur(4px);
  }
  .right {
    /* background-color: yellow; */
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    width: 50px;
    height: 100%;
    right: 0;
    transform-origin: right;
    transform: translateZ(-50px) rotateY(90deg);
    backdrop-filter: blur(4px);
  }

  &:hover > .front {
    box-shadow: inset 0 0 1rem #626065, 0px 0px 1rem white;
  }

  /* animation: rgb 50s infinite; */
  .front > img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 15px 149px 1rem -146px #ffffff, -85px 105px 1rem -101px #24243d,
      77px 139px 1rem -133px #24243d, 1px 1px 0.6rem #d76a6a;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

export const TitleHero = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.8rem;
  transition: all 0.5s ease-in-out;
  cursor: default;
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
