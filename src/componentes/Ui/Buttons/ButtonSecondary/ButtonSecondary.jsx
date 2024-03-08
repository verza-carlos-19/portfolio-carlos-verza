import React from "react";
import { Button } from "./ButtonSecondaryStyles";

function ButtonSecondary({ children, url }) {
  return <Button onClick={() => window.open(url, "_blank")}>{children}</Button>;
}

export default ButtonSecondary;
