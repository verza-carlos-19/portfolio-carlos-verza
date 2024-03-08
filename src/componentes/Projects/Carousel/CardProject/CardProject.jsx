import React from "react";
import {
  Card,
  CardContent,
  CardTech,
  CardText,
  CardTitle,
} from "./CardProjectStyles";
import ButtonPrimary from "../../../Ui/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../../Ui/Buttons/ButtonSecondary/ButtonSecondary";

function CardProject({ img, title, text, urlWeb, urlCode }) {
  return (
    <>
      <Card>
        <img src={img} alt={title} />
        <CardContent className="card__content">
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
          <ButtonPrimary url={urlWeb}>visita la web</ButtonPrimary>
          <ButtonSecondary url={urlCode}>mira el codigo</ButtonSecondary>
          <CardTech>
            <img
              src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468688/174854_d5quls.png"
              width={"26px"}
              alt="HTML"
            />
            <img
              src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709469893/4202020css3htmllogosocialsocialmedia-115668_115633_basak1.png"
              width={"26px"}
              alt="CSS"
            />
            <img
              src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468695/JavaScript-logo_kl825a.png"
              width={"26px"}
              alt="javascript"
            />
          </CardTech>
        </CardContent>
      </Card>
    </>
  );
}

export default CardProject;
