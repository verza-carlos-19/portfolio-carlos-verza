import React from "react";
import {
  BoxBodyText,
  BoxBodyTitle,
  BoxRowItem,
  HeroBox,
  HeroBoxSizing,
  HeroText,
  InfoBox,
  InfoBoxBody,
  InfoBoxRow,
  Presentation,
  TipInfo,
  TitleHero,
} from "./HeroStyles";
import ButtonCV from "../ButtonCV/ButtonCV";

function Hero() {
  return (
    <HeroBox>
      <HeroBoxSizing>
        <Presentation>
          <img
            src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709322543/1674562075449_dqbcc7.jpg"
            alt="portada"
          />
          <TitleHero>Full Stack Developer</TitleHero>
          <HeroText>Carlos Verza | 02/04/2005 | argentina</HeroText>
        </Presentation>
        <InfoBox>
          <InfoBoxRow>
            <BoxRowItem>
              <h3>Tecnologias:</h3>
              <ul>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468688/174854_d5quls.png"
                        width={"26px"}
                        alt="HTML"
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709469893/4202020css3htmllogosocialsocialmedia-115668_115633_basak1.png"
                        width={"26px"}
                        alt="CSS"
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468695/JavaScript-logo_kl825a.png"
                        width={"26px"}
                        alt="javascript"
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468681/React.svg_g8ix2j.png"
                        width={"30px"}
                        alt="reactJs"
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468661/2560px-Node.js_logo.svg_vqwbqb.png"
                        width={"30px"}
                        alt="NodeJs"
                      />
                    </span>
                    <span class="tooltip">intermedio</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468644/MySQL-logo_vmjwxn.png"
                        width={"30px"}
                        alt="Mysql"
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468633/Git-logo.svg_tfyzcw.png"
                        width={"30px"}
                        alt="git"
                      />
                    </span>
                    <span class="tooltip">intermedio</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468625/226777_mbsnvk.png"
                        width={"30px"}
                        alt="java"
                      />
                    </span>
                    <span class="tooltip">intermedio</span>
                  </TipInfo>
                </li>
              </ul>
            </BoxRowItem>
            <BoxRowItem>
              <h3>Idiomas:</h3>
              <ul>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468600/Bandera_de_Espa%C3%B1a.svg_jlw2dl.webp"
                        alt="español"
                        width={"28px"}
                      />
                    </span>
                    <span class="tooltip">Nativo</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468594/Flag_of_the_United_States_szvk9e.svg"
                        alt="ingles"
                        width={"33px"}
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468588/descarga_whgtfs.png"
                        alt="chino"
                        width={"28px"}
                      />
                    </span>
                    <span class="tooltip">basico</span>
                  </TipInfo>
                </li>
              </ul>
            </BoxRowItem>
            <BoxRowItem>
              <h3>Diseño:</h3>
              <ul>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468573/Adobe_Photoshop_CC_icon.svg_gx6jmo.png"
                        alt="photoshop"
                        width={"30px"}
                      />
                    </span>
                    <span class="tooltip">intermedio</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709470374/Adobe_Illustrator_CC_icon.svg_zdsolk.png"
                        alt="illustator"
                        width={"30px"}
                      />
                    </span>
                    <span class="tooltip">avanzado</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468554/Blender_logo_no_text.svg_ppuloh.png"
                        alt="blender"
                        width={"30px"}
                      />
                    </span>
                    <span class="tooltip">intermedio</span>
                  </TipInfo>
                </li>
                <li>
                  <TipInfo>
                    <span class="text">
                      <img
                        src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1709468551/Adobe_After_Effects_CC_icon.svg_kni83b.png"
                        alt="after effects"
                        width={"30px"}
                      />
                    </span>
                    <span class="tooltip">basico</span>
                  </TipInfo>
                </li>
              </ul>
            </BoxRowItem>
          </InfoBoxRow>
          <InfoBoxBody>
            <BoxBodyTitle>Sobre mi:</BoxBodyTitle>
            <BoxBodyText>
              Soy un desarrollador Full Stack especializado en MERN y diseñador
              grafico, cuento con 3 años de experiencia en el desarrollo web y
              mas de 5 años en la programación.
            </BoxBodyText>
            <ButtonCV />
          </InfoBoxBody>
        </InfoBox>
      </HeroBoxSizing>
    </HeroBox>
  );
}

export default Hero;
