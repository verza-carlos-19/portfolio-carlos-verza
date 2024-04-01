import React, { useRef } from "react";
import Hero from "../../componentes/Hero/Hero";
import Projects, {
  ProjectsLg,
  ProjectsMb,
  ProjectsMid,
} from "../../componentes/Projects/Projects";
import Inner from "../../componentes/Inner/Inner";
import Footer from "../../componentes/Footer/Footer";
import { useScroll } from "framer-motion";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <Inner>
        <Hero scroll={scrollYProgress} />
        <Projects />
        {/* <ProjectsMb />
        <ProjectsLg />
        <ProjectsMid /> */}
        <Footer scroll={scrollYProgress} />
      </Inner>
    </>
  );
}

export default Home;
