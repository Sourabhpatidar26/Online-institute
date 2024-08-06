import { Fragment, ReactNode } from 'react';
import './badge.scss';

const Badge = ({ children, className, size, variant, weight, ...rest }) => {
    const classes = `${size || ''} ${variant || ''} ${weight || ''} ${className || ''} py-2 px-3 badge whitespace-nowrap`;
    return (
        <Fragment>
            <div className={classes} {...rest}>
                {children}
            </div>
        </Fragment>
    );
};

export default Badge;
