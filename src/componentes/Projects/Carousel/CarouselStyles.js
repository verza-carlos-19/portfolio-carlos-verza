import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerCarousel = styled(motion.article)`
  width: 400px;
  margin: auto;
  margin-bottom: 10rem;
  perspective: 1500px;
  position: relative;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    width: 225px;
  }
`;
export const CarouselCont = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  /* animation: rotar 30s infinite linear; */
  transform-style: preserve-3d;
  &:hover {
    /* animation-play-state: paused; */
  }

  & > figure:nth-child(1) {
    transform: rotateY(0deg) translateZ(292px);
  }
  & > figure:nth-child(2) {
    transform: rotateY(72deg) translateZ(292px);
  }
  & > figure:nth-child(3) {
    transform: rotateY(144deg) translateZ(292px);
  }

  & > figure:nth-child(4) {
    transform: rotateY(216deg) translateZ(292px);
  }

  & > figure:nth-child(5) {
    transform: rotateY(288deg) translateZ(292px);
  }
  @media (max-width: 768px) {
    & > figure:nth-child(1) {
      transform: rotateY(0deg) translateZ(212px);
    }
    & > figure:nth-child(2) {
      transform: rotateY(72deg) translateZ(212px);
    }
    & > figure:nth-child(3) {
      transform: rotateY(144deg) translateZ(212px);
    }

    & > figure:nth-child(4) {
      transform: rotateY(216deg) translateZ(212px);
    }

    & > figure:nth-child(5) {
      transform: rotateY(288deg) translateZ(212px);
    }
  }
  @media (max-width: 500px) {
    & > figure:nth-child(1) {
      transform: rotateY(0deg) translateZ(162px);
    }
    & > figure:nth-child(2) {
      transform: rotateY(72deg) translateZ(162px);
    }
    & > figure:nth-child(3) {
      transform: rotateY(144deg) translateZ(162px);
    }

    & > figure:nth-child(4) {
      transform: rotateY(216deg) translateZ(162px);
    }

    & > figure:nth-child(5) {
      transform: rotateY(288deg) translateZ(162px);
    }
  }

  @keyframes rotar {
    0% {
      transform: rotateX(0deg) rotateY(360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
  }
`;
