import React from 'react';
import { Link } from 'react-router-dom';

function IndexTemplate({ project }) {
  return (
    <div>
      <Link to={`/projects/${project._id}`}>
        <div>
          <h2>{project.title}</h2>
          <p>From {project.from} to {project.to}</p>
        </div>
        <h3>Prject by {project.createdBy}</h3>
      </Link>
    </div>
  );
}

export default IndexTemplate;