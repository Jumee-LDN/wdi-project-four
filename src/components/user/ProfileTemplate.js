import React from 'react';

function ProfileTemplate( { user } ){
  return(
    <section>
      <div>
        <h2>{user.username} page </h2>
      </div>
      <div>
        <h3>My projects</h3>
        <div>
          { user.projectsCreated && user.projectsCreated.map(
            project =>
              <div key="placeholder">
                <p>{ project.title }</p>
              </div>
          )}
        </div>
      </div>
      <div>
        <h3>Supporting Projects</h3>
        <div>
          { ( user.supportedByMe.length > 0) ?
            user.supportedByMe.map(
              project =>
                <div key="placeholder">
                  <p>Supporting {user.supportedByMe.length}projects</p>
                  <p>{ project.title }</p>
                </div>
            )
            :
            <p>Supporting {user.supportedByMe.length}projects</p>
          }
        </div>
      </div>
      <div>
        <h3>Projects commented by me</h3>
        <div>
          { user.commentedByMe && user.commentedByMe.map(
            project =>
              <div key="placeholder">
                <p>{ project.title }</p>
              </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileTemplate;
