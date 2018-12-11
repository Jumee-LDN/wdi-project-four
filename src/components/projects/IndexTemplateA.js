import React from 'react';
import { Link } from 'react-router-dom';

function IndexTemplate({ project, titling }) {
  return (
    <Link to={`/projects/${project._id}`}>
      <div className="index-project">
        <p className="caption">Now I am</p>
        <div className="project-title">
          <h2 className="job-title">{ titling( project.from ) }</h2>
        </div>
        <h4><span className="project-by">Project by</span> { titling( project.createdBy.username ) }</h4>
      </div>
    </Link>
  );
}

export default IndexTemplate;
