import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const items = [];

  projects.forEach((element, index) => {
    items.push(
      <ProjectItem
        key={index}
        name={element.name}
        about={element.about}
        technologies={element.technologies}
      />
    );
  });



  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {items}
      </div>
    </div>
  );
}

export default ProjectList;
