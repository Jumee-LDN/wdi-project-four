import React from 'react';
import FormTextarea from './formElements/FormTextarea';
import FormButton from './formElements/FormButton';

function CommentsTemplate( props ){
  return(
    <div>
      <div>
        <p>All comments</p>
        <div>
          {props.project.comments && props.project.comments.map(
            comment => <div key={comment._id}>
              <div> {comment.commentBy.username} {comment.text} </div>
              <div className="delete-button">
                {props.isAuthenticated() && comment.commentBy._id === props.tokenUserId()
                  && <button className="delete"
                    onClick={() => props.deleteComment(comment._id)}></button>}
              </div>
            </div>
          )}
        </div>
        <form onSubmit={props.createComment}>
          <FormTextarea name="text" text={props.text} handleChange={props.handleChange}/>
          <FormButton text="Submit Comment"/>
        </form>
      </div>
    </div>
  );
}

export default CommentsTemplate;
