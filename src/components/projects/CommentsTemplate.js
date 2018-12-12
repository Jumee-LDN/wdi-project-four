import React from 'react';
import FormButton from './formElements/FormButton';

function CommentsTemplate( props ){
  return(
    <div>
      <div>
        <div className="title-section">
          <h3>All comments</h3>
        </div>
        <div>
          {props.project.comments && props.project.comments.map(
            comment => <div key={comment._id} className="comment-text-box">
              <div>
                <span className="comment-username">{comment.commentBy.username}</span> {comment.text}
                {props.isAuthenticated() && comment.commentBy._id === props.tokenUserId()
                  && <button className="delete-comment-button"
                    onClick={() => props.deleteComment(comment._id)}><i className="fas fa-backspace"></i></button>}
              </div>
            </div>
          )}
        </div>
        {!props.isAuthenticated() &&
          <div className="notice-message">
            <p>Please login to comment.</p>
          </div>
        }
        <form onSubmit={props.createComment}>
          <div className="field" id="form-input-container">
            <textarea className="textarea is-link" name="text" placeholder='Hi there!' onChange={props.handleChange} value={props.text}></textarea>
          </div>
          <FormButton text="Submit"/>
        </form>
      </div>
    </div>
  );
}

export default CommentsTemplate;
