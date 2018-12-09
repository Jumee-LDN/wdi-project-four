import React from 'react';

function FormTextarea({ name, handleChange, placeholder }) {
  return (
    <div className="field" id="form-input-container">
      <label className="label is-size-5" htmlFor={name}>{name[0].toUpperCase() + name.substr(1, name.length - 1)}</label>
      <textarea className="textarea is-link" name={name} placeholder={placeholder} onChange={handleChange}></textarea>
    </div>
  );
}

export default FormTextarea;
