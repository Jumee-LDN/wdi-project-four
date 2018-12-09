import React from 'react';

import FormInput from './formElements/FormInput';
import FormTextarea from './formElements/FormTextarea';
import FormButton from './formElements/FormButton';

function ProjectForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput name="project title" type="text" placeholder="Your project name" handleChange={handleChange} />
      <FormInput name="from" type="text" placeholder="Current role" handleChange={handleChange}/>
      <FormInput name="to" type="text" placeholder="Future role" handleChange={handleChange}/>
      <FormInput name="goal" type="number" placeholder="100 coins" handleChange={handleChange}/>
      <FormTextarea name="story" placeholder="Tell your story here..." handleChange={handleChange}/>
      <FormButton text="Create"/>
    </form>
  );
}

export default ProjectForm;
