import React from "react";

function ProjectItem({ name, about, technologies }) {
  const items = [];
  for (var i =0; i<technologies.length; i++){
    items.push(
      <span key={i}>{technologies[i]}</span>
    );
  }
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {items}
      </div>
    </div>
  );
}

export default ProjectItem;
