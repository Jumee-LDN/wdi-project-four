import React from 'react';

function FormTextarea({ name, handleChange }) {
  return (
    <div className="field">
      <label className="label is-size-5" htmlFor={name}>{name[0].toUpperCase() + name.substr(1, name.length - 1)}</label>
      <textarea className="textarea is-link" name={name} onChange={handleChange}></textarea>
    </div>
  );
}

export default FormTextarea;
