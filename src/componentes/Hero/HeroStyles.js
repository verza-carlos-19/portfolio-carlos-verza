import styled from "styled-components";
export const HeroBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const HeroBoxSizing = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  padding: 2rem;
  display: flex;
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
export const Presentation = styled.article`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
  border: 2px solid #d4cfdb;
  box-shadow: inset 0 0 0.7rem #626065, 0px 0px 0.5rem white;
  background-color: #080808;
  color: black;
  padding: 1.5rem;
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

export const InfoBox = styled.article`
  width: 100%;
  max-width: 600px;
  height: 375px;
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
  @media (max-width: 768px) {
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.8rem;
    padding: 2rem;
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
export const BoxRowItem = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  h3 {
    color: #ffffff;
    font-size: 1.2rem;
    text-align: center;
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
    border-color: transparent transparent #4e4f4f transparent;
    transform: translateX(-50%);
  }

  .text:hover ~ .tooltip {
    top: 140%;
    opacity: 1;
    visibility: visible;
    background: #4e4f4f;
    transform: translate(-50%, -5px);
  }
`;
export const InfoBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const BoxBodyTitle = styled.h3`
  font-size: 1.1rem;
  color: #ffffff;
  font-family: "Noto Sans JP", sans-serif;
`;
export const BoxBodyText = styled.p`
  color: white;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
`;
