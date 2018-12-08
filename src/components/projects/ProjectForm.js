import React from 'react';

import FormInput from './formElements/FormInput';
import FormTextarea from './formElements/FormTextarea';
import FormButton from './formElements/FormButton';

function ProjectForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="title" type="text" handleChange={handleChange} />
      <FormInput name="from" type="text" handleChange={handleChange}/>
      <FormInput name="to" type="text" handleChange={handleChange}/>
      <FormInput name="goal" type="number" handleChange={handleChange}/>
      <FormTextarea name="story" handleChange={handleChange}/>
      <FormButton text="Create"/>
    </form>
  );
}

export default ProjectForm;
