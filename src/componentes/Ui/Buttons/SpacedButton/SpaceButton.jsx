import React from "react";
import { ButtonSpace } from "./SpaceButtonStyles";

function SpaceButton({ children, url }) {
  return (
    <>
      <ButtonSpace>{children}</ButtonSpace>
    </>
  );
}

export default SpaceButton;
