import React from "react";
import { Button } from "./ButtonPrimaryStyles";

function ButtonPrimary({ children, url }) {
  return <Button onClick={() => window.open(url, "_blank")}>{children}</Button>;
}

export default ButtonPrimary;
