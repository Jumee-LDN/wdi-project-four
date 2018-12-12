import React from 'react';
import FormButton from './formElements/FormButton';
import FormInput from './formElements/FormInput';

function SupportsTemplate( { project, handleChange, createSupport, isAuthenticated } ){
  return(
    <div>
      <div className="title-section">
        <h3>Support </h3>
      </div>

      <div>
        { project.supports.length > 0 ?
          <div>
            <p><span className="remainder-number">{ project.remainder }</span> points more to go</p>
          </div>
          :
          <p>no support yet...</p>
        }
      </div>
      <div>
        {!isAuthenticated() &&
          <div className="notice-message">
            <p>Please login to support points.</p>
          </div>
        }

        <form onSubmit={createSupport}>
          <FormInput name="amount" type="number" handleChange={handleChange} min="1" max="100" placeholder="30 points"/>
          <FormButton text="Support"/>
        </form>
      </div>
    </div>
  );
}

export default SupportsTemplate;
