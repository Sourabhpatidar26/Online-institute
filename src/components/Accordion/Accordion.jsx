import { Fragment } from 'react';
import './accordion.scss';

const Accordion = ({ id, className, title, decs, ...rest }) => {
    const classes = `${className || ''}`;
    return (
        <Fragment>  
            <div className={` ${classes} accordionBox collapse collapse-arrow overflow-visible rounded-none border border-neutral-content`} {...rest}>
                <input type="radio" name={id} /> 
                <div className="collapse-title text-base font-medium text-base-200 bg-base-100 pt-5 ">
                    {title}
                </div>
                <div className="collapse-content bg-neutral border-neutral-content border-t-[1px]"> 
                    <p>{decs}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Accordion;
