import styled from "styled-components";
import { motion } from "framer-motion";
export const ProjectsBox = styled.section`
  width: 100%;
  height: 250vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background: #080808;
  background: #000000;
  --gap: 5em;
  --line: 1px;
  --color: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 0 50px black, inset 0 0 129px black, inset 0 0 50px black,
    0 0 50px black, 0 0 71px black;
  background-image: linear-gradient(
      -90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    ),
    linear-gradient(
      0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    );
  background-size: var(--gap) var(--gap);
`;
export const ProjectsBoxSizing = styled.article`
  width: 100%;
  max-width: 1200px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  position: sticky;
  top: 50px;
  padding: 2rem;
  margin-bottom: 10rem;
  @media (max-width: 768px) {
    padding: 0rem;
  }
`;
export const Title = styled(motion.h2)`
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  color: white;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
