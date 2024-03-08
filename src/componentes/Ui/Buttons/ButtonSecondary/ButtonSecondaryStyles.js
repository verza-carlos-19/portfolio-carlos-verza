import styled from "styled-components";
export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid black;
  color: black;
  transition: all 0.7s ease-in-out;
  &:hover {
    background: black;
    border: 2px solid black;
    color: white;
  }
`;
