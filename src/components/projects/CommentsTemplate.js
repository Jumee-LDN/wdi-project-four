import React from 'react';
import FormTextarea from './formElements/FormTextarea';
import FormButton from './formElements/FormButton';

function CommentsTemplate( { project, handleChange, createComment, deleteComment, isAuthenticated, tokenUserId } ){
  return(
    <div>
      <div>
        <p>All comments</p>
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
        <form onSubmit={createComment}>
          <FormTextarea name="Comment" handleChange={handleChange}/>
          <FormButton text="Submit Comment"/>
        </form>
      </div>
    </div>
  );
}

export default CommentsTemplate;
