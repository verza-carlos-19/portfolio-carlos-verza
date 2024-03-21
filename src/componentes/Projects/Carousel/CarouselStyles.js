import styled from "styled-components";
export const ContainerCarousel = styled.article`
  width: 400px;
  margin: auto;
  margin-bottom: 10rem;
  perspective: 1500px;
  position: relative;
  @media (max-width: 768px) {
    scale: 0.58;
  }
`;
export const CarouselCont = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotar 30s infinite linear;
  transform-style: preserve-3d;
  &:hover {
    animation-play-state: paused;
  }

  & > figure:nth-child(1) {
    transform: rotateY(0deg) translateZ(282px);
  }
  & > figure:nth-child(2) {
    transform: rotateY(72deg) translateZ(282px);
  }
  & > figure:nth-child(3) {
    transform: rotateY(144deg) translateZ(282px);
  }

  & > figure:nth-child(4) {
    transform: rotateY(216deg) translateZ(282px);
  }

  & > figure:nth-child(5) {
    transform: rotateY(288deg) translateZ(282px);
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
