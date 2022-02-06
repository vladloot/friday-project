import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
};

export const Button: FC<ButtonPropsType> = (
  {
    red, className,
    ...restProps
  },
) => {
  const finalClassName = `${red ? s.red : s.default} ${className}`;

  return (
    <button
      className={finalClassName}
      {...restProps}
    />
  );
};

export default Button;
