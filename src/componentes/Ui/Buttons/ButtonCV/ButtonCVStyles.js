import styled from "styled-components";
export const ButtonSpecial = styled.button`
  position: relative;
  border-width: 0;
  color: rgb(19, 19, 19);
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  z-index: 1;
  transition: all 0.5s ease-in;

  .docs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    z-index: 1;
    background-color: #ffffff;
    border: solid 1px #e8e8e82d;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.555) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .download {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    z-index: -1;
    border-radius: 0px 0px 4px 4px;
    transform: translateY(0%);
    background-color: #d3d5d4;
    border: solid 1px #01e0572d;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
  }

  &:hover .download {
    transform: translateY(100%);
  }

  .download svg polyline,
  .download svg line {
    animation: docs 1s infinite;
  }

  @keyframes docs {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-15%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;
