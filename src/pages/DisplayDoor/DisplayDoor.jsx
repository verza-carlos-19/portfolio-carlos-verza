import React from "react";
import { Link } from "react-router-dom";
import Inner from "../../componentes/Inner/Inner";
import { DoorBox, Title } from "./DisplayDoorStyles";
import SpaceButton from "../../componentes/Ui/Buttons/SpacedButton/SpaceButton";

function DisplayDoor() {
  return (
    <>
      <Inner>
        <DoorBox>
          <Title>Bienvenido</Title>
          <Link to="/home">
            <SpaceButton>Entrar</SpaceButton>
          </Link>
        </DoorBox>
      </Inner>
    </>
  );
}

export default DisplayDoor;
