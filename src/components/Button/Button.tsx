import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import s from "./Button.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
  disabled?: boolean
};

export const Button: React.FC<SuperButtonPropsType> = ({
  disabled,
  red,
  className,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
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
