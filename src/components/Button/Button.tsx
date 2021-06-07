import React from 'react';

import { ButtonShape, ButtonSize, ButtonType } from 'antd/lib/button';
import { Btn } from './styledButton';

interface PropsType {
  type: ButtonType;
  shape: ButtonShape;
  size: ButtonSize;
  value?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<PropsType> = (props) => {
  const { type, value, shape, size, icon } = props;

  return (
    <Btn type={type} shape={shape} size={size} icon={icon}>
      {value}
    </Btn>
  );
};

export default Button;
