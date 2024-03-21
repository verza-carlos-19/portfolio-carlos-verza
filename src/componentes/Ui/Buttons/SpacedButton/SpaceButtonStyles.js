import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonSpace = styled(motion.button)`
  border: none;
  border-bottom: 3px solid white;
  font-size: 1.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 500;
  padding: 10px 20px;
  background: none;
  color: white;
  &::after {
    content: "";
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0px;
    background: white;
    display: block;
    transition: all 0.5s ease-in-out;
  }
  &::before {
    content: "";
    position: relative;
    left: 0;
    display: block;
    width: 0;
    right: 0;
    bottom: 0;
    height: 0px;
    background: white;
    transition: all 0.5s ease-in-out;
  }
  &:hover::before {
    content: "";
    position: relative;
    left: -25%;
    /* right: 0; */
    bottom: -65px;
    width: 150%;
    height: 3px;
    background: white;
    transition: all 0.5s ease-in-out;
    /* width: fit-content; */
    display: block;
  }
  &:hover::after {
    content: "";
    position: relative;
    left: 0;
    right: 0;
    bottom: -46px;
    display: block;
    height: 3px;
    background: white;
    transition: all 0.5s ease-in-out;
  }
`;
