import React from 'react';
import { ButtonProps } from 'antd';
import { Btn } from './styledButton';
interface PropsType extends ButtonProps {
  showDrawer?: React.MouseEventHandler;
}

export const Button: React.FC<PropsType> = (props) => {
  const { type, value, shape, size, icon, showDrawer } = props;

  return (
    <Btn type={type} shape={shape} size={size} icon={icon} onClick={showDrawer}>
      {value}
    </Btn>
  );
};

export default Button;
