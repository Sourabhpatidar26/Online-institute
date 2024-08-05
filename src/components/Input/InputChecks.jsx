import React from 'react';
import './input.scss';

const InputChecks = ({ id, type = 'checkbox', label, className = '', ...rest }) => {
  return (
    <div className={`${type}Field ${className}`}>
      {label && (
        <label htmlFor={id} className="label gap-3 justify-start cursor-pointer p-0 inputLabel">
          <input 
            type={type} 
            id={id} 
            name={id} 
            className={`${type} checked:bg-primary checkbox-primary`} 
            {...rest} // Spread remaining props here
          />
          <span className="label-text">{label}</span>
        </label>
      )}
    </div>
  );
};

export default InputChecks;
