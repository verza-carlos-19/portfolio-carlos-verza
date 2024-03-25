import styled from "styled-components";
// export const Card = styled.figure`
export const Card = styled.figure`
  position: absolute;
  width: 400px;
  aspect-ratio: 16/9;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s ease-in-out;
  &:hover {
    scale: 1.2;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  &:hover .card__content {
    transform: translateY(0);
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    width: 225px;
  }
`;
export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: translateY(100%);
  opacity: 0;
  transform-origin: bottom;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.7px);
  -webkit-backdrop-filter: blur(3.7px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: all 0.6s ease-in-out;
`;
export const CardTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: black;
  font-weight: 700;
`;
export const CardText = styled.p`
  margin: 10px 0 10px;
  font-size: 12px;
  color: black;
  line-height: 1.4;
`;
export const CardTech = styled.div`
  display: flex;
  gap: 5px;
  img {
    width: 20px;
  }
`;
