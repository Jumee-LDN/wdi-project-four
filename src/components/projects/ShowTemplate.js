import React from 'react';

function ShowTemplate( { project} ){

  console.log(project);
  return(
    <div className="columns is-multiline">
      <div>
        <div>
          <h2>{project.title.toUpperCase()}</h2>
          <p>From {project.from} to {project.to}</p>
          <p>GOAL: {project.goal}</p>
          <h3>Prject by {project.createdBy}</h3>
        </div>
        <hr />
        <div>
          <h3>Remainder</h3>
          <p>{project.remainder}</p>
        </div>
        <div>
          <p>Comments</p>
          <div>
            {project.comments && project.comments.map(
              comment => <p key={comment._id}> {comment.commentBy} {comment.text} </p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default ShowTemplate;
