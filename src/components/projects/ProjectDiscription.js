import React from 'react';

function ProjectDiscription( { project } ){
  return(
    <div className="columns">
      <div className="column is-6">
        <h2>{project.title.toUpperCase()}</h2>
        <p>From {project.from} to {project.to}</p>
        <p>GOAL: {project.goal}</p>
        <h3>Project by {project.createdBy}</h3>
      </div>
      <hr />

      <div className="column is-6">
        <div>
          <div>
            <h3>Remainder</h3>
            <p>{project.remainder}</p>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectDiscription;
