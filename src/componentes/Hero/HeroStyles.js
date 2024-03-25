import styled from "styled-components";
export const HeroBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  background: linear-gradient(
    135deg,
    #080808 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #080808 50%,
    #080808 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: 25px 25px;
  box-shadow: inset 0 -104px 7rem #080808;
  /* Animation */
  animation: move 4s linear infinite;

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 25px 25px;
    }
  }
`;
export const HeroBoxTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
export const HeroTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  font-family: "Noto Sans JP", sans-serif;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const HeroBoxSizing = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  padding: 2rem;
  display: flex;
  // position: sticky;
  /* overflow: hidden; */
  // bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    height: fit-content;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
  }
`;
