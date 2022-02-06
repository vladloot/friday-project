import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import s from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>;

type InputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

const Input: FC<InputTextPropsType> = ({
                                         type,
                                         value,
                                         onChange, onChangeText,
                                         onKeyPress, onEnter,
                                         error,
                                         className, spanClassName,

                                         ...restProps
                                       }) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange
    && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);
    onEnter
    && e.key === 'Enter'
    && onEnter();
  };

  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`;
  const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className}`; // need to fix with (?:) and s.superInput

  return (
    <label>
      <input
        type={'text'}
        value={value || ''}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </label>
  );
};

export default Input;
