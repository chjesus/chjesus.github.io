import React from 'react';
import { Btn } from './styledButton';

interface PropsButton {
  type:
    | 'default'
    | 'link'
    | 'text'
    | 'ghost'
    | 'primary'
    | 'dashed'
    | undefined;
  shape: 'circle' | 'round' | undefined;
  value?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<PropsButton> = (props) => {
  const { type, value, shape, icon } = props;

  return (
    <Btn type={type} shape={shape} size="large" icon={icon}>
      {value}
    </Btn>
  );
};

export default Button;
