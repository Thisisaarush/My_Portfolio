import React from "react";

// style
import {
  ProjectBossContainer,
  ProjectContainer,
  ProjectCardContainer,
  ProjectCard,
  ProjectData,
} from "./Project.style";

// projects data
import { ProjectsData } from "../../ProjectsData/ProjectsData";

// images
import ProjectModel from "../../Resources/Images/projects.png";

// blank space
import BlankSpace from "../BlankSpace/BlankSpace";

const Project = () => {
  return (
    <ProjectBossContainer id="projects">
      <BlankSpace />
      <ProjectContainer>
        <img className="project-model" src={ProjectModel} alt="project" />
        <ProjectCardContainer>
          {ProjectsData.map((data) => (
            <ProjectCard key={data.ProjectName}>
              <img
                className="project-image"
                src={data.ProjectImage}
                alt="project"
              />
              <ProjectData>
                <h2 className="project-title">{data.ProjectName}</h2>
                <p className="project-desc">{data.ProjectDescription}</p>
                <div>
                  <a
                    className="source-code"
                    href={data.ProjectSourceCode}
                    target="blank"
                  >
                    Source Code
                  </a>
                  {data.ProjectLiveSite ? (
                    <a
                      className="live-site"
                      href={data.ProjectLiveSite}
                      target="blank"
                    >
                      Live Site
                    </a>
                  ) : null}
                </div>
              </ProjectData>
            </ProjectCard>
          ))}
        </ProjectCardContainer>
      </ProjectContainer>
    </ProjectBossContainer>
  );
};

export default Project;
