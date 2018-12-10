import React from 'react';

import FormInput from './editFormElements/FormInput';
import FormTextarea from './editFormElements/FormTextarea';
import FormButton from './editFormElements/FormButton';

function ProjectForm({ handleEditChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput name="title" type="text" placeholder="Your project title" handleChange={handleEditChange} />
      <FormInput name="from" type="text" placeholder="Current role" handleChange={handleEditChange}/>
      <FormInput name="to" type="text" placeholder="Future role" handleChange={handleEditChange}/>
      <FormInput name="goal" type="number" placeholder="100 coins" handleChange={handleEditChange}/>
      <FormTextarea name="story" placeholder="Tell your story here..." handleChange={handleEditChange}/>
      <FormButton text="Create"/>
    </form>
  );
}

export default ProjectForm;
