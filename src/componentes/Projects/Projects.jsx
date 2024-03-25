import React, { useRef } from "react";
import { ProjectsBox, ProjectsBoxSizing, Title } from "./ProjectStyles";
import Carousel from "./Carousel/Carousel";
import { useScroll, useTransform, useSpring } from "framer-motion";
function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translate = useTransform(scrollYProgress, [0, 0.1, 0.7], [250, 0, -20]);
  const translateY = useSpring(translate, { stiffness: 300, damping: 100 });

  const scl = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    [4.5, 1.5, 2, 2.5]
  );
  const scale = useSpring(scl, { stiffness: 300, damping: 100 });
  const transform = {
    translateY,
    scale,
  };
  return (
    <>
      <ProjectsBox ref={ref}>
        <ProjectsBoxSizing>
          <Title style={{ ...transform }}>Proyectos</Title>
          <Carousel scroll={scrollYProgress} />
        </ProjectsBoxSizing>
      </ProjectsBox>
    </>
  );
}

export default Projects;
