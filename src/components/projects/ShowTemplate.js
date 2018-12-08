import React from 'react';
import FormTextarea from './formElements/FormTextarea';
import FormButton from './formElements/FormButton';

function ShowTemplate( { project, handleChange, createComment, deleteComment, isAuthenticated, tokenUserId } ){
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
          <div>
            <h3>Remainder</h3>
            <p>{project.remainder}</p>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Comments</p>
          <div>
            {project.comments && project.comments.map(
              comment => <div key={comment._id}>
                <div> {comment.commentBy.username} {comment.text} </div>
                <div className="media-right">
                  {isAuthenticated() && comment.commentBy._id === tokenUserId()
                    && <button className="delete"
                      onClick={() => deleteComment(comment._id)}></button>}
                </div>
              </div>

            )}
          </div>
          <hr />
          <form onSubmit={createComment}>
            <FormTextarea name="text" handleChange={handleChange}/>
            <FormButton text="Submit Comment"/>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ShowTemplate;
