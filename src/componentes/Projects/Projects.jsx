import React from "react";
import { ProjectsBox, ProjectsBoxSizing, Title } from "./ProjectStyles";
import Carousel from "./Carousel/Carousel";

function Projects() {
  return (
    <>
      <ProjectsBox>
        <ProjectsBoxSizing>
          <Title>Proyectos</Title>
          <Carousel />
        </ProjectsBoxSizing>
      </ProjectsBox>
    </>
  );
}

export default Projects;
