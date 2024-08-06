import { Fragment } from 'react';
import './input.scss';

const Textarea = ({ id, label, className, placeholder, ...rest }) => {
  const classes = `${className || ''}`;

  return (
    <Fragment>
      <div className='inputField'>
        {label && (
          <label htmlFor={id} className="block inputLabel">
            {label}
          </label>
        )}
        <div className="mt-1">
          <div className={`rounded-0 ${classes}`}>
            <textarea
              id={id}
              autoComplete="off"
              className="py-3 px-4 border rounded-none w-full block"
              placeholder={placeholder}
              {...rest}
            ></textarea>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Textarea;
