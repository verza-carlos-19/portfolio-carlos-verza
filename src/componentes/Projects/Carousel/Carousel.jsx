import React from "react";
import CardProject from "./CardProject/CardProject";
import { CarouselCont, ContainerCarousel } from "./CarouselStyles";

function Carousel() {
  return (
    <>
      <ContainerCarousel>
        <CarouselCont>
          <CardProject
            img={
              "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709914117/pzqh3uuk58bp2gmo5ywr.png"
            }
            title={"Ferreteria Online"}
            text={
              "Este fue el integrador de mi curso de javascript, es un ecommerce que cuenta con tres paginas"
            }
            urlWeb={"https://fake-ecommerce-integrador.vercel.app"}
            urlCode={"https://github.com/verza-carlos-19/fake-ecommerce"}
          />
          <CardProject
            img={
              "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709914074/md0vljbqeqsyo8ciljfe.png"
            }
            title={"Ecommerce Motul"}
            text={"Esta tienda fue desarrollada para motul"}
            urlWeb={"https://landing-motul.vercel.app"}
            urlCode={"https://github.com/verza-carlos-19/landing-motul"}
          />
          <CardProject
            img={
              "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709914223/gvco5oof5l9m4v9avngw.png"
            }
            title={"VerzaDev2.0"}
            text={
              "Este fue el integrador de mi curso de diseño web, es una landing page/portfolio"
            }
            urlCode={"https://github.com/verza-carlos-19/verza-portfolio"}
            urlWeb={"https://verzadev.vercel.app"}
          />
          <CardProject
            img={
              "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709914238/cqmxotkn9kcwoffbsiiu.png"
            }
            title={"VerzaDev1.0"}
            text={
              "Esta fue una landing de mi curso de diseño web, es una estatica y fue uno de mis primeros proyectos"
            }
            urlWeb={"https://landing-page-delta-sooty.vercel.app"}
            urlCode={"https://github.com/verza-carlos-19/landing-page"}
          />
          <CardProject
            img={
              "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709914204/at51bg5ws17ichqhda56.png"
            }
            title={"Landing/Portfolio"}
            text={
              "Esta landing fue hecha con el concepto de mobile first, es una landing para el piloto Carlos Verza"
            }
            urlCode={"https://github.com/verza-carlos-19/verza-carlos-landing"}
            urlWeb={"https://carlos-verza.vercel.app"}
          />
        </CarouselCont>
      </ContainerCarousel>
    </>
  );
}

export default Carousel;
