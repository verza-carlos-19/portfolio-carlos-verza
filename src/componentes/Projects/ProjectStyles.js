import styled from "styled-components";
export const ProjectsBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #080808;
  background: #000000;
  --gap: 5em;
  --line: 1px;
  --color: rgba(255, 255, 255, 0.2);

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 10rem;
  @media (max-width: 768px) {
    padding: 0rem;
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  color: white;
  font-size: 2.5rem;
`;
