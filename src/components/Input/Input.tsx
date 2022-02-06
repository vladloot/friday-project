import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import s from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

const Input: FC<SuperInputTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,

  ...restProps
}) => {
  Input.defaultProps = {
    onChangeText: () => null,
    onEnter: () => null,
    error: '',
    spanClassName: '',
  };
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void =>
    (onChange && onChange(e)) || (onChangeText && onChangeText(e.currentTarget.value));
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): boolean | void =>
    (onKeyPress && onKeyPress(e)) || (onEnter && e.key === 'Enter' && onEnter());
  const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
  const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className}`;

  return (
    <>
      <input
        type="text"
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  );
};

export default Input;
