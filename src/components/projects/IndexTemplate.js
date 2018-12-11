import React from 'react';
import { Link } from 'react-router-dom';

function IndexTemplate({ project, titling }) {
  return (
    <div className="index-project">
      <Link to={`/projects/${project._id}`}>
        <div className="project-title">
          <h2>{ titling( project.title ) }</h2>
          <p>From { titling( project.from ) } to { titling( project.to ) }</p>
        </div>
        <h3>Project by { titling( project.createdBy.username ) }</h3>
      </Link>
    </div>
  );
}

export default IndexTemplate;
