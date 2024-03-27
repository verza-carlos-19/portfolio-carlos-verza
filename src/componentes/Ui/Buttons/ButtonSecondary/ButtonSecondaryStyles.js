import styled from "styled-components";
export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  background: transparent;
  font-weight: 600;
  border: 2px solid white;
  color: white;
  transition: all 0.7s ease-in-out;
  &:hover {
    background: black;
    border: 2px solid black;
    color: white;
  }
`;
