import { Fragment } from 'react';
import './input.scss';

const Select = ({ label, options, className, ...rest }) => {
  const classes = `${className || ''}`;

  return (
    <Fragment>
      <div className='selectField'>
        {/* Uncomment if you want to include the label */}
        {/* {label && (
          <label className="block inputLabel">
            {label}
          </label>
        )} */}
        <select className={` ${classes} select p-4 pr-10 border rounded-none w-full `} {...rest}>
          <option disabled selected>{label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};

export default Select;
