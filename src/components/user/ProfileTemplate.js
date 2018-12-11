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

  console.log('user.projectsCreated.length', user.projectsCreated.length);

  return(
    <div>
      <div className="title-section">
        <h2>{user.username}'s page </h2>
      </div>
      <div>
        <div className="category-title">
          <h3>My projects</h3>
        </div>
        <div className="content-box">
          <p className="count-note">{user.projectsCreated.length} projects created</p>
          { (user.projectsCreated.length > 0) ? user.projectsCreated.map(
            project =>
              <div key={getRandomInt()} className="project-title">
                <Link to={`/projects/${project._id}`}><p>{ titling(project.title) }</p></Link>
              </div>
          )
            :
            <p className="count-note"></p>
          }
        </div>
      </div>
      <div>
        <div className="category-title">
          <h3>Supporting Projects</h3>
        </div>
        <div className="content-box">
          <p className="count-note">Supporting {user.supportedByMe.length} projects</p>
          { ( user.supportedByMe.length > 0) ?
            uniqueProjectsSupportedByMe.map(
              project =>
                <div key={getRandomInt()} className="project-title">
                  <Link to={`/projects/${project._id}`}><p>{ titling(project.title) }</p></Link>
                </div>
            )
            :
            <p className="count-note"></p>
          }
        </div>
      </div>
      <div>
        <div className="category-title">
          <h3>Projects commented by me</h3>
        </div>
        <div className="content-box">
          <p className="count-note">Commented on {user.commentedByMe.length} projects</p>
          { ( user.commentedByMe.length > 0 ) ?
            uniqueProjectsCommentedByMe.map(
              project =>
                <div key={getRandomInt()} className="project-title">
                  <Link to={`/projects/${project._id}`}><p>{ titling(project.title) }</p></Link>
                </div>
            )
            :
            <p className="count-note"></p>
          }
        </div>
      </div>
    </div>
  );
}

export default ProfileTemplate;
