import styled from "styled-components";
export const LogoDinamic = styled.div`
  width: 500px;
  img {
    transition: all 0.5s ease-in-out;
    position: absolute;
  }
  .img-primary {
    opacity: 1;
    transform: rotateY("90deg");
  }

  .img-secondary {
    opacity: 0;
    transform: rotateY("-90deg");
  }
  &:hover {
    .img-primary {
      opacity: 0;
      transform: rotateY("90deg");
    }
    .img-secondary {
      opacity: 1;
      transform: rotateY("0");
    }
  }
`;
