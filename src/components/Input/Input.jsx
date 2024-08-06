import { Fragment, useState } from 'react';
import './input.scss';

const Input = ({ id, label, inputSize, type, className, placeholder, error, value, ...rest }) => {
  const classes = `${inputSize || ''} ${className || ''}`;

  return (
    <Fragment>
      <div className="inputField">
        {label && (
          <label htmlFor={id} className="block pb-1 inputLabel">
            {label}
          </label>
        )}
        <div className="rounded-0 mb-4">
          <input
            type={type}
            id={id}
            autoComplete="off"
            className={`${classes} py-3 px-4 border rounded-lg`}
            placeholder={placeholder}
            value={value}
            {...rest}
          />
          {error && <div className="text-red-600">{error}</div>}
        </div>
      </div>
    </Fragment>
  );
};

export default Input;
