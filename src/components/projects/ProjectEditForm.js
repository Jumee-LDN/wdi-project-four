import React from 'react';

import FormButton from './formElements/FormButton';

function ProjectForm( props ) {
  return(
    <form onSubmit={props.handleSubmit} className="form-container">
      <div className="field" id="form-input-container">
        <label className="label is-size-5">Project title</label>
        <input className="input is-link" name="title" type="text" onChange={props.handleEditChange} value={props.project.title || ''}/>
      </div>
      <div className="field" id="form-input-container">
        <label className="label is-size-5">From</label>
        <input className="input is-link" name="from" type="text" onChange={props.handleEditChange} value={props.project.from || ''}/>
      </div>
      <div className="field" id="form-input-container">
        <label className="label is-size-5">To</label>
        <input className="input is-link" name="to" type="text" onChange={props.handleEditChange} value={props.project.to || ''}/>
      </div>
      <div className="field" id="form-input-container">
        <label className="label is-size-5">Goal</label>
        <input className="input is-link" name="goal" type="number" min="1" onChange={props.handleEditChange} value={props.project.goal || ''}/>
      </div>
      <div className="field" id="form-input-container">
        <label className="label is-size-5">Story</label>
        <textarea className="textarea is-link" name="story" onChange={props.handleEditChange} value={props.project.story || ''}></textarea>
      </div>

      <FormButton text="Submit"/>
    </form>
  );
}

export default ProjectForm;
