import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Inner from "../../componentes/Inner/Inner";
import { BoxEffect, DoorBox, DoorMain, Title } from "./DisplayDoorStyles";
import SpaceButton from "../../componentes/Ui/Buttons/SpacedButton/SpaceButton";
import { useScroll, useTransform, useSpring } from "framer-motion";
function DisplayDoor() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  // const translate = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  // const x = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-50.5%"]), {
  //   stiffness: 300,
  //   damping: 100,
  // });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50.5%"]);

  const transformationTitle = {
    x: useTransform(scrollYProgress, [0, 1], ["125%", "525%"]),
    scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
  };
  useEffect(() => {
    const handleScroll = () => {
      const finDePagina = document.getElementById("finalDeLaPagina");
      if (finDePagina) {
        const alturaTotal = finDePagina.offsetTop + finDePagina.offsetHeight;
        if (window.pageYOffset + window.innerHeight >= alturaTotal) {
          // window.location.href = `${window.location.href}home`;
          // window.scrollTo({
          //   top: 0,
          //   behavior: "smooth",
          // });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Inner>
        <DoorMain ref={ref}>
          <DoorBox style={{ x }}>
            <BoxEffect style={{ ...transformationTitle }}>
              <Title>Bienvenido</Title>
              <Link to="/home">
                <SpaceButton>Entrar</SpaceButton>
              </Link>
            </BoxEffect>
          </DoorBox>
          <div id="finalDeLaPagina"></div>
        </DoorMain>
      </Inner>
    </>
  );
}

export default DisplayDoor;
