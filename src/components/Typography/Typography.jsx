import { ReactNode } from 'react';

const Typography = ({
  tag: Tag = 'p',
  children,
  className = '',
  size = '',
  color = '',
  weight = '',
  title = '',
  ...rest
}) => {
  const classes = `${size} ${color} ${weight} ${className} text`;

  return (
    <Tag className={classes} title={title} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
