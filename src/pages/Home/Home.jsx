import React from "react";
import Hero from "../../componentes/Hero/Hero";
import Projects from "../../componentes/Projects/Projects";
import Inner from "../../componentes/Inner/Inner";

function Home() {
  return (
    <>
      <Inner>
        <Hero />
        <Projects />
      </Inner>
    </>
  );
}

export default Home;
