import React from 'react';

function FormInput({ name, type, handleChange, min, max, placeholder, text }) {
  return(
    <div className="field" id="form-input-container">
      <label className="label is-size-5" htmlFor={name}>{name[0].toUpperCase() + name.substr(1, name.length - 1)}</label>
      <input className="input is-link" name={name} type={type} min={min} max={max} placeholder={placeholder} onChange={handleChange} value={text}/>
    </div>
  );
}

export default FormInput;
