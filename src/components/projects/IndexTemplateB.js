import React from 'react';
import { Link } from 'react-router-dom';

function IndexTemplate({ project, titling }) {
  return (
    <div className="index-project">
      <Link to={`/projects/${project._id}`}>
        <p className="caption">I also want to be</p>
        <div className="project-title">
          <h2 className="job-title">{ titling( project.to ) }</h2>
        </div>
        <h4><span className="project-by">Project by</span> { titling( project.createdBy.username ) }</h4>
      </Link>
    </div>
  );
}

export default IndexTemplate;
