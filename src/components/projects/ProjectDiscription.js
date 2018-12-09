import React from 'react';

function ProjectDiscription( { project } ){
  return(
    <div>
      <article>

        <div className="project-title-container">
          <div className="project-title">
            <h2>{project.title}</h2>
            <p><span className="italic">Project by</span> {project.createdBy}</p>
          </div>
          <div className="from-to">
            <div className="from-container">
              <p><span className="italic">From</span><br />{project.from}</p>
            </div>
            <div className="to-container">
              <p><span className="italic">to</span><br/>{project.to}</p>
            </div>
          </div>
        </div>

        <div className="goal-remainder">
          <div className="goal-container">
            <p><span className="italic">Goal</span><br />{project.goal}</p>
          </div>

          <div className="remainder-container">
            <p><span className="italic">Remainder</span><br/>{project.remainder}</p>
          </div>
        </div>

      </article>

      <div className="story-container">
        <div className="title-section">
          <h3>Story</h3>
        </div>
        <div className="story-content">
          <p>{project.story}</p>
        </div>
      </div>

    </div>
  );
}

export default ProjectDiscription;
