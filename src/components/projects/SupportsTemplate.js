import React from 'react';
import FormButton from './formElements/FormButton';
import FormInput from './formElements/FormInput';

function SupportsTemplate( { project, handleChange, createSupport } ){
  return(
    <div>
      <div className="title-section">
        <h3>Support </h3>
      </div>
      
      <div>
        { project.supports.length > 0 ?
          <div>
            <p><span className="remainder-number">{ project.remainder }</span> coins more to go</p>
          </div>
          :
          <p>no support yet...</p>
        }
      </div>
      <div>
        <form onSubmit={createSupport}>
          <FormInput name="amount" type="number" handleChange={handleChange} min="1" />
          <FormButton text="Support"/>
        </form>
      </div>
    </div>
  );
}

export default SupportsTemplate;
