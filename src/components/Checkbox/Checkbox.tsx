import React, { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import s from './Checkbox.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

const Checkbox: FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  children,

  ...restProps
}) => {
  Checkbox.defaultProps = {
    onChangeChecked: () => null,
    spanClassName: '',
  };
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void =>
    (onChange && onChange(e)) ||
    (onChangeChecked && onChangeChecked(e.currentTarget.checked));

  const finalInputClassName = `${s.checkbox} ${className || ''}`;

  return (
    <label htmlFor="checkbox">
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {children && <span className={s.spanClassName}>{children}</span>}
    </label>
  );
};

export default Checkbox;
