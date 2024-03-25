import React, { useRef } from "react";
import CardProject from "./CardProject/CardProject";
import { CarouselCont, ContainerCarousel } from "./CarouselStyles";
import { useTransform, useSpring } from "framer-motion";
function Carousel({ scroll }) {
  const rotate = useTransform(scroll, [0, 0.95], [72, -720]);
  const rotateY = useSpring(rotate, { stiffness: 500, damping: 75 });
  const translate = useTransform(scroll, [0, 0.1], [300, 0]);
  const translateY = useSpring(translate, { stiffness: 300, damping: 100 });
  const scl = useTransform(scroll, [0.6, 1], [1, 1.3]);
  const scale = useSpring(scl, { stiffness: 1000, damping: 100 });
  const opac = useTransform(scroll, [0, 0.1], [0, 1]);
  const opacity = useSpring(opac, { stiffness: 500, damping: 100 });
  const transform = {
    translateY,
    scale,
    opacity,
  };

  return (
    <>
      <ContainerCarousel style={{ ...transform }}>
        <CarouselCont
          style={{ rotateY }}
          // onChange={() => console.log(scroll)}
          onClick={() => console.log(scroll)}
        >
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
            scroll={scroll}
            deg={0}
          />
          <CardProject
            img={
              "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709914074/md0vljbqeqsyo8ciljfe.png"
            }
            title={"Ecommerce Motul"}
            text={"Esta tienda fue desarrollada para motul"}
            urlWeb={"https://landing-motul.vercel.app"}
            urlCode={"https://github.com/verza-carlos-19/landing-motul"}
            scroll={scroll}
            deg={72}
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
            scroll={scroll}
            deg={144}
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
            scroll={scroll}
            deg={216}
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
            scroll={scroll}
            deg={288}
          />
        </CarouselCont>
      </ContainerCarousel>
    </>
  );
}

export default Carousel;
