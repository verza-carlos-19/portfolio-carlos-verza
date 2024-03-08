import styled from "styled-components";
export const Button = styled.button`
  padding: 10px;
  border-radius: 8px;
  margin: 5px;
  background: black;
  border: 2px solid black;
  color: white;
  transition: all 0.7s ease-in-out;
  &:hover {
    background: transparent;
    border: 2px solid black;
    color: black;
  }
`;
