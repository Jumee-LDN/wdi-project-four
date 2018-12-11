import React from 'react';
import { Link } from 'react-router-dom';
import { getRandomInt, titling } from '../../lib/common';

function ProfileTemplate( { user } ){

  const allProjectsSupportedByMe = user.supportedByMe;
  const uniqueProjectsSupportedByMe = allProjectsSupportedByMe.filter(function (project) {
    return !this[project.title] && (this[project.title] = true);
  }, Object.create(null));

  const allProjectsCommentedByMe = user.commentedByMe;
  const uniqueProjectsCommentedByMe = allProjectsCommentedByMe.filter(function (project) {
    return !this[project.title] && (this[project.title] = true);
  }, Object.create(null));

  return(
    <section>
      <div>
        <h2>{user.username} page </h2>
      </div>
      <div>
        <h3>My projects</h3>
        <div>
          { user.projectsCreated && user.projectsCreated.map(
            project => {
              <div key={getRandomInt()}>
                <Link to={`/projects/${project._id}`}><p>{ titling(project.title) }</p></Link>
              </div>;
            }
          )}
        </div>
      </div>
      <div>
        <h3>Supporting Projects</h3>
        <div>
          { ( user.supportedByMe.length > 0) ?
            uniqueProjectsSupportedByMe.map(
              project =>
                <div key={getRandomInt()}>
                  <p>Supporting {user.supportedByMe.length}projects</p>
                  <Link to={`/projects/${project._id}`}><p>{ titling(project.title) }</p></Link>
                </div>
            )
            :
            <p>Supporting {user.supportedByMe.length} projects</p>
          }
        </div>
      </div>
      <div>
        <h3>Projects commented by me</h3>
        <div>
          { user.commentedByMe && uniqueProjectsCommentedByMe.map(
            project =>
              <div key={getRandomInt()}>
                <Link to={`/projects/${project._id}`}><p>{ titling(project.title) }</p></Link>
              </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileTemplate;
