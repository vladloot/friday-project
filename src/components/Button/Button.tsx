import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан


import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
  disabled?: boolean
};

export const Button: React.FC<ButtonPropsType> = (
  {
    red, className, disabled,
    ...restProps
  },
) => {
  const finalClassName = `${red ? s.red : s.default} ${className}`;

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default Button;
