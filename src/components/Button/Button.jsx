import Image from 'next/image';
import { ReactNode } from 'react'; 
import "./button.scss";

const Button = ({ size = '', children, variant, className, icon, iconPosition, onClick, ...rest }) => {
    const Size = size || ''; 
    const classes = `btn uppercase border rounded-lg ${Size} ${variant || ''} ${className || ''}`;
    
    return (
        <button className={classes} {...rest} onClick={onClick}>
            {icon && iconPosition === 'left' && <Image src={icon} alt="icon" />}
            {children}
            {icon && iconPosition === 'right' && <Image src={icon} alt="icon" />}
        </button>
    );
};

export default Button;
