import React, { useRef } from "react";
import {
  ProjectsBox,
  ProjectsBoxHorizontal,
  ProjectsBoxLg,
  ProjectsBoxMb,
  ProjectsBoxMid,
  ProjectsBoxSizing,
  Title,
} from "./ProjectStyles";
import Carousel from "./Carousel/Carousel";
import { useScroll, useTransform, useSpring } from "framer-motion";
function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translate = useTransform(scrollYProgress, [0, 0.1, 0.7], [250, 10, 0]);
  const translateY = useSpring(translate, { stiffness: 300, damping: 100 });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -2500]);
  const x = useSpring(translateX, { stiffness: 300, damping: 200 });
  const translateXB = useTransform(scrollYProgress, [0, 1], [-1300, 1200]);
  const translateXBox = useSpring(translateXB, {
    stiffness: 300,
    damping: 200,
  });

  const scl = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    [4.5, 1.5, 2, 2.5]
  );
  const scale = useSpring(scl, { stiffness: 300, damping: 200 });
  const transform = {
    translateY,
    scale,
  };
  return (
    <>
      <ProjectsBox ref={ref}>
        <ProjectsBoxHorizontal style={{ x }}>
          <ProjectsBoxSizing style={{ x: translateXBox }}>
            <Title style={{ ...transform }}>Proyectos</Title>
            <Carousel scroll={scrollYProgress} />
          </ProjectsBoxSizing>
        </ProjectsBoxHorizontal>
      </ProjectsBox>
    </>
  );
}
export function ProjectsMb() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translate = useTransform(scrollYProgress, [0, 0.1, 0.7], [250, 10, 60]);
  const translateY = useSpring(translate, { stiffness: 300, damping: 100 });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x = useSpring(translateX, { stiffness: 300, damping: 200 });
  const translateXB = useTransform(scrollYProgress, [0, 1], [-380, 220]);
  const translateXBox = useSpring(translateXB, {
    stiffness: 300,
    damping: 200,
  });

  const scl = useTransform(scrollYProgress, [0, 0.1, 0.7, 1], [4.5, 4, 3, 4]);
  const scale = useSpring(scl, { stiffness: 300, damping: 200 });
  const transform = {
    translateY,
    scale,
  };
  return (
    <>
      <ProjectsBoxMb ref={ref}>
        <ProjectsBoxHorizontal style={{ x }}>
          <ProjectsBoxSizing style={{ x: translateXBox }}>
            <Title style={{ ...transform }}>Proyectos</Title>
            <Carousel scroll={scrollYProgress} />
          </ProjectsBoxSizing>
        </ProjectsBoxHorizontal>
      </ProjectsBoxMb>
    </>
  );
}
export function ProjectsLg() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translate = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7],
    [350, 100, 200]
  );
  const translateY = useSpring(translate, { stiffness: 300, damping: 100 });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -2500]);
  const x = useSpring(translateX, { stiffness: 300, damping: 200 });
  const translateXB = useTransform(scrollYProgress, [0, 1], [-2600, -100]);
  const translateXBox = useSpring(translateXB, {
    stiffness: 300,
    damping: 200,
  });

  const scl = useTransform(scrollYProgress, [0, 0.1, 0.7, 1], [8, 5.5, 5, 6.5]);
  const scale = useSpring(scl, { stiffness: 300, damping: 200 });
  const transform = {
    translateY,
    scale,
  };
  return (
    <>
      <ProjectsBoxLg ref={ref}>
        <ProjectsBoxHorizontal style={{ x }}>
          <ProjectsBoxSizing style={{ x: translateXBox }}>
            <Title style={{ ...transform }}>ProyectosLg</Title>
            <Carousel scroll={scrollYProgress} />
          </ProjectsBoxSizing>
        </ProjectsBoxHorizontal>
      </ProjectsBoxLg>
    </>
  );
}
export function ProjectsMid() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translate = useTransform(scrollYProgress, [0, 0.1, 0.7], [250, 10, 0]);
  const translateY = useSpring(translate, { stiffness: 300, damping: 100 });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x = useSpring(translateX, { stiffness: 300, damping: 200 });
  const translateXB = useTransform(scrollYProgress, [0, 1], [-800, 300]);
  const translateXBox = useSpring(translateXB, {
    stiffness: 300,
    damping: 200,
  });

  const scl = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    [4.5, 1.5, 2, 2.5]
  );
  const scale = useSpring(scl, { stiffness: 300, damping: 200 });
  const transform = {
    translateY,
    scale,
  };
  return (
    <>
      <ProjectsBoxMid ref={ref}>
        <ProjectsBoxHorizontal style={{ x }}>
          <ProjectsBoxSizing style={{ x: translateXBox }}>
            <Title style={{ ...transform }}>Proyectos</Title>
            <Carousel scroll={scrollYProgress} />
          </ProjectsBoxSizing>
        </ProjectsBoxHorizontal>
      </ProjectsBoxMid>
    </>
  );
}

export default Projects;
