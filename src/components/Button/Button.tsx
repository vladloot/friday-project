import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
};

export const Button: FC<SuperButtonPropsType> = ({ red, className, ...restProps }) => {
  Button.defaultProps = {
    red: false,
  };
  const finalClassName = `${red ? s.red : s.default} ${className}`;
  // eslint-disable-next-line react/button-has-type
  return <button className={finalClassName} {...restProps} />;
};

export default Button;
