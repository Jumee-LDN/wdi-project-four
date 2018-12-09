import React from 'react';

function ProjectDiscription( { project } ){
  return(
    <div>
      <article>
        <div className="colums">
          <h2>{project.title.toUpperCase()}</h2>
          <p>From {project.from} to {project.to}</p>
          <p>GOAL: {project.goal}</p>
          <h3>Project by {project.createdBy}</h3>
        </div>

        <div className="columns">
          <hr />
          <div className="column is-4">
            <div>
              <div>
                <h3>Remainder</h3>
                <p>{project.remainder}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="columns">
        <div className="column is-full">
          <h3>Story</h3>
          <p>{project.story}</p>
        </div>
      </div>

    </div>
  );
}

export default ProjectDiscription;
