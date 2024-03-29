import styled from "styled-components";
import { motion } from "framer-motion";
export const ProjectsBox = styled.section`
  width: 300vw;
  height: 250vh;
  display: none;
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
  @media (max-width: 2200px) {
    @media (min-width: 1000px) {
      display: flex;
    }
  }
  /* overflow-x: hidden; */
`;
export const ProjectsBoxMid = styled.section`
  width: 300vw;
  height: 250vh;
  display: none;
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
  @media (max-width: 1000px) {
    @media (min-width: 600px) {
      display: flex;
    }
  }
  /* overflow-x: hidden; */
`;
export const ProjectsBoxLg = styled.section`
  width: 300vw;
  height: 250vh;
  display: none;
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
  @media (min-width: 2200px) {
    display: flex;
    --line: 4px;
  }
  /* overflow-x: hidden; */
`;
export const ProjectsBoxMb = styled.section`
  width: 300vw;
  height: 250vh;
  display: none;
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
  @media (max-width: 600px) {
    display: flex;
  }
  /* overflow-x: hidden; */
`;
export const ProjectsBoxHorizontal = styled(motion.div)`
  width: 300vw;
  height: 100vh;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: start;
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
  @media (min-width: 2200px) {
    /* display: flex; */
    --line: 4px;
    --gap: 14em;
  }
`;
export const ProjectsBoxSizing = styled(motion.article)`
  width: 100%;
  /* max-width: 1200px; */
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
    top: 80px;
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
